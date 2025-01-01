<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Validator;
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

    function destroy(Courses $course)
    {
        $course->delete();
        return response()->json([
            'message' => 'Course deleted successfully'
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'course_name' => 'required|string|max:255',
            'course_description' => 'required|string',
            'course_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'teacher_id' => 'required|exists:teachers,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $imagePath = null;
            if ($request->hasFile('course_image')) {
                $file = $request->file('course_image');
                $imagePath = $file->store('course_images', 'public');
            }

            $course = new Courses();
            $course->course_name = $request->input('course_name');
            $course->course_description = $request->input('course_description');
            $course->course_image = $imagePath;
            $course->teacher_id = $request->input('teacher_id');
            $course->save();

            return response()->json([
                'message' => 'Course added successfully',
                'data' => $course,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to add course',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
