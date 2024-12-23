<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Courses;

class CoursesApiController extends Controller
{


    function index()
    {

        $courses = Courses::all();
        return response()->json([
            'message' => 'Courses fetched successfully',
            'data' => $courses
        ]);
    }

    public function show(Courses $course)
    {
        $course->load('teacher'); 
    
        return response()->json([
            'message' => 'Course fetched successfully',
            'data' => $course
        ]);
    }
    
}