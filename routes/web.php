<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UploadController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth', 'verified')->group(function () {
  Route::get('/', function () {
    return Inertia::render('Browse', [
      'laravelVersion' => Application::VERSION,
      'phpVersion' => PHP_VERSION,
    ]);
  });
  /**
   *  "/"
   *  "/{book_id}"
   *  "/{book_id}/{chapter_id}"
   *
   *  "/uploads"
   *  "/uploads/books"
   *  "/uploads/{book_id}/chapters"
   *  "/uploads/{book_id}/{chapter_id}"
   * 
   *  index   -> GET    -> show all
   *  show    -> GET    -> show one
   *  create  -> GET    -> show form to create
   *  store   -> POST   -> store data from create-form
   *  edit    -> GET    -> show form to edit
   *  update  -> PATCH  -> update data from edit-form
   *  destroy -> DELETE -> delete data
   */

  Route::get('/', [BookController::class, 'index'])->name('books.index');
  Route::get('/{book_id}', [BookController::class, 'show'])->name('books.show');
  Route::get('/{book_id}/{chapter_id}', [ChapterController::class, 'show'])->name('chapters.show');

  Route::get('/uploads', [UploadController::class, 'index'])->name('uploads.index');
  Route::get('/uploads/books', [UploadController::class, 'create'])->name('uploads.create');
  Route::post('/uploads/books', [UploadController::class, 'store'])->name('uploads.store');
  Route::get('/uploads/books/{book_id}', [UploadController::class, 'edit'])->name('uploads.edit');
  Route::patch('/uploads/books/{book_id}', [UploadController::class, 'update'])->name('uploads.update');
  Route::delete('/uploads/books/{book_id}', [UploadController::class, 'destroy'])->name('uploads.destroy');

  Route::get('/uploads/{book_id}/chapters', [ChapterController::class, 'create'])->name('chapters.create');
  Route::post('/uploads/{book_id}/chapters', [ChapterController::class, 'store'])->name('chapters.store');
  Route::get('/uploads/{book_id}/{chapter_id}', [ChapterController::class, 'edit'])->name('chapters.edit');
  Route::patch('/uploads/{book_id}/{chapter_id}', [ChapterController::class, 'update'])->name('chapters.update');
  Route::delete('/uploads/{book_id}/{chapter_id}', [ChapterController::class, 'destroy'])->name('chapters.destroy');

  // Route::get('/uploads/book', function () {
  //   return Inertia::render('Uploads/AddBook');
  // })->name('uploads.addbook');

  // Route::resource('/', BookController::class)->names([
  //   'index' => 'books.index',
  //   'create' => 'books.create',
  //   'store' => 'books.store',
  //   'show' => 'books.show',
  //   'edit' => 'books.edit',
  //   'update' => 'books.update',
  //   'destroy' => 'books.destroy',
  // ]);

  // Route::resource('/uploads', UploadController::class)->names([
  //   'index' => 'uploads.index',
  //   'create' => 'uploads.create',
  //   'store' => 'uploads.store',
  //   'show' => 'uploads.show',
  //   'edit' => 'uploads.edit',
  //   'update' => 'uploads.update',
  //   'destroy' => 'uploads.destroy',
  // ]);

  // Route::resource('/uploads/{book_id}/chapters', ChapterController::class)->names([
  //   'index' => 'chapters.index',
  //   'create' => 'chapters.create',
  //   'store' => 'chapters.store',
  //   'show' => 'chapters.show',
  //   'edit' => 'chapters.edit',
  //   'update' => 'chapters.update',
  //   'destroy' => 'chapters.destroy',
  // ]);

  Route::get('/favorites', function () {
    return Inertia::render('Favorites');
  })->name('favorites');

  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
