---
title: Clients
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Manage clients</a>
    <a href="#">Manage contacts</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <div class="flex">
      <h1>Clients</h1>
    </div>
    <div class="flex">
      <a href="/harvest-nav/new-client" class="button primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        New client
      </a>
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
        Import
      </button>
      <input class="input search" type="text" placeholder="Find a client…">
    </div>
  </div>

  <div class="tabs mt-24 mb-16">
    <nav>
      <a href="#" class="is-active">Active (20)</a>
      <a href="#">Pinned (12)</a>
      <a href="#">Stale (0)</a>
      <a href="#">Archived</a>
    </nav>
  </div>

  <div class="flex justify-space-between">
    <div class="flex">
    </div>
    <div class="flex">
      <button class="button button-sm">Filter by currency <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
      <button class="button button-sm">Export <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
    </div>
  </div>

  <div class="empty mt-16">
    <img src="/images/snap.png">
    <p class="mt-16 mb-16">
      Clients are the foundational element in Harvest.<br>
      Your team will track time to projects that belong to clients.
    </p>
    <a href="/harvest-nav/new-client" class="button primary">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      Create your first client
    </a>
  </div>
</main>
