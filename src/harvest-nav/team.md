---
layout: layouts/harvest-nav.njk
title: Team Nav
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Manage people</a>
    <a href="#">Manage roles</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <div class="flex">
      <button class="button primary mr-4">Invite teammate</button>
      <button class="button mr-4">Import</button>
      <button class="button mr-4">Export</button>
    </div>
    <input class="input" type="text" placeholder="Find a person…">
  </div>

  <hr class="mb-24 mt-16">

  <div class="flex justify-space-between">
    <div class="flex">
      <div class="button-group">
        <button class="button">&larr;</button>
        <button class="button">&rarr;</button>
      </div>
      <button class="button ml-4">This week</button>
      <h2 class="ml-8">Week: <span class="text-400">1 – 7 Mar 2021</span></h2>
    </div>
    <div class="flex">
      <button class="button ml-4"><span>Filter:</span> Everyone</button>
      <button class="button ml-4">Timeframe</button>
    </div>
  </div>

  <table class="table" style="margin-top:40px">
    <thead>
      <tr>
        <th class="no-width">O</th>
        <th class="is-sorted">Employees</th>
        <th class="text-right">Total hours</th>
        <th class="text-right">Billable hours</th>
        <th class="text-right">Capacity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="no-width">O</td>
        <td><strong>Person Name</strong></td>
        <td class="text-right">12.34</td>
        <td class="text-right">2.34</td>
        <td class="text-right">35.00</td>
        <td class="no-width">•••</td>
      </tr>
      <tr>
        <td class="no-width">O</td>
        <td><strong>Person Name</strong></td>
        <td class="text-right">12.34</td>
        <td class="text-right">2.34</td>
        <td class="text-right">35.00</td>
        <td class="no-width">•••</td>
      </tr>
      <tr>
        <td class="no-width">O</td>
        <td><strong>Person Name</strong></td>
        <td class="text-right">12.34</td>
        <td class="text-right">2.34</td>
        <td class="text-right">35.00</td>
        <td class="no-width">•••</td>
      </tr>
    </tbody>
  </table>
</main>
