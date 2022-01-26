---
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
    </div>
    <div class="flex">
      <button class="button primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        New project
      </button>
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
        Import
      </button>
      <input class="input search" type="text" placeholder="Find a project…">
    </div>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Active (50)</a>
      <a href="#">My pins (12)</a>
      <a href="#">Budgeted (42)</a>
      <a href="#">Stale (23)</a>
      <a href="#">Archived</a>
    </nav>
  </div>

  <div class="flex justify-space-between">
    <div class="flex">
    </div>
    <div class="flex">
      <button class="button button-sm clear-filters"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Clear filters</button>
      <button class="button button-sm">Filter by client <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
      <button class="button button-sm is-filtered">Managed by: <span>Matthew L.</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      <button class="button button-sm">Export <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
    </div>
  </div>

  <div class="table-wrapper mt-16">
    <table border="0" class="table" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <th class="no-width"><input type="checkbox"></th>
          <th class="no-width">•</th>
          <th class="nowrap">Client name</th>
          <th class="no-width text-right">Budget</th>
          <th class="no-width text-right">Spent</th>
          <th class="no-width"></th>
          <th class="no-width text-right">Remaining</th>
          <th class="no-width text-right">Costs</th>
          <th class="no-width"></th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td class="no-width"><input type="checkbox"></td>
          <td class="no-width">•</td>
          <td class="nowrap">
            <strong>[CODE] Project name</strong>
          </td>
          <td class="no-width text-right">$30,000.00</td>
          <td class="no-width text-right">$10,000.00</td>
          <td class="no-width"><div class="meter"></div></td>
          <td class="no-width text-right nowrap">$20,000.00 (75%)</td>
          <td class="no-width text-right">$30,000.00</td>
          <td class="no-width">
            <a href="/harvest-nav/project-analysis" class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
