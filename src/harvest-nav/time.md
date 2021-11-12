---
layout: layouts/harvest-nav.njk
title: Time
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Track time</a>
    <a href="#">Approve time</a>
  </nav>
</header>

<main class="narrow">
  <h1 class="mb-16">Timesheet: <span class="text-400">Thursday, 25 Mar 2021</span></h1>

  <div class="flex justify-space-between">
    <div class="flex">
      <div class="button-group">
        <button class="button">&larr;</button>
        <button class="button">🗓</button>
        <button class="button">&rarr;</button>
      </div>
      <button class="button">Return to today</button>
    </div>
    <div class="flex">
      <div class="button-group">
        <button class="button is-filtered">Daily</button>
        <button class="button">Weekly</button>
      </div>
      <button class="button">Teammates &darr;</button>
    </div>
  </div>

  <div class="tabs time-tabs mt-16 mb-16">
    <nav>
      <a href="#" class="is-active">Mon 🎉<br>3:54</a>
      <a href="#">Tue<br>0:00</a>
      <a href="#">Wed<br>0:00</a>
      <a href="#">Thu<br>0:00</a>
      <a href="#">Fri<br>0:00</a>
      <a href="#">Sat<br>0:00</a>
      <a href="#">Sun<br>0:00</a>
      <a href="#">Sat<br>0:00</a>
      <div>Week total<br>3:54</div>
    </nav>
  </div>

  <button class="button primary">+ New time entry</button>
</main>
