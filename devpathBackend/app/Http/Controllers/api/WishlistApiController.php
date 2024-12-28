<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Wishlist;

class WishlistApiController extends Controller
{
    public function index()
    {
      
        $wishlist = Wishlist::with('course')->where('user_id', auth()->id())->get();

        $wishlist = $wishlist->map(function ($item) {
            $item->course->course_image = $item->course->course_image ? url('storage/courses/' . $item->course->course_image) : null;
            return $item;
        });

        return response()->json([
            'success' => true,
            'message' => 'Wishlist Items',
            'data' => $wishlist,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,course_id',
        ]);

        $exists = Wishlist::where('user_id', auth()->id())
            ->where('course_id', $request->course_id)
            ->exists();

        if ($exists) {
            return response()->json([
                'success' => false,
                'message' => 'This item is already in your wishlist.',
            ]);
        }

        $wishlist = Wishlist::create([
            'user_id' => auth()->id(),
            'course_id' => $request->course_id,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Wishlist Item Added Successfully',
            'data' => $wishlist,
        ]);
    }

    public function show($id)
    {
        $wishlistItem = Wishlist::with('course')->where('course_id', $id)->where('user_id', auth()->id())->first();


        if (!$wishlistItem) {
            return response()->json(['success' => false, 'message' => 'Wishlist Item Not Found'], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $wishlistItem,
        ]);
    }

    public function destroy($id)
    {
        $wishlistItem = Wishlist::where('course_id', $id)->where('user_id', auth()->id())->first();
        if (!$wishlistItem) {
            return response()->json(['success' => false, 'message' => 'Wishlist Item Not Found'], 404);
        }

        $wishlistItem->delete();

        return response()->json([
            'success' => true,
            'message' => 'Wishlist Item Deleted Successfully',
        ]);
    }
}
