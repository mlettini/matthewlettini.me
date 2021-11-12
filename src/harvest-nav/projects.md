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
      <a href="#">My assigned (12)</a>
      <a href="#">Stale (23)</a>
      <a href="#">Archived (193)</a>
    </nav>
  </div>

  <div class="flex justify-space-between">
    <div class="flex">
    </div>
    <div class="flex">
      <button class="button button-sm">Filter by client &darr;</button>
      <button class="button button-sm is-filtered"><span>Managed by:</span> Matthew L. &darr;</button>
      <small class="ml-8 mr-4">Page 1 of 4</small>
      <div class="button-group">
        <button class="button button-sm is-disabled">&larr;</button>
        <button class="button button-sm">&rarr;</button>
      </div>
      <button class="button button-sm">Export &darr;</button>
    </div>
  </div>

  <table border="0" class="table mt-24" cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <th class="no-width"><input type="checkbox"></th>
        <th class="no-width">•</th>
        <th>Client name</th>
        <th class="no-width text-right">Budget</th>
        <th class="no-width text-right">Spent</th>
        <th class="no-width"></th>
        <th class="no-width text-right">Remaining</th>
        <th class="no-width text-right">Costs</th>
        <th class="no-width">Managers</th>
        <th class="no-width"></th>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td class="no-width"><input type="checkbox"></td>
        <td class="no-width">•</td>
        <td>
          [CODE] Project name
        </td>
        <td class="no-width text-right">$30,000.00</td>
        <td class="no-width text-right">$10,000.00</td>
        <td class="no-width"><div class="meter"></div></td>
        <td class="no-width text-right nowrap">$20,000.00 (75%)</td>
        <td class="no-width text-right">$30,000.00</td>
        <td class="no-width">
          <img src="/images/matthew-lettini-header.jpg" width="30" height="30" class="avatar">
        </td>
        <td class="no-width"><a href="/harvest-nav/project-analysis" class="button button-sm">•••</a></td>
      </tr>
    </tbody>
  </table>
</main>
