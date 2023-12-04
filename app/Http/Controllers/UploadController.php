<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UploadController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $bookData = Book::where('user_id', auth()->user()->id)->with('chapters')->paginate(10);

    return Inertia::render('Upload/Index', [
      'bookData' => $bookData,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('Upload/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    
    $requestBook = $request->all();
    $requestBook['user_id'] = Auth::user()->id;
    Book::create($requestBook);
    
    return redirect()->route('uploads.index')->with('success', 'Book created successfully.');
    
  }

  /**
   * Display the specified resource.
   */
  public function show(Request $request, Book $book)
  {
    $request = $request->route('book_id');
    $books = Book::with('chapters')->where('id', $request)->first();
    //dd($books);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Book $book)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Book $book)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Book $book)
  {
    //
  }
}
