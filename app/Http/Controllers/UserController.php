<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //create
    public function create()
    {
        return view('user.create', [
            'title' => 'Create User', 
        ]);

    }
    
}
