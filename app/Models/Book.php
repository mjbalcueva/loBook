<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
  use HasFactory;
  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'title',
    'author',
    'cover',
    'description',
    'genres',
    'user_id'
  ];

  // relationship to user
  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class, 'user_id');
  }
  // relationship to chapters
  public function chapters(): HasMany
  {
    return $this->hasMany(Chapter::class, 'book_id');
  }
  
  
  

}
