---
title: Projects
---

<header id="top-nav">
  <nav>
    <a href="/harvest-nav/projects" class="is-active">Manage projects</a>
    <a href="/harvest-nav/tasks">Manage tasks</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between mb-16">
    <a href="/harvest-nav/projects" class="button button-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg> Back to projects
    </a>
    <input class="input search" type="text" placeholder="Find a project…">
  </div>

  <div class="flex justify-space-between mt-8">
    <div>
      Client Name
      <h1>[CODE] Project Name</h1>
    </div>
    <div class="flex">
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="20" cy="12" r="1"></circle><circle cx="4" cy="12" r="1"></circle></svg>
        Actions
      </button>
    </div>
  </div>

  <div class="summary mt-24">
    <div class="summary-box">
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        Expand to see graphs
      </div>
    </div>
  </div>

  <div class="summary mt-8">
    <div class="summary-box">
      Total hours<br>
      <h2>123.45</h2>
      <div class="flex justify-space-between mt-8">
        Billable <strong>123.00</strong>
      </div>
      <div class="flex justify-space-between">
        Non-billable <strong>0.45</strong>
      </div>
    </div>
    <div class="summary-box">
      Remaining budget<br>
      <h2>123.45</h2>
      <div class="mt-8">
        <div class="meter" style="width:100%"></div>
      </div>
      <div class="flex justify-space-between">
        Budget <strong>2,000.00</strong>
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
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#">Budget</a>
      <a href="#" class="is-active">Tasks</a>
      <a href="#">Team</a>
      <a href="#">Invoices</a>
    </nav>
  </div>


  <div class="flex justify-space-between filters mb-4">
    <div class="flex">
      <div class="button-group">
        <button class="button button-sm button-icon is-disabled"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
        <button class="button button-sm button-icon is-disabled"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
        <button class="button button-sm"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> All time</button>
      </div>
    </div>
    <div class="flex">
      <a href="/harvest-nav/detailed-report" class="button button-sm">See detailed time</a>
      <button class="button button-sm">Export <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 10 14 16 20 10"></polyline></svg></button>
    </div>
  </div>
</main>
