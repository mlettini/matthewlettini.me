---
layout: layouts/harvest-nav.njk
title: Invoices
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Manage invoices</a>
    <a href="#">Manage recurring invoices</a>
    <a href="#">Manage retainers</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <div class="flex">
      <h1>Invoices</h1>
    </div>
    <div class="flex">
      <button class="button primary is-disabled">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-plus"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
        New invoice
      </button>
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tool"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
        Configure
      </button>
      <input class="input search" type="text" placeholder="Find an invoice…">
    </div>
  </div>

  <div class="form-box mt-16">
    <div class="field mb-16">
      <div class="left">
        <label>Client</label>
      </div>
      <div class="right">
        <input class="input" type="text">
      </div>
    </div>
    <div class="field mb-16">
      <div class="left">
        <label>Invoice type</label>
      </div>
      <div class="right">
        <div>
          <label>
            <input type="radio" checked="checked"> Create an invoice for tracked time and expenses
          </label>
        </div>
        <div>
          <label>
            <input type="radio"> Create a blank invoice that can be issued on a recurring schedule
          </label>
        </div>
        <div>
          <label>
            <input type="radio"> Create a blank invoice
          </label>
        </div>
      </div>
    </div>
    <div class="submit">
      <button class="button primary">Choose projects</button>
      <button class="button cancel">Cancel</button>
    </div>
  </div>

  <div class="summary mt-24">
    <div class="summary-box">
      <span>Total open</span>
      <h2>$123.45</h2>
    </div>
    <div class="summary-box">
      <span>Total paid amount</span>
      <h2>$123.45</h2>
    </div>
    <div class="summary-box">
      Graph
    </div>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#">Open (12)</a>
      <a href="#" class="is-active">All invoices</a>
    </nav>
  </div>

  <div class="flex justify-space-between mb-4">
    <div class="flex">
      <button class="button button-sm">Year <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
      <div class="button-group">
        <button class="button button-sm button-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
        <button class="button button-sm button-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
      </div>
      <h3 class="ml-4">This year: <span class="text-400">2021</span></h3>
    </div>
    <div class="flex">
      <small class="mr-4">Page 1 of 4</small>
      <div class="button-group">
        <button class="button button-sm button-icon is-disabled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
        <button class="button button-sm button-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
      </div>
      <button class="button button-sm is-filtered"><span>Status:</span> Open <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      <button class="button button-sm is-filtered"><span>Client:</span> Apple Computers <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      <button class="button button-sm">Export <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
    </div>
  </div>

  <div class="empty mt-16">
    No invoices match your current filters.
    <a href="#">Clear filters</a>
  </div>
</main>