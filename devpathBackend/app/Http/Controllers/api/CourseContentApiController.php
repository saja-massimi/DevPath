<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\courseContent;

class CourseContentApiController extends Controller
{
    function getCourseContent()
    {

        $content = courseContent::all();

        return response()->json($content);
    }

    function getCourseContentById($id)
    {
        $content = courseContent::find($id);

        if ($content) {
            return response()->json($content);
        } else {
            return response()->json([
                'message' => 'No content found.',
            ], 404);
        }
    }

    function store()
    {
        $content = new courseContent();
        $content->course_id = request('course_id');
        $content->section_id = request('section_id');

        $content->title = request('title');

        $content->description = request('description');
        $content->video_url = request('video_url');

        $content->duration = request('duration');
        $content->content_type = request('content_type');




        $content->save();

        return response()->json([
            'message' => 'Content added successfully',
            'data' => $content
        ]);
    }

    function update($id)
    {
        $content = courseContent::find($id);
        $content->course_id = request('course_id');
        $content->content = request('content');
        $content->save();

        return response()->json([
            'message' => 'Content updated successfully',
            'data' => $content
        ]);
    }
}
