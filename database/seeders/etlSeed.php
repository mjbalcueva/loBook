<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;
use App\Models\etlnew;

class etlSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csvFile = fopen(public_path("data/newBooks.csv"), "r");

        $firstLine = true;
        while(($data = fgetcsv($csvFile, 2000, ",")) !== FALSE)
        {
            if(!$firstLine)
            {
                Book::create([
                    'user_id' => $data['0'],
                    'title' => $data['1'],
                    'author' => $data['2'],
                    'cover' => $data['3'],
                    'description' => $data['4'],
                    'genres' => $data['5']

                ]);
            }
            $firstLine = false;
        }
        fclose($csvFile);
    }
}
