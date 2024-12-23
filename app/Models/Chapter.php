<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Chapter extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'book_id',
    'title',
    'content',
  ];

  // relationship to book
  public function book(): BelongsTo
  {
    return $this->belongsTo(Book::class, 'book_id');
  }
}
