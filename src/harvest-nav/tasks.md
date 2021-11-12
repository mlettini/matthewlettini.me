---
layout: layouts/harvest-nav.njk
title: Tasks
---

<header id="top-nav">
  <nav>
    <a href="/harvest-nav/projects">Manage projects</a>
    <a href="#" class="is-active">Manage tasks</a>
  </nav>
</header>

<main class="narrow">
  <div class="flex justify-space-between">
    <div class="flex">
      <h1>Tasks</h1>
      <button class="button primary ml-8">+ New task</button>
    </div>
    <div class="flex">
      <button class="button">Archived tasks</button>
      <input class="input" type="text" placeholder="Find a task…">
    </div>
  </div>

  <hr class="mt-16 mb-16">

  <div class="flex justify-space-between">
    <div class="flex">
    </div>
    <div class="flex">
      <small class="mr-4">Page 1 of 4</small>
      <div class="button-group">
        <button class="button button-sm is-disabled">&larr;</button>
        <button class="button button-sm">&rarr;</button>
      </div>
      <button class="button button-sm">Export &darr;</button>
    </div>
  </div>
</main>
