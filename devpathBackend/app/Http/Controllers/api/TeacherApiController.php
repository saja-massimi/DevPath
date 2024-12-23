<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Teacher;

class TeacherApiController extends Controller
{
    public function index()
    {

        $teachers = Teacher::all();
        return response()->json([
            'teachers' => $teachers
        ], 200);
    }
}
