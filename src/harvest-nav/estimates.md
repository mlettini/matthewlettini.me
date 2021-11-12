---
layout: layouts/harvest-nav.njk
title: Estimates
---

<main>
  <div class="flex justify-space-between">
    <div class="flex">
      <h1>Estimates</h1>
      <button class="button primary ml-8">+ New estimate</button>
    </div>
    <div class="flex">
      <button class="button">Configure</button>
      <input class="input" type="text" placeholder="Find an estimate…">
    </div>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#">Open (4)</a>
      <a href="#" class="is-active">All estimates</a>
    </nav>
  </div>

  <div class="flex justify-space-between">
    <div class="flex">
      <button class="button button-sm is-filtered"><span>Status:</span> Accepted &darr;</button>
      <button class="button button-sm">Filter by client &darr;</button>
      <button class="button button-sm">Year &darr;</button>
      <div class="button-group">
        <button class="button button-sm">&larr;</button>
        <button class="button button-sm">&rarr;</button>
      </div>
      <button class="button button-sm">Return to this year</button>
      <h3 class="ml-4">Last year: <span class="text-400">2021</span></h3>
    </div>
    <div class="flex">
      <small class="ml-8 mr-4">Page 1 of 4</small>
      <div class="button-group">
        <button class="button button-sm is-disabled">&larr;</button>
        <button class="button button-sm">&rarr;</button>
      </div>
      <button class="button button-sm">Export &darr;</button>
    </div>
  </div>
</main>
