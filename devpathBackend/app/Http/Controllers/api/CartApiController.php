<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;

class CartApiController extends Controller
{


    public function index()
    {

        $cart = Cart::with('course')->where('user_id', auth()->user()->id)->get();



        return response()->json([
            'success' => true,
            'message' => 'Cart Items',
            'data' => $cart
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required',
        ]);

        $cart = Cart::create($request->all());


        return response()->json([
            'success' => true,
            'message' =>  'Item AddedCart Successfully',
            'data' => $cart
        ]);
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {

        
        Cart::destroy($id);

        return response()->json([
            'success' => true,
            'message' => 'Cart Item Deleted Successfully',
        ]);
    }
}
