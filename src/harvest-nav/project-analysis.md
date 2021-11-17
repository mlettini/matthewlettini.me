---
layout: layouts/harvest-nav.njk
title: Projects
---

<header id="top-nav">
  <nav>
    <a href="/harvest-nav/projects" class="is-active">Manage projects</a>
    <a href="/harvest-nav/tasks">Manage tasks</a>
  </nav>
</header>

<main>
  <div class="flex mb-16">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    <a href="/harvest-nav/projects" class="is-active">Back to projects</a>
  </div>

  <div class="flex justify-space-between">
    <div>
      Client Name
      <h1>[CODE] Project Name</h1>
    </div>
    <div class="flex">
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
        Edit project
      </button>
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
        Actions
      </button>
    </div>
  </div>

  <div class="summary mt-24">
    <div class="summary-box">
      Total hours<br>
      <h1>123.45</h1>
    </div>
    <div class="summary-box">
      Budget<br>
      <h1>123.45</h1>
    </div>
    <div class="summary-box">
      Billable amount<br>
      <h1>$123.45</h1>
    </div>
    <div class="summary-box">
      Uninvoiced amount<br>
      <h1>$123.45</h1>
    </div>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Tasks</a>
      <a href="#">Team</a>
      <a href="#">Invoices</a>
    </nav>
  </div>
</main>
