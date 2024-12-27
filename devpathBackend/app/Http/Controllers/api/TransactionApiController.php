<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TransactionApiController extends Controller
{
   
    public function store(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        try {
            $validatedData = $request->validate([
                'user_id' => 'required|integer',
                'course_id' => 'required|integer',
                'amount' => 'required|integer|min:1',
                'type' => 'required|string',
                'payment_method_id' => 'required|string',
                'payment_status' => 'required|string',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'error' => $e->errors(),
            ], 422);
        }

        DB::beginTransaction();

        try {
            // Create the payment intent
            $paymentIntent = PaymentIntent::create([
                'amount' => $validatedData['amount'],
                'currency' => 'usd',
                'payment_method' => $validatedData['payment_method_id'],
                'confirmation_method' => 'manual',
                'confirm' => true,
                'return_url' => env('STRIPE_RETURN_URL'), // Use environment variable for flexibility
            ]);

            // Save the transaction to the database
            $transaction = $request->user()->transactions()->create([
                'user_id' => $validatedData['user_id'],
                'course_id' => $validatedData['course_id'],
                'amount' => $validatedData['amount'],
                'type' => $validatedData['type'],
                'payment_status' => 'pending',
                'stripe_payment_intent_id' => $paymentIntent->id,
            ]);

            DB::commit();

            return response()->json([
                'message' => 'Payment Successful',
                'transaction' => $transaction,
                'clientSecret' => $paymentIntent->client_secret,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Transaction Error: ' . $e->getMessage()); // Log error for debugging
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
