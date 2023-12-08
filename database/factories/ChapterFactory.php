<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chapter>
 */
class ChapterFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'title' => $this->faker->sentence(),
      'content' => $this->generateContent(rand(3, 7)),
      'book_id' => Book::factory(),
    ];
  }

  private function generateContent(int $count): string
  {
    $contentArray = [];

    for ($i = 0; $i < $count; $i++) {
      $contentArray[] = [
        "id" => $this->faker->uuid,
        "type" => "paragraph",
        "props" => [
          "textColor" => "default",
          "backgroundColor" => "default",
          "textAlignment" => "left"
        ],
        "content" => [
          [
            "type" => "text",
            "text" => $this->faker->paragraph(20),
            "styles" => new \stdClass() // empty object
          ]
        ],
        "children" => []
      ];
    }

    return json_encode($contentArray);
  }
}
