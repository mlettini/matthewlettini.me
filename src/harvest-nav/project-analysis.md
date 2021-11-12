---
layout: layouts/harvest-nav.njk
title: Team Analysis
---

<header id="top-nav">
  <nav>
    <a href="/harvest-nav/projects" class="is-active">Manage projects</a>
    <a href="/harvest-nav/tasks">Manage tasks</a>
  </nav>
</header>

<main>
  <div class="flex mb-16">
    <a href="/harvest-nav/projects" class="is-active mr-4">Projects report</a> &rarr;
  </div>

  <div class="flex justify-space-between">
    <div>
      Client Name
      <h1>[CODE] Project Name</h1>
    </div>
    <div class="flex">
      <button class="button">Edit project</button>
      <button class="button">•••</button>
    </div>
  </div>

  <div class="summary mt-24">
    <div class="summary-box">
      Total hours<br>
      <h1>123.45</h1>
    </div>
    <div class="summary-box">
      Budget<br>
      <h1>123.45</h1>
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

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Tasks</a>
      <a href="#">Team</a>
      <a href="#">Invoices</a>
    </nav>
  </div>
</main>
