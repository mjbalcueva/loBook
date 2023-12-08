<?php

use App\Http\Controllers\BrowseController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\ImportController;
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

/**
 *  "/"
 *  "/{book_id}"
 *  "/{book_id}/{chapter_id}"
 *
 *  "/uploads"
 *  "/uploads/{book_id}"
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

Route::middleware('auth', 'verified')->group(function () {
  Route::get('/', [BrowseController::class, 'index'])->name('browse.index');
  Route::get('/browse/{book}', [BrowseController::class, 'show'])->name('browse.show');
  Route::get('/browse/{book}/{chapter}', [ChapterController::class, 'show'])->name('chapters.show');

  Route::get('/uploads', [UploadController::class, 'index'])->name('uploads.index');
  Route::get('/uploads/book', [UploadController::class, 'create'])->name('uploads.create');
  Route::post('/uploads/book', [UploadController::class, 'store'])->name('uploads.store');
  Route::get('/uploads/{book}', [UploadController::class, 'edit'])->name('uploads.edit');
  Route::patch('/uploads/{book}', [UploadController::class, 'update'])->name('uploads.update');
  Route::delete('/uploads/{book}', [UploadController::class, 'destroy'])->name('uploads.destroy');

  Route::get('/uploads/{book}/chapters', [ChapterController::class, 'create'])->name('chapters.create');
  Route::post('/uploads/{book}/chapters', [ChapterController::class, 'store'])->name('chapters.store');
  Route::get('/uploads/{book}/{chapter}', [ChapterController::class, 'edit'])->name('chapters.edit');
  Route::patch('/uploads/{book}/{chapter}', [ChapterController::class, 'update'])->name('chapters.update');
  Route::delete('/uploads/{book}/{chapter}', [ChapterController::class, 'destroy'])->name('chapters.destroy');

  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

  Route::get('/import', [ImportController::class, 'create'])->name('import.create');
  Route::post('/import', [ImportController::class, 'store'])->name('import.store');

  route::controller(ImportController::class)->group(function () {
    Route::get('books-export', 'export')->name('books.export');
    Route::post('books-import', 'import')->name('books.import');
  });
});

require __DIR__ . '/auth.php';
