<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
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
      'author' => $this->faker->name(),
      'description' => $this->faker->paragraph(rand(2, 10)),
      'genres' => implode(', ', $this->faker->randomElements(['fiction', 'non-fiction', 'biography', 'memoir', 'essay', 'thriller', 'horror', 'romance', 'mystery', 'self-help', 'historical fiction', 'science fiction', 'fantasy', 'cookbook', 'poetry', 'comic book', 'graphic novel', 'short story', 'young adult', 'children', 'other'], $this->faker->numberBetween(2, 10))),
      'cover' => $this->faker->imageUrl(),
      'user_id' => User::factory(),
    ];
  }
}
