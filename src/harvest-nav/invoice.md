---
layout: layouts/harvest-nav.njk
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
  <div class="flex justify-space-between mb-16">
    <div class="flex back-to">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      <a href="/harvest-nav/invoices" class="is-active">Back to invoices</a>
    </div>
    <input class="input search" type="text" placeholder="Find an invoice…">
  </div>

  <div>
    <h1>Invoice #1234</h1>
    <a href="#">View history</a>
  </div>

  <div class="flex justify-space-between mt-16">
    <div class="flex">
      <button class="button primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        Send invoice
      </button>
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
        Actions
      </button>
    </div>
    <div class="flex">
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        Record payment
      </button>
    </div>
  </div>

  <hr class="mt-16 mb-16">
</main>
