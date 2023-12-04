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
  public function show(Request $request, Book $book)
  {
    $request = $request->route('book_id');
    $books = Book::with('chapters')->where('id', $request)->first();
    // dd($books);
  }
}
