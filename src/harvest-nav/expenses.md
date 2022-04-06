---
title: Expenses
---

<header id="top-nav">
  <nav>
    <a href="#" class="is-active">Track expenses</a>
    <a href="#">Manage categories</a>
  </nav>
</header>

<main>
  <div class="flex justify-space-between">
    <div class="flex">
      <h1>Expenses</h1>
    </div>
    <div class="flex">
      <button class="button primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        New expense
      </button>
      <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        Teammates
      </button>
    </div>
  </div>

  <div class="timeexpense-table-wrapper mt-16">
    <table border="0" class="table expense-table mb-16" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th colspan="100">
            <div class="flex justify-space-between">
              <div class="flex">
                Week
                <div class="badge ml-4">Pending approval</div>
              </div>
              <a href="#" class="button button-xs">Resubmit for approval</a>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="timeexpense-row-meta">
              Date
              <div>
                <strong>Category name</strong><br>
                <small>[CODE] Project name &nbsp; (Client Name)</small><br>
                <small><span style="color:#666">Here are some notes</span></small>
              </div>
            </div>
          </td>
          <td class="no-width text-right nowrap">
            <h3>$3.00</h3>
          </td>
          <td class="no-width timeexpense-row-buttons">
            <div class="flex">
              <a href="#" class="button button-sm button-empty button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
              </a>
              <a href="#" class="button button-sm button-empty button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="20" cy="12" r="1"></circle><circle cx="4" cy="12" r="1"></circle></svg>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-right"><h3 class="text-400 text-secondary">Total:</h3></td>
          <td class="text-right"><h3>$3.00</h3></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    <table border="0" class="table expense-table" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th colspan="100">
            <div class="flex justify-space-between">
              <div class="flex">
                Week
                <div class="badge green ml-4">Approved</div>
              </div>
              <a href="#" class="button button-xs">Resubmit for approval</a>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="timeexpense-row-meta">
              Date
              <div>
                <strong>Category name</strong><br>
                <small>[CODE] Project name &nbsp; (Client Name)</small><br>
                <small><span style="color:#666">Here are some notes</span></small>
              </div>
            </div>
          </td>
          <td class="no-width text-right nowrap">
            <h3>$3.00</h3>
          </td>
          <td class="no-width timeexpense-row-buttons">
            <div class="flex">
              <a href="#" class="button button-sm button-empty button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
              </a>
              <a href="#" class="button button-sm button-empty button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="20" cy="12" r="1"></circle><circle cx="4" cy="12" r="1"></circle></svg>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-right"><h3 class="text-400 text-secondary">Total:</h3></td>
          <td class="text-right"><h3>$3.00</h3></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</main>
