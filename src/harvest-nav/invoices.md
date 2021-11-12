---
layout: layouts/harvest-nav.njk
title: Invoices
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Manage invoices</a>
    <a href="#">Manage recurring invoices</a>
    <a href="#">Manage retainers</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <div class="flex">
      <h1>Invoices</h1>
      <button class="button primary ml-8">+ New invoice</button>
    </div>
    <div class="flex">
      <button class="button">Configure</button>
      <input class="input" type="text" placeholder="Find an invoice…">
    </div>
  </div>

  <div class="summary mt-24">
    <div class="summary-box">
      Total open<br>
      <h1>$123.45</h1>
    </div>
    <div class="summary-box">
      Total paid amount<br>
      <h1>$123.45</h1>
    </div>
    <div class="summary-box">
      Graph
    </div>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#">Open (12)</a>
      <a href="#" class="is-active">All invoices</a>
    </nav>
  </div>

  <div class="flex justify-space-between mb-4">
    <div class="flex">
      <button class="button button-sm is-filtered"><span>Status:</span> Open &darr;</button>
      <button class="button button-sm is-filtered"><span>Client:</span> Apple Computers &darr;</button>
      <button class="button button-sm">Year &darr;</button>
      <div class="button-group">
        <button class="button button-sm">&larr;</button>
        <button class="button button-sm">&rarr;</button>
      </div>
      <!-- <button class="button ml-4">This year ↗</button> -->
      <h3 class="ml-4">This year: <span class="text-400">2021</span></h3>
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
