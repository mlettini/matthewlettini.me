---
layout: layouts/harvest-nav.njk
title: Time
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Track daily</a>
    <a href="#">Track weekly</a>
    <a href="#">Approve timesheets</a>
    <a href="#">Manage reminders</a>
  </nav>
</header>

<main class="medium">
  <!-- <h1 class="mb-16">Timesheet: <span class="text-400">Thursday, 25 Mar 2021</span></h1> -->

  <div class="flex justify-space-between">
    <div class="flex">
      <div class="button-group">
        <button class="button button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <button class="button button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </button>
        <button class="button button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
      <button class="button">Return to today</button>
      <h1 class="ml-8">Thursday, 25 Mar 2021</h1>
    </div>
    <div class="flex">
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        Teammates
      </button>
    </div>
  </div>

  <div class="tabs time-tabs mt-16">
    <nav>
      <a href="#">Mon 🎉<br>3:54</a>
      <a href="#">Tue 🎉<br>1:00</a>
      <a href="#">Wed 🎉<br>1:00</a>
      <a href="#" class="is-active">Thu 🎉<br>1:00</a>
      <a href="#">Fri<br>0:00</a>
      <a href="#">Sat<br>0:00</a>
      <a href="#">Sun<br>0:00</a>
      <a href="#">Sat<br>0:00</a>
      <div><span class="nowrap">Week total</span><br>6:54</div>
    </nav>
  </div>

  <div class="table-wrapper">
    <table border="0" class="table time-table" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <td style="width:40%">
            <strong>Task name</strong>
            <br>
            <small>1:20pm - 4:20pm / This is a ton of notes that should really break to a new line and push everything over. This is a ton of notes that should really break to a new line and push everything over.</small>
          </td>
          <td>
            <strong>[CODE] Project name</strong>
            <br>
            <small>Client name</small>
          </td>
          <td class="no-width text-right nowrap">
            <h3>3.00</h3>
          </td>
          <td class="no-width text-right">
            <button class="button">Start</button>
          </td>
          <td class="no-width">
            <a href="/harvest-nav/project-analysis" class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
        <tr>
          <td style="width:40%">
            <strong>Task name</strong>
            <br>
            <small>1:20pm - 4:20pm / Just one note</small>
          </td>
          <td>
            <strong>[CODE] Project name</strong>
            <br>
            <small>Client name</small>
          </td>
          <td class="no-width text-right nowrap">
            <h3>3.00</h3>
          </td>
          <td class="no-width text-right">
            <button class="button">Start</button>
          </td>
          <td class="no-width">
            <a href="/harvest-nav/project-analysis" class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
        <tr class="is-running">
          <td style="width:40%">
            <strong>Task name</strong>
            <br>
            <small>1:20pm - 4:20pm</small>
          </td>
          <td>
            <strong>[CODE] Project name</strong>
            <br>
            <small>Client name</small>
          </td>
          <td class="no-width text-right nowrap">
            <h3>3.00</h3>
          </td>
          <td class="no-width text-right">
            <button class="button primary">Stop</button>
          </td>
          <td class="no-width">
            <a href="/harvest-nav/project-analysis" class="button button-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </a>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td class="text-right"><h3>Total</h3></td>
          <td class="text-right"><h3>3.00</h3></td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>

  <button class="button primary">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    New time entry
  </button>
</main>
