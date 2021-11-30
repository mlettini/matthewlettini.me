---
layout: layouts/harvest-nav.njk
title: Clients
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Manage clients</a>
    <a href="#">Manage contacts</a>
  </nav>
</header>

<main class="narrow">
  <div class="flex back-to mb-16">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    <a href="/harvest-nav/clients" class="is-active">Back to clients</a>
  </div>

  <div>
    <h1>New client</h1>
    Once you’ve added a client, you can add projects and contacts.
  </div>

  <div class="form-box mt-24">
    <div class="field mb-16">
      <div class="left">
        <label>Client name<span class="required">*</span></label>
      </div>
      <div class="right">
        <input class="input" type="text" autofocus>
      </div>
    </div>
    <div class="field mb-16">
      <div class="left">
        <label>Address</label>
      </div>
      <div class="right">
        <textarea rows="3" class="input"></textarea>
      </div>
    </div>
    <div class="field mb-16">
      <div class="left">
        <label>Currency</label>
      </div>
      <div class="right">
        <input class="input" type="text">
      </div>
    </div>
    <div class="submit">
      <button class="button primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Save client</button>
      <a href="/harvest-nav/clients" class="button cancel">Cancel</a>
    </div>
  </div>

</main>
