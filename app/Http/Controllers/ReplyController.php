<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Issues;
use App\Models\Reply;
use Illuminate\Support\Facades\Auth;

class ReplyController extends Controller
{
  
   public function store(Request $request, Reply $reply, Issues $issue)
    {
        // Check if the issue exists
        if (!$issue) {
            return redirect()->route('adminDashboard')->with('error', 'Issue not found.');
        }
    { 
      
        // Validate the request data
        $validatedData = $request->validate([
            'content' => 'required|string|max:255',
        ]);

        // Create a new reply
        $issue->replies()->create([
            'user_id' => Auth::id(),
            'issue_id' => $issue->id,
            'content' => $validatedData['content'],
        ]);

        // Redirect back to the replies page with a success message
        // redirect()->url('/showIssue');
       
        return redirect()->route('issues.show', ['issue' => $issue->id])->with('success', 'Reply created successfully.');
    }
    
}
}