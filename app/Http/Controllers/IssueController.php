<?php

namespace App\Http\Controllers;
use App\Models\Issues;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IssueController extends Controller
{
    public function createIssue()
    {
       return Inertia::render('Pages/Dashboard');

    }

    public function storeIssue(Request $request)
    {
        // dd($request->all());

     // Validate and store the issue
        $validatedData = $request->validate([
            
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
           
        ]);

            //sends issues to database
            $issues = Issues::create([
            'user_id' => auth()->id(), 
            'name' => $request->name,
            'email' => $request->email,
            'title' => $request->title,
            'description' => $request->description,
           
            
        ]);
           return redirect()->route('newDashboard')->with('success', 'Issue created successfully.');
    
    }

    // public function showIssue(Issue $issue)
    // {
    //     // Logic to retrieve and display the issue details
    //     return Inertia::render('Pages/newDashboard', [
    //         'issue' => $issue,
    //     ]);
    // }

    public function previewIssue(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|string|in:open,in progress,closed',
        ]);
    $get=Issues::all();
        return Inertia::render('Pages/newDashboard', [
            'issue' => $data,
        ]);
        
    }
   
};


   