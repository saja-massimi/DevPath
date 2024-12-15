<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categories;

class CategoriesApiController extends Controller
{

    public function index()
    {

        $categories = Categories::all();
        return response()->json([
            'categories' => $categories
        ], 200);
    }

    public function store(Request $request)
    {
        $data = $request->only(['name', 'description']);

        $category = Categories::create($data);

        return response()->json([
            'category' => $category
        ], 201);
    }

    public function show($category)
    {
        $category = Categories::find($category);
        return response()->json([
            'category' => $category
        ], 200);
    }

    public function update(Request $request, $category)
    {
        $data = $request->only(['name', 'description']);
        $category = Categories::find($category);
        $category->update($data);
        return response()->json([
            'category' => $category
        ], 200);
    }
}
