<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\User;
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
    return Inertia::render('Browse/Index', [
      'bookData' => Book::latest()->with('chapters')->paginate(8),
    ]);
  }


  /**
   * Display the specified resource.
   */
  public function show(Book $book)
  {
    return Inertia::render('Browse/Show', [
      'book' => $book->load('chapters'),
    ]);
  }

  /**
   * Display the specified resource.
   */
  public function books()
  {
    return response()->json([
      'books' => Book::latest()->get()
    ]);
  }
}
