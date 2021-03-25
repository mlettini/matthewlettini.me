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
      <button class="button primary mr-4">✚ Invite teammate</button>
      <button class="button mr-4">Import</button>
      <button class="button mr-4">Export</button>
      <button class="button mr-4">Archived people</button>
    </div>
    <div class="flex">
      <input class="input" type="text" placeholder="Find a person…">
    </div>
  </div>

  <hr class="mt-16 mb-24">

  <div class="flex justify-space-between">
    <div class="flex">
      <button class="button mr-4">Timeframe &darr;</button>
      <div class="button-group">
        <button class="button">&larr;</button>
        <button class="button">&rarr;</button>
      </div>
      <button class="button ml-4">This week ↗</button>
      <h2 class="ml-8">Last week: <span class="text-400">1 – 7 Mar 2021</span></h2>
    </div>
    <div class="flex">
      <button class="button ml-4"><span>Filter:</span> NYC role &darr;</button>
      <button class="button ml-4">Columns &darr;</button>
    </div>
  </div>

  <table class="table" style="margin-top:40px">
    <thead>
      <tr>
        <th class="no-width"><input type="checkbox"></th>
        <th class="no-width">•</th>
        <th class="is-sorted">Teammates (3)</th>
        <th class="text-right">Total hours</th>
        <th class="text-right">Billable hours</th>
        <th class="text-right">Capacity</th>
        <th class="no-width">Permission</th>
        <th class="no-width">Type</th>
        <th class="no-width"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="no-width"><input type="checkbox"></td>
        <td class="no-width">•</td>
        <td>
          <img src="/images/matthew-lettini-header.jpg" width="28" height="28" class="avatar mr-4">
          <strong>Person Name</strong>
        </td>
        <td class="text-right">12.34</td>
        <td class="text-right">2.34</td>
        <td class="text-right">35.00</td>
        <td class="no-width">Administrator</td>
        <td class="no-width">Employee</td>
        <td class="no-width"><button class="button button-sm">•••</button></td>
      </tr>
      <tr>
        <td class="no-width"><input type="checkbox"></td>
        <td class="no-width">•</td>
        <td>
          <img src="/images/matthew-lettini-header.jpg" width="28" height="28" class="avatar mr-4">
          <strong>Person Name</strong>
        </td>
        <td class="text-right">12.34</td>
        <td class="text-right">2.34</td>
        <td class="text-right">35.00</td>
        <td class="no-width">Manager</td>
        <td class="no-width">Employee</td>
        <td class="no-width"><button class="button button-sm">•••</button></td>
      </tr>
      <tr>
        <td class="no-width"><input type="checkbox"></td>
        <td class="no-width">•</td>
        <td>
          <img src="/images/matthew-lettini-header.jpg" width="28" height="28" class="avatar mr-4">
          <strong>Person Name</strong>
        </td>
        <td class="text-right">12.34</td>
        <td class="text-right">2.34</td>
        <td class="text-right">35.00</td>
        <td class="no-width">Member</td>
        <td class="no-width">Contractor</td>
        <td class="no-width"><button class="button button-sm">•••</button></td>
      </tr>
    </tbody>
  </table>
</main>
