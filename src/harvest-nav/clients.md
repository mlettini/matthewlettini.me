---
layout: layouts/harvest-nav.njk
title: Clients
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Manage clients</a>
    <a href="#">Manage contacts</a>
  </nav>
</header>

<main class="narrow">
  <div class="flex justify-space-between">
    <div class="flex">
      <h1>Clients</h1>
      <button class="button primary ml-8">+ New client</button>
    </div>
    <div class="flex">
      <button class="button">Import</button>
      <button class="button">Archived clients</button>
      <input class="input" type="text" placeholder="Find a client…">
    </div>
  </div>

  <hr class="mt-16 mb-16">

  <div class="flex justify-space-between">
    <div class="flex">
      <button class="button button-sm">+ New contact</button>
    </div>
    <div class="flex">
      <button class="button button-sm">Filter by currency &darr;</button>
      <small class="ml-8 mr-4">Page 1 of 4</small>
      <div class="button-group">
        <button class="button button-sm is-disabled">&larr;</button>
        <button class="button button-sm">&rarr;</button>
      </div>
      <button class="button button-sm">Export &darr;</button>
    </div>
  </div>
</main>
