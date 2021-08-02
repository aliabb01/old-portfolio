<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactMailController extends Controller
{
    public function send() {
        $data = request()->validate([
            'name' => 'required|max:25',
            'email' => 'required|email|max:40',
            'message' => 'required|max:144'
        ]);

        Mail::to('ali3abbasov@gmail.com')->send(new ContactMail($data));

        return redirect()->back();
    }
}
