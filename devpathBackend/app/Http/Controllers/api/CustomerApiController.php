<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class CustomerApiController extends Controller
{
    public function index()
    {


        $users = User::where('role', 'student')->get();
        return response()->json([
            'users' => $users
        ], 200);
    }
}
