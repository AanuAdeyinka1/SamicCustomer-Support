<?php

namespace App\Http\Controllers;
use App\Models\Issues;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class IssueController extends Controller
{
     public function index(){
        
        $issues = Issues::with('issues'); //or paginate(3)

        return Inertia::render('Pages/adminDashboard', [
            'issues' => $issues,
        ]);
    }
    public function createIssue()
    {
       return Inertia::render('Pages/Dashboard');

    }

    public function showIssue(Issues $issue)
    {
      
        
        // Check if the issue exists
        if (!$issue) {
            return redirect()->route('adminDashboard')->with('error', 'Issue not found.');
        }
        $issues = Issues::paginate(3);
       
        return Inertia::render('Issues/ShowIssue', [
            'issue' => $issue->load(['replies.user', 'user'=> function($query) {
                $query->latest();
            }]),
            
        ]);
        
    }

    
    public function editIssue(Issues $issues)
    {
        return Inertia::render('Pages/Admin/EditIssue', [
            'issues' => $issues,
        ]);
    }
    public function storeIssue(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            
           
        ]);

        // Sends issues to database
        Issues::create([
            'user_id' => optional(Auth::user())->id,
            'name' => $request->name,
            'email' => $request->email,
            'title' => $request->title,
            'description' => $request->description,
           

        ]);
        // $issues->title = $request->input('title');
        // $issues->description = $request->input('description');
        // $issues->status = 'open'; // Default status 
        // $issues->user_id = Auth::id(); // Assuming you have user authentication
        // $issues->save();
        return redirect()->route('newDashboard')->with('success', 'Issue created successfully.');
    }
  
    public function updateIssue(Request $request, Issues $issues)
    {
        
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|string|in:open,in progress,closed',
        ]);

        $issues->update($request->all());
 
        return redirect()->route('/adminDashboard/' .$issues->id)->with('success', 'Issue updated successfully.');
    }

   
};


   