---
title: Reports
---

<header id="top-nav">
  <nav>
    <a href="/harvest-nav/reports" class="is-active">Summary</a>
    <a href="/harvest-nav/detailed-report">Detailed time</a>
    <a href="#">Detailed expense</a>
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
    <h1>Summary report</h1>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Clients</a>
      <a href="#">Projects</a>
      <a href="#">Tasks</a>
      <a href="#">People</a>
    </nav>
  </div>

  <div class="flex justify-space-between filters mt-16">
    <div class="flex">
      <div class="button-group">
        <button class="button button-sm button-icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
        <button class="button button-sm button-icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
        <button class="button button-sm"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> Month: <span>Mar 2021</span></button>
      </div>
      <button class="button button-sm"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle></svg> Active projects only</button>
    </div>
    <div class="flex">
      <a href="/harvest-nav/detailed-report" class="button button-sm">See detailed time</a>
      <button class="button button-sm">Export <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 10 14 16 20 10"></polyline></svg></button>
    </div>
  </div>

  <div class="summary mt-16">
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
      Billable amount<br>
      <h2>$123.45</h2>
      <div class="flex justify-space-between mt-8">
        Time <strong>3.00</strong>
      </div>
      <div class="flex justify-space-between">
        Expenses <strong>0.00</strong>
      </div>
    </div>
    <div class="summary-box">
      Internal costs<br>
      <h2>$123.45</h2>
      <div class="flex justify-space-between mt-8">
        Time <strong>3.00</strong>
      </div>
      <div class="flex justify-space-between">
        Expenses <strong>0.00</strong>
      </div>
    </div>
    <div class="summary-box">
      Assumed profit<br>
      <h2>$123.45</h2>
      <div class="flex justify-space-between mt-8">
        Time <strong>3.00</strong>
      </div>
      <div class="flex justify-space-between">
        Expenses <strong>0.00</strong>
      </div>
    </div>
  </div>

  <div class="empty big mt-16">
    There are no hours recorded for this time period.
  </div>
</main>
