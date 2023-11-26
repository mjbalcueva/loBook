<?php

it('returns a redirect response', function () {
  $response = $this->get('/');

  $response->assertStatus(302);
});
