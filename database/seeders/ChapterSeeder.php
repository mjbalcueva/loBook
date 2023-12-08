<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Chapter;

class ChapterSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $csvFile = fopen(resource_path("/data/chapters.csv"), "r");

    $firstline = true;
    while (($data = fgetcsv($csvFile, 2000, ",")) !== FALSE) {
      if (!$firstline) {
        Chapter::create([
          'book_id' => $data[0],
          'title' => $data[1],
          'content' => $data[2],
        ]);
      }
      $firstline = false;
    }

    fclose($csvFile);
  }
}
