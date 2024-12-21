<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ContactUs;

class ContactUsApiController extends Controller
{
    
    public function contactUs(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);

        $data = $request->all();
        $data['is_read'] = '0';

    
    
        $contact = ContactUs::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Your message has been sent successfully.'
        ]);
    }
}
