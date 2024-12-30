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

        $courses = $courses->map(function ($course) {
            $course->course_image = $course->course_image ? url('storage/courses/' . $course->course_image) : null;
            return $course;
        });
        return response()->json([
            'message' => 'Courses fetched successfully',
            'data' => $courses
        ]);
    }


    public function show(Courses $course)
    {
        $course->load('teacher');
        $course->course_image = $course->course_image ? url('storage/courses/' . $course->course_image) : null;

        return response()->json([
            'message' => 'Course fetched successfully',
            'data' => $course
        ]);
    }

    public function getLatestThreeCourses()
    {
        $courses = Courses::latest()->take(3)->get();

        $courses = $courses->map(function ($course) {
            $course->course_image = $course->course_image ? url('storage/courses/' . $course->course_image) : null;
            return $course;
        });

        if ($courses->isEmpty()) {
            return response()->json([
                'message' => 'No courses found.',
            ], 404);
        }

        return response()->json([
            'message' => 'Latest courses fetched successfully',
            'data' => $courses
        ], 200);
    }

    function getAllCourseData($id)
    {
        

    }
}
