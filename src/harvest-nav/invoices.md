---
title: Invoices
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Manage invoices</a>
    <a href="#">Manage recurring invoices</a>
    <a href="#">Manage retainers</a>
    <a href="#">Configure</a>
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
      <input class="input search" type="text" placeholder="Find an invoice…">
    </div>
  </div>

  <div class="form-box mt-16">
    <div class="form-box-inner">
      <div class="field mb-16">
        <div class="left">
          <label>Client<span class="required">*</span></label>
        </div>
        <div class="right">
          <input class="input" type="text" autofocus>
        </div>
      </div>
      <div class="field mb-16">
        <div class="left">
          <label class="no-height">Invoice type</label>
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
        <button class="button primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> Next step</button>
        <button class="button cancel">Cancel</button>
      </div>
    </div>
  </div>

  <hr class="mt-16 mb-24">

  <div class="summary mt-24 mb-24">
    <div class="summary-no-box">
      <span>Total open amount</span>
      <h2>$123.45</h2>
    </div>
    <div class="summary-no-box">
      <span>Total paid amount (this year)</span>
      <h2>$123.45</h2>
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
      <button class="button button-sm is-filtered">Status: <span>Open</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
      <button class="button button-sm is-filtered">Client: <span>Apple Computers</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
      <button class="button button-sm">Export <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
      <button class="button button-sm">Save view</button>
    </div>
  </div>

  <div class="empty big mt-16">
    No invoices match your current filters.<br>
    <a href="/harvest-nav/invoice">Clear filters</a>
  </div>
</main>