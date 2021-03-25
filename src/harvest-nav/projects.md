---
layout: layouts/harvest-nav.njk
title: Projects Nav
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Manage projects</a>
    <a href="#">Manage tasks</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <div class="flex">
      <button class="button primary mr-4">✚ New project</button>
      <button class="button mr-4">Import</button>
      <button class="button mr-4">Export</button>
      <button class="button mr-4">Archived projects</button>
    </div>
    <div class="flex">
      <input class="input" type="text" placeholder="Find a projects…">
    </div>
  </div>

  <hr class="mt-16 mb-24">

  <div class="flex justify-space-between">
    <div class="flex">
      <div class="button-group">
        <button class="button"><span>View:</span> Active projects (50) &darr;</button>
      </div>
    </div>
    <div class="flex">
      <button class="button ml-4"><span>Client:</span>Apple Computers &darr;</button>
      <button class="button ml-4"><span>Managed by:</span> Daniel M. &darr;</button>
    </div>
  </div>
</main>
