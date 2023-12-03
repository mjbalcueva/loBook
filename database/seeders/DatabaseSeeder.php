<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Book;
use App\Models\Chapter;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    User::factory(rand(5, 10))->has(
      Book::factory(rand(0, 5))->has(
        Chapter::factory(rand(0, 10))
      )
    )->create();
  }
}
