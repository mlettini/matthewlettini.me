---
layout: layouts/harvest-nav.njk
title: Projects
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Manage projects</a>
    <a href="/harvest-nav/tasks">Manage tasks</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <div class="flex">
      <h1>Projects</h1>
      <button class="button primary ml-8">+ New project</button>
    </div>
    <div class="flex">
      <button class="button">Import</button>
      <button class="button">Archived projects</button>
      <input class="input" type="text" placeholder="Find a project…">
    </div>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Active (50)</a>
      <a href="#">Budgeted (42)</a>
      <a href="#">Stale (23)</a>
      <a href="#">Archived (193)</a>
    </nav>
  </div>

  <div class="flex justify-space-between">
    <div class="flex">
      &nbsp;
    </div>
    <div class="flex">
      <small class="mr-4">Page 1 of 4</small>
      <div class="button-group">
        <button class="button button-sm is-disabled">&larr;</button>
        <button class="button button-sm">&rarr;</button>
      </div>
      <button class="button button-sm is-filtered"><span>Client:</span>Apple Computers &darr;</button>
      <button class="button button-sm is-filtered"><span>Managed by:</span> Daniel M. &darr;</button>
      <button class="button button-sm">Export &darr;</button>
    </div>
  </div>
</main>
