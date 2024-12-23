<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Teacher;
use App\Models\User;

class TeacherApiController extends Controller
{
    public function index()
    {

        $teachers = Teacher::all();
        return response()->json([
            'teachers' => $teachers
        ], 200);
    }
    public function show($userId)
    {
        $teacher = Teacher::with('user')
            ->where('user_id', $userId)
            ->first();

        if (!$teacher) {
            return response()->json([
                'message' => 'Teacher not found'
            ], 404);
        }

        return response()->json([
            'teacher' => $teacher
        ], 200);
    }


    public function update(Request $request)
    {
        $userId = auth()->user()->id;

        $validatedData = $request->validate([
            'email' => 'required|email|unique:users,email,' . $userId,
            'phone' => 'nullable|string|max:15',
        ]);

        $user = User::findOrFail($userId);
        $user->email = $validatedData['email'];
        $user->save();

        $teacher = Teacher::where('user_id', $userId)->first();
        if ($teacher) {
            $teacher->email = $validatedData['email'];
            $teacher->phone = $validatedData['phone'] ?? $teacher->phone;
            $teacher->address = $request->address ?? $teacher->address;
            $teacher->experiene = $request->experiene ?? $teacher->experiene;
            $teacher->save();
        }

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user,
            'teacher' => $teacher ?? null,
        ], 200);
    }
}
