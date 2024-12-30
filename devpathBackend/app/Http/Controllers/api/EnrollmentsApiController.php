<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Enrollments;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class EnrollmentsApiController extends Controller
{
    public function userCourses()
    {
        // Get the logged-in user
        $user = Auth::user();
        $courses = $user->courses()->get();
        $courses = $courses->map(function ($course) {
            $course->course_image = $course->course_image ? url('storage/courses/' . $course->course_image) : null;
            return $course;
        });

        return response()->json([
            'success' => true,
            'data' => $courses,
        ], 200);
    }

    public function store(Request $request)
    {


        $enrollment = Enrollments::where('user_id', Auth::id())
            ->where('course_id', $request->course_id)
            ->first();

        if ($enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'You are already enrolled in this course.',
            ], 422);
        }

        $validator = Validator::make($request->all(), [
            'course_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            // Create enrollment
            $enrollment = Enrollments::create([
                'user_id' => Auth::id(),
                'course_id' => $request->course_id,
                'enrolled_at' => now(),
            ]);

            return response()->json([
                'success' => true,
                'data' => $enrollment,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to enroll in the course.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
