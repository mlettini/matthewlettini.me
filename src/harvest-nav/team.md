---
title: Team
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
      <h1>Team</h1>
    </div>
    <div class="flex">
      <button class="button primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        Invite teammate
      </button>
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
        Import
      </button>
      <input class="input search" type="text" placeholder="Find a teammate…">
    </div>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Active (6)</a>
      <a href="#">My pins (0)</a>
      <a href="#">Employees (3)</a>
      <a href="#">Contractors (3)</a>
      <a href="#">Archived</a>
    </nav>
  </div>

  <div class="flex justify-space-between">
    <div class="flex">
      <button class="button button-sm">
        Week
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="button-group">
        <button class="button button-sm button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <button class="button button-sm button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
      <button class="button button-sm">Return to this week</button>
      <h3 class="ml-4">Last week: <span class="text-400">1 – 7 Mar 2021</span></h3>
    </div>
    <div class="flex">
      <button class="button button-sm">
        Filter by role
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <button class="button button-sm">
        Filter by manager
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <button class="button button-sm">
        Export
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
    </div>
  </div>

  <div class="summary mt-16 mb-16">
    <div class="summary-box">
      Total hours<br>
      <h2>123.45</h2>
      <div class="flex justify-space-between mt-8">
        Billable <strong>3.00</strong>
      </div>
      <div class="flex justify-space-between">
        Non-billable <strong>0.00</strong>
      </div>
    </div>
    <div class="summary-box">
      Capacity<br>
      <h2>123.45</h2>
      <div class="pt-8">
        <div class="meter" style="width:100%"></div>
      </div>
      <div class="flex justify-space-between">
        Default capacity <strong>35.00</strong>
      </div>
    </div>
  </div>

  <div class="table-wrapper">
    <table border="0" class="table" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <th class="no-width"><input type="checkbox"></th>
          <th class="no-width">•</th>
          <th class="is-sorted nowrap">
            Employees (3)
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
          </th>
          <th class="no-width text-right nowrap">Total hours</th>
          <th class="no-width text-right nowrap">Billable hours</th>
          <th class="no-width"></th>
          <th class="no-width text-right">Capacity</th>
          <th class="no-width">Permission</th>
          <th class="no-width"></th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td class="no-width"><input type="checkbox"></td>
          <td class="no-width">•</td>
          <td>
            <div class="flex nowrap">
              <img src="/images/matthew-lettini-avatar.jpg" width="30" height="30" class="avatar mr-4">
              <strong>Person Name</strong>
            </div>
          </td>
          <td class="no-width text-right">12.34</td>
          <td class="no-width text-right">2.34</td>
          <td class="no-width"><div class="meter"></div></td>
          <td class="no-width text-right">35.00</td>
          <td class="no-width">Administrator</td>
          <td class="no-width">
            <a href="/harvest-nav/team-analysis" class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
        <tr>
          <td class="no-width"><input type="checkbox"></td>
          <td class="no-width">•</td>
          <td>
            <div class="flex nowrap">
              <img src="/images/matthew-lettini-avatar.jpg" width="30" height="30" class="avatar mr-4">
              <strong>Person Name</strong>
            </div>
          </td>
          <td class="no-width text-right">12.34</td>
          <td class="no-width text-right">2.34</td>
          <td class="no-width"><div class="meter"></div></td>
          <td class="no-width text-right">35.00</td>
          <td class="no-width">Administrator</td>
          <td class="no-width">
            <a href="/harvest-nav/team-analysis" class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
        <tr>
          <td class="no-width"><input type="checkbox"></td>
          <td class="no-width">•</td>
          <td>
            <div class="flex nowrap">
              <img src="/images/matthew-lettini-avatar.jpg" width="30" height="30" class="avatar mr-4">
              <strong>Person Name</strong>
            </div>
          </td>
          <td class="no-width text-right">12.34</td>
          <td class="no-width text-right">2.34</td>
          <td class="no-width"><div class="meter"></div></td>
          <td class="no-width text-right">35.00</td>
          <td class="no-width">Administrator</td>
          <td class="no-width">
            <a href="/harvest-nav/team-analysis" class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th class="no-width"><input type="checkbox"></th>
          <th class="no-width">•</th>
          <th class="is-sorted nowrap">
            Contractors (3)
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
          </th>
          <th class="no-width text-right nowrap">Total hours</th>
          <th class="no-width text-right nowrap">Billable hours</th>
          <th class="no-width"></th>
          <th class="no-width text-right">Capacity</th>
          <th class="no-width">Permission</th>
          <th class="no-width"></th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td class="no-width"><input type="checkbox"></td>
          <td class="no-width">•</td>
          <td>
            <div class="flex nowrap">
              <img src="/images/matthew-lettini-avatar.jpg" width="30" height="30" class="avatar mr-4">
              <strong>Person Name</strong>
            </div>
          </td>
          <td class="no-width text-right">12.34</td>
          <td class="no-width text-right">2.34</td>
          <td class="no-width"><div class="meter"></div></td>
          <td class="no-width text-right">35.00</td>
          <td class="no-width">Administrator</td>
          <td class="no-width">
            <a href="/harvest-nav/team-analysis" class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
        <tr>
          <td class="no-width"><input type="checkbox"></td>
          <td class="no-width">•</td>
          <td>
            <div class="flex nowrap">
              <img src="/images/matthew-lettini-avatar.jpg" width="30" height="30" class="avatar mr-4">
              <strong>Person Name</strong>
            </div>
          </td>
          <td class="no-width text-right">12.34</td>
          <td class="no-width text-right">2.34</td>
          <td class="no-width"><div class="meter"></div></td>
          <td class="no-width text-right">35.00</td>
          <td class="no-width">Administrator</td>
          <td class="no-width">
            <a href="/harvest-nav/team-analysis" class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
        <tr>
          <td class="no-width"><input type="checkbox"></td>
          <td class="no-width">•</td>
          <td>
            <div class="flex nowrap">
              <img src="/images/matthew-lettini-avatar.jpg" width="30" height="30" class="avatar mr-4">
              <strong>Person Name</strong>
            </div>
          </td>
          <td class="no-width text-right">12.34</td>
          <td class="no-width text-right">2.34</td>
          <td class="no-width"><div class="meter"></div></td>
          <td class="no-width text-right">35.00</td>
          <td class="no-width">Administrator</td>
          <td class="no-width">
            <a href="/harvest-nav/team-analysis" class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
