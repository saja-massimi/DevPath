<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categories;

class CoursesApiController extends Controller
{
    

    function index(){

        $categories = Categories::all();
        return response()->json([
            'message' => 'Courses fetched successfully',
            'data' => $categories
        ]);
    }

    

}
