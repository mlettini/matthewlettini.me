---
layout: layouts/harvest-nav.njk
title: Estimates Nav
---

<main>
  <div class="flex justify-space-between">
    <button class="button primary">✚ New estimate</button>
    <div class="flex">
      <button class="button mr-4">Configure</button>
      <input class="input" type="text" placeholder="Find an estimate…">
    </div>
  </div>

  <hr class="mt-16 mb-24">

  <div class="flex justify-space-between">
    <div class="flex">
      <div class="button-group">
        <button class="button">&larr;</button>
        <button class="button">&rarr;</button>
      </div>
      <!-- <button class="button ml-4">This year ↗</button> -->
      <h2 class="ml-8">This year: <span class="text-400">2021</span></h2>
    </div>
    <div class="flex">
      <a href="#" class="mr-8">Clear filters</a>
      <button class="button ml-4"><span>Status:</span> Accepted &darr;</button>
      <button class="button ml-4"><span>Client:</span> Apple Computers &darr;</button>
      <button class="button ml-4"><span>View by:</span>Year &darr;</button>
    </div>
  </div>
</main>
