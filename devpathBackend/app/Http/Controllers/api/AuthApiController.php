<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthApiController extends Controller
{
    public function register(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string',
                'email' => 'required|email|unique:users',
                'password' => 'required|confirmed|min:8',
            ],
            [

                'name.required' => 'The name field is required.',
                'name.string' => 'The name must be a valid string.',
                'name.max' => 'The name may not be greater than 255 characters.',

                'email.required' => 'The email field is required.',
                'email.email' => 'Please provide a valid email address.',
                'email.unique' => 'This email is already taken. Please choose another.',
                'email.max' => 'The email may not be greater than 255 characters.',

                'password.required' => 'The password field is required.',
                'password.confirmed' => 'Password confirmation does not match.',
                'password.min' => 'The password must be at least 8 characters long.',
            ]
        );


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'User registered successfully',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
        ]);
    }

    public function login(Request $request)
    {
        // Validation for login
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user) {
            // Check if password matches
            if (Hash::check($request->password, $user->password)) {
                // Create token
                $token = $user->createToken('myToken')->plainTextToken;

                return response()->json([
                    'status' => true,
                    'message' => 'Login successful',
                    'token' => $token,
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->name,
                        'email' => $user->email,

                    ],
                ]);
            }
            return response()->json([
                'status' => false,
                'message' => 'Password did not match'
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'Invalid login credentials'
        ]);
    }

    public function logout(Request $request)
    {
      //delete user id from session  
      

        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
