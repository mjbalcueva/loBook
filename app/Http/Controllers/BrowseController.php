<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrowseController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $bookData = Book::with('chapters')->paginate(10);

    return Inertia::render('Browse/Index', [
      'bookData' => $bookData,
    ]);
  }


  /**
   * Display the specified resource.
   */
  public function show(Book $book)
  {
    // Route::get('/browse/{book_id}', [BrowseController::class, 'show'])->name('browse.show');
    // display the book and its chapters that matches the book_id in the route

    dd($book);
  }
}
