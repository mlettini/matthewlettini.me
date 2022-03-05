---
title: Reports
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Time</a>
    <a href="/harvest-nav/detailed-report">Detailed time</a>
    <a href="#">Detailed expense</a>
    <a href="#">Contractor</a>
    <a href="#">Invoiced</a>
    <a href="#">Uninvoiced</a>
    <a href="#">Payments</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <h1>Time report</h1>
    <a href="/harvest-nav/my-report" class="button">My time report</a>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Clients</a>
      <a href="#">Projects</a>
      <a href="#">Tasks</a>
      <a href="#">People</a>
    </nav>
  </div>

  <div class="flex justify-space-between mt-16">
    <div class="flex">
      <button class="button button-sm">Month <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
      <div class="button-group">
        <button class="button button-sm button-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
        <button class="button button-sm button-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
      </div>
      <button class="button button-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg> Back to this month</button>
      <h3 class="ml-4">Last month: <span class="text-400">Mar 2021</span></h3>
    </div>
    <div class="flex">
      <a href="/harvest-nav/detailed-report" class="button button-sm">Detailed report</a>
      <button class="button button-sm">Export <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
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
      Uninvoiced amount<br>
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
  </div>

  <div class="empty big mt-16">
    There are no hours recorded for this time period.
  </div>
</main>
