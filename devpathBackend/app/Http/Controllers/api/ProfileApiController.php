<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileApiController extends Controller
{

    public function profile(Request $request)
    {
        return response()->json([
            'status' => true,
            'message' => 'User profile fetched successfully',
            'user' => [
                'id' => $request->user()->id,
                'name' => $request->user()->name,
                'email' => $request->user()->email,
                'role' => $request->user()->role,
            ],
        ]);
    }

    public function updateProfile(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string',
                'email' => 'required|email|unique:users,email,' . $request->user()->id,
            ],
            [
                'name.required' => 'The name field is required.',
                'name.string' => 'The name must be a valid string.',
                'name.max' => 'The name may not be greater than 255 characters.',

                'email.required' => 'The email field is required.',
                'email.email' => 'Please provide a valid email address.',
                'email.unique' => 'This email is already taken. Please choose another.',
                'email.max' => 'The email may not be greater than 255 characters.',
            ]
        );

        $user = $request->user();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json([
            'status' => true,
            'message' => 'User profile updated successfully',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
        ]);
    }
}
