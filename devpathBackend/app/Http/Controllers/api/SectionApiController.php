<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\courseContent;
use Illuminate\Http\Request;
use App\Models\Section;

class SectionApiController extends Controller
{

    public function getSections($course_id)
    {
        $sections = Section::where('course_id', $course_id)->get();

        foreach ($sections as $section) {
            $section->content = courseContent::where('section_id', $section->section_id)->get();
        }


        return response()->json($sections);
    }


    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required',
            'name' => 'required',
            'description' => 'required',
        ]);

        $section = new Section();
        $section->course_id = $request->course_id;
        $section->name = $request->name;
        $section->description = $request->description;
        $section->save();

        return response()->json($section);
    }
}
