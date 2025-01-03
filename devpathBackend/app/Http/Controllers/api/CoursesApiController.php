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
            'course_title' => 'required|string|max:255',
            'course_description' => 'required|string',
            'course_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'teacher_id' => 'required|exists:teachers,teacher_id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors(),
            ], 422);
        }
        $course = new Courses();

        try {

            if ($request->hasFile('course_image')) {

                $filePath = $request->file('course_image')->store('courses', 'public');
                $course->course_image = basename($filePath);
            }

            $course->course_title = $request->input('course_title');
            $course->course_description = $request->input('course_description');
            // $course->course_image = $imagePath;
            $course->teacher_id = $request->input('teacher_id');
            $course->course_price = $request->input('course_price');
            $course->course_duration = $request->input('course_duration');
            $course->diffculty_leve = $request->input('diffculty_leve');
            $course->category = $request->input('category');
            $course->learning_outcomes = $request->input('learning_outcomes');
            $course->lectures = $request->input('lectures');
            $course->quizzes = $request->input('quizzes');
            $course->language = $request->input('language');


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
