---
layout: layouts/harvest-nav.njk
title: Reports Nav
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Time</a>
    <a href="#">Detailed time</a>
    <a href="#">Detailed expenses</a>
    <a href="#">Contractors</a>
    <a href="#">Invoiced</a>
    <a href="#">Uninvoiced</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <div class="flex">
      <div class="button-group">
        <button class="button">&larr;</button>
        <button class="button">&rarr;</button>
      </div>
      <button class="button ml-4">This month ↗</button>
      <h2 class="ml-8">Last month: <span class="text-400">Mar 2021</span></h2>
    </div>
    <div class="flex">
      <button class="button ml-4">Detailed report</button>
      <button class="button ml-4">Export &darr;</button>
      <button class="button ml-4"><span>View by:</span> Month &darr;</button>
    </div>
  </div>

  <hr class="mt-16 mb-24">
</main>
