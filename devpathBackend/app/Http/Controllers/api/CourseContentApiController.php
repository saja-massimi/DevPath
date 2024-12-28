<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\courseContent;

class CourseContentApiController extends Controller
{
    function getCourseContent()
    {

        $content = courseContent::all();

        return response()->json($content);
    }
}
