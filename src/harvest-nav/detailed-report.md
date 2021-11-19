---
layout: layouts/harvest-nav.njk
title: Reports
---

<header id="top-nav">
  <nav>
    <a href="/harvest-nav/reports">Time</a>
    <a href="#" class="is-active">Detailed time</a>
    <a href="#">Detailed expense</a>
    <a href="#">Contractor</a>
    <a href="#">Invoiced</a>
    <a href="#">Uninvoiced</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <h1>Detailed time report: 01/01/2021 — 12/31/2021</h1>
    <button class="button primary">Change filters</button>
  </div>

  <!--
  <div class="form-box mt-16">
    <div class="field mb-8">
      <div class="left">
        <label>Timeframe</label>
      </div>
      <div class="right">
        <input class="input" type="text" autofocus>
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
  -->

  <hr class="mt-16 mb-24">

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
        <span>Showing:</span> All hours
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <button class="button button-sm">
        <span>Group by:</span> Date
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
