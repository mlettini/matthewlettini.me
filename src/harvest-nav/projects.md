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
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        New project
      </button>
      <input class="input search" type="text" placeholder="Find a project…">
    </div>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Active (50)</a>
      <a href="#">Pinned (12)</a>
      <a href="#">Budgeted (42)</a>
      <a href="#">Stale (23)</a>
      <a href="#">Archived</a>
    </nav>
  </div>

  <div class="flex justify-space-between">
    <div class="flex">
      <button class="button button-sm is-disabled"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="20" cy="12" r="1"></circle><circle cx="4" cy="12" r="1"></circle></svg> Actions</button>
    </div>
    <div class="flex">
      <button class="button button-sm">Group by: <span>Client</span> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 10 14 16 20 10"></polyline></svg></button>
      <button class="button button-sm"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="18" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="9" y1="18" x2="15" y2="18"></line></svg> Filter by client</button>
      <button class="button button-sm is-filtered"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="18" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="9" y1="18" x2="15" y2="18"></line></svg> Managed by: <span>Matthew L.</span></button>
      <button class="button button-sm">Export <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 10 14 16 20 10"></polyline></svg></button>
      <button class="button button-sm"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Save</button>
    </div>
  </div>

  <div class="table-wrapper mt-16">
    <table border="0" class="table" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <th class="no-width"><input type="checkbox"></th>
          <th class="no-width"></th>
          <th class="nowrap">Client name</th>
          <th class="no-width text-right">Progress</th>
          <th class="no-width"></th>
          <th class="no-width text-right">Budget</th>
          <th class="no-width text-right">Spent</th>
          <th class="no-width text-right">Remaining</th>
          <th class="no-width"></th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td class="no-width"><input type="checkbox"></td>
          <td class="no-width"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-width="2" style="vertical-align:middle;"><path d="M7 6.1V5c0-1.1.8-2 2-2h6a2 2 0 0 1 2 2v1.1c0 .5-.3.9-.8.9h-.3c-.3 0-.6.3-.6.7 0 .2 0 .4.2.5 1 .8 2.6 2.5 3.2 4.8.3 1-.6 2-1.7 2H7c-1.1 0-2-1-1.7-2 .6-2.3 2.1-4 3.2-4.8l.2-.5c0-.4-.3-.7-.6-.7h-.3a.9.9 0 0 1-.9-.9ZM12 15v6"></path></svg></td>
          <td class="nowrap">
            <strong>[CODE] Project name</strong>
          </td>
          <td class="no-width text-right">65%</td>
          <td class="no-width"><div class="meter"></div></td>
          <td class="no-width text-right">$30,000.00</td>
          <td class="no-width text-right">$10,000.00</td>
          <td class="no-width text-right nowrap">$20,000.00</td>
          <td class="no-width">
            <a href="/harvest-nav/project-analysis" class="button button-sm button-empty button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="20" cy="12" r="1"></circle><circle cx="4" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
