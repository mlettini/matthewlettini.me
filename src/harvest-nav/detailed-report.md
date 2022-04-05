---
title: Reports
---

<header id="top-nav">
  <nav>
    <a href="/harvest-nav/reports">Summary</a>
    <a href="/harvest-nav/detailed-report" class="is-active">Detailed time</a>
    <a href="#">Detailed expense</a>
    <a href="/harvest-nav/my-report">My time</a>
    <a href="/harvest-nav/projects">Project budget <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
    <a href="/harvest-nav/team">Team utilization <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
    <a href="#">Contractor</a>
    <a href="#">Invoiced</a>
    <a href="#">Uninvoiced</a>
    <a href="#">Payments</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <div>
      <h1>Detailed time report</h1>
    </div>
    <div class="flex">
      <h4 class="mr-8">01/01/2021 – 12/31/2021</h4>
      <button class="button primary is-disabled">Update report</button>
    </div>
  </div>

  <div class="form-box mt-16 mb-24">
    <div class="form-box-inner">
      <div class="field mb-24">
        <div class="left">
          <label>Timeframe</label>
        </div>
        <div class="right">
          <select class="input" autofocus><option>This week</option></select>
        </div>
      </div>
      <div class="field mb-8">
        <div class="left">
          <label>Clients</label>
        </div>
        <div class="right">
          <input class="input" type="text">
        </div>
      </div>
      <div class="field mb-8">
        <div class="left">
          <label>Projects</label>
        </div>
        <div class="right">
          <input class="input" type="text">
        </div>
      </div>
      <div class="field mb-8">
        <div class="left">
          <label>Tasks</label>
        </div>
        <div class="right">
          <input class="input" type="text">
        </div>
      </div>
      <div class="field mb-16">
        <div class="left">
          <label>People</label>
        </div>
        <div class="right">
          <input class="input" type="text">
        </div>
      </div>
      <div class="submit">
        <button class="button primary">Update report</button>
        <button class="button cancel">Cancel</button>
      </div>
    </div>
  </div>

  <hr class="mt-16 mb-24">

  <div class="summary mt-24 mb-24">
    <div class="summary-no-box">
      Total hours<br>
      <h2>123.45</h2>
    </div>
    <div class="summary-no-box">
      Uninvoiced billable hours<br>
      <h2>23.45</h2>
    </div>
    <div class="summary-no-box">
      Filters<br>
      <h4>All clients, projects, tasks, and people</h4>
    </div>
  </div>

  <div class="flex justify-space-between">
    <div class="flex">
      <button class="button button-sm"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="20" cy="12" r="1"></circle><circle cx="4" cy="12" r="1"></circle></svg> Actions</button>
    </div>
    <div class="flex">
      <button class="button button-sm"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> Customize columns</button>
      <button class="button button-sm">Group by: <span>Date</span> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 10 14 16 20 10"></polyline></svg></button>
      <button class="button button-sm"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="18" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="9" y1="18" x2="15" y2="18"></line></svg> Active projects only</button>
      <button class="button button-sm is-filtered"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="18" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="9" y1="18" x2="15" y2="18"></line></svg> Hours: <span>Billable</span></button>
      <button class="button button-sm">Export <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 10 14 16 20 10"></polyline></svg></button>
      <button class="button button-sm"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Save</button>
    </div>
  </div>

  <div class="table-wrapper mt-16">
    <table border="0" class="table" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <th class="no-width"><input type="checkbox"></th>
          <th>Client</th>
          <th>Project</th>
          <th>Task</th>
          <th>Person</th>
          <th class="no-width text-right">Hours</th>
          <th class="no-width"></th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th class="no-width"></th>
          <th colspan="4">01/01/21</th>
          <th class="no-width text-right">12.34</th>
          <th class="no-width"></th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td class="no-width"><input type="checkbox"></td>
          <td>Client name</td>
          <td>Project name</td>
          <td>Task name</td>
          <td>Person name</td>
          <td class="no-width text-right">12.34</td>
          <td class="no-width">
            <a href="#" class="button button-sm button-empty button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="20" cy="12" r="1"></circle><circle cx="4" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
