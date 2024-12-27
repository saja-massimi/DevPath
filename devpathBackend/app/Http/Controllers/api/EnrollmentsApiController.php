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

        return response()->json([
            'success' => true,
            'data' => $courses,
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'course_id' => 'required|exists:courses,id' 
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
            ]);

            return response()->json([
                'success' => true,
                'data' => $enrollment,
            ], 201); // 201 Created status
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to enroll in the course.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
