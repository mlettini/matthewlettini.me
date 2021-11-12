---
layout: layouts/harvest-nav.njk
title: My Time Report
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Time</a>
    <a href="#">Detailed time</a>
    <a href="#">Detailed expense</a>
    <a href="#">Contractor</a>
    <a href="#">Invoiced</a>
    <a href="#">Uninvoiced</a>
  </nav>
</header>

<main>
  <div class="flex mb-8">
    <a href="/harvest-nav/reports" class="mr-4">Time report</a> &rarr;
  </div>

  <div class="flex justify-space-between">
    <h1>Matthew Lettini</h1>
    <!-- <button class="button">My time report</button> -->
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Projects</a>
      <a href="#">Tasks</a>
    </nav>
  </div>

  <div class="flex justify-space-between">
    <div class="flex">
      <button class="button button-sm">Month &darr;</button>
      <div class="button-group">
        <button class="button button-sm">&larr;</button>
        <button class="button button-sm">&rarr;</button>
      </div>
      <button class="button button-sm">Return to this month</button>
      <h3 class="ml-4">Last month: <span class="text-400">Mar 2021</span></h3>
    </div>
    <div class="flex">
      <button class="button button-sm">Detailed report</button>
      <button class="button button-sm">Export &darr;</button>
    </div>
  </div>

  <div class="mt-24">
    Total hours<br>
    <h1>123.45</h1>
  </div>
</main>
