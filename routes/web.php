<?php

use App\Http\Controllers\IssueController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReplyController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('NewDashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        
    ]);
});
 //Dasboard
Route::post('/dashboard', [IssueController::class, 'storeIssue'])->name('createIssue');
Route::get('/dashboard', [IssueController::class, 'createIssue'])->name('createIssueForm');

//newDasboard
Route::post('/newDashboard',[IssueController::class, 'storeIssue'])->name('newDashboard.createIssue');
Route::get('/newDashboard', function () {return Inertia::render('NewDashboard');})->name('newDashboard');

//adminDashboard
// Route::get('/adminDashboard', [IssueController::class, 'updateIssue'])->name('adminDashboard');
Route::get('/adminDashboard', function () {
    $issues = DB::table('issues')->get();
   
    return Inertia::render('AdminDashboard', [
        'issues' => $issues,
    ]);
})->name('adminDashboard');

//ShowIssue
Route::get('/showIssue/{issue}', [IssueController::class, 'showIssue'])->name('issues.show');

Route::post('/showIssue/{issue}', [ReplyController::class, 'store'])->name('replies.store');
Route::post('/showIssue/{issue}/replies', [ReplyController::class, 'store'])->name('replies.store');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
