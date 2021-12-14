---
layout: layouts/harvest-nav.njk
title: Reports
---

<header id="top-nav">
  <nav>
    <a href="/harvest-nav/reports">Time</a>
    <a href="/harvest-nav/detailed-report" class="is-active">Detailed time</a>
    <a href="#">Detailed expense</a>
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
      <button class="button primary is-disabled">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
        Change filters
      </button>
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
        <button class="button primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Update report</button>
        <button class="button cancel">Cancel</button>
      </div>
    </div>
  </div>

  <!-- <hr class="mt-16 mb-24"> -->

  <div class="summary">
    <div class="summary-box">
      Total hours<br>
      <h2>123.45</h2>
    </div>
    <div class="summary-box">
      Uninvoiced billable hours<br>
      <h2>23.45</h2>
    </div>
    <div class="summary-box">
      Filters<br>
      <h5>All clients</h5>
      <h5>All projects</h5>
    </div>
    <div class="summary-box">
      <br>
      <h5>All tasks</h5>
      <h5>All people</h5>
    </div>
  </div>

  <div class="flex justify-space-between mt-16">
    <div class="flex">
      <button class="button button-sm">
        Showing: <span>All hours</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <button class="button button-sm">
        Group by: <span>Date</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
    </div>
    <div class="flex">
      <button class="button button-sm">Bulk actions <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
      <button class="button button-sm">Export <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
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
            <button class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
