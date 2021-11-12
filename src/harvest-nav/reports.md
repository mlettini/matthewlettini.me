---
layout: layouts/harvest-nav.njk
title: Reports
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
  <div class="flex justify-space-between">
    <h1>Time report</h1>
    <a href="/harvest-nav/my-report" class="button">My time report</a>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Clients</a>
      <a href="#">Projects</a>
      <a href="#">Tasks</a>
      <a href="#">People</a>
    </nav>
  </div>

  <div class="flex justify-space-between mt-16">
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

  <div class="summary mt-24">
    <div class="summary-box">
      Total hours<br>
      <h1>123.45</h1>
    </div>
    <div class="summary-box">
      Billable<br>
      Non-billable
    </div>
    <div class="summary-box">
      Billable amount<br>
      <h1>$123.45</h1>
    </div>
    <div class="summary-box">
      Uninvoiced amount<br>
      <h1>$123.45</h1>
    </div>
  </div>
</main>
