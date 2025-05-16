<?php

use App\Http\Controllers\IssueController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('NewDashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        
    ]);
});

Route::post('createIssue', [IssueController::class, 'storeIssue'])->name('createIssue');
Route::get('createIssue', [IssueController::class, 'createIssue'])->name('createIssueForm');

Route::post('/newDashboard',[IssueController::class, 'storeIssue'])->name('newDashboard.createIssue');
Route::get('/newDashboard', function () {
    return Inertia::render('NewDashboard');
})->name('newDashboard');
Route::get('/newDashboard/{issue}', [IssueController::class, 'showIssue'])->name('newDashboard.showIssue');
Route::post('/Admin/AdminDashboard/previewIssue', [IssueController::class, 'previewIssue'])->name('adminDashboard.previewIssue');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
