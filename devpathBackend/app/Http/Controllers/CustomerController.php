<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Enrollments;
use Illuminate\Support\Facades\Auth;
use App\Models\Teacher;

use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    public function index()
    {

        if (!Auth::user()) {
            return redirect('/');
        }
        $users = User::where('role', 'student')->get();

        return view('dashboard.users', compact('users'));
    }


    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $wasPendingTeacher = $user->is_pending_teacher;


        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'role' => $request->input('role'),
            'address' => $request->input('address'),
            'is_pending_teacher' => 0,
        ]);

        if ($request->input('role') === 'teacher' && $wasPendingTeacher) {
            if (!Teacher::where('user_id', $user->id)->exists()) {
                
                Teacher::create([
                    'user_id' => $user->id,
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                ]);
            }
        }

        return response()->json(['success' => true]);
    }




    public function user_courses($id)
    {
        $courses = DB::table('courses')
            ->join('enrollments', 'courses.course_id', '=', 'enrollments.course_id')
            ->where('enrollments.user_id', $id)
            ->select('courses.*', 'enrollments.enrolled_at')
            ->get();

        $user = User::findOrFail($id);

        return view('dashboard.UserCourses', [
            'user' => $user,
            'courses' => $courses,
        ]);
    }

    public function pending()
    {
        $users = User::where('role', 'student')->where('is_pending_teacher', 1)->get();


        return view('dashboard.pending', compact('users'));
    }
}
