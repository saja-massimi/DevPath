<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Enrollments;
use Illuminate\Support\Facades\Auth;

class EnrollmentsApiController extends Controller
{
    public function userCourses()
    {
        // Get the logged-in user
        $user = Auth::user();

        // Fetch the courses the user is enrolled in using the many-to-many relationship
        $courses = $user->courses()->get(); // Will use the 'course_id' as the foreign key in the pivot table

        return response()->json([
            'success' => true,
            'data' => $courses,
        ], 200);
    }
}
