import { html, render } from "@lit-html";

const dashboardTemp = () => html`
<section class="section-dashboard" id="section-dashboard">
  <h1 class="heading-1" id="heading-1">Your Finance Mirror</h1>
  <div class="screen-tabs-wrapper" id="screen-tabs-wrapper">
    <div class="balance-screen" id="balance-screen">
      <h5 class="balance-heading">Balance</h5>
      <p class="balance-amount" id="balance-amount">0 €</p>
    </div>
    <div class="incomes" id="incomes">
      <h5 class="incomes-heading">Incomes</h5>
      <p class="incomes-amount" id="incomes-amount">0 €</p>
    </div>
    <div class="outcomes" id="outcomes">
      <h5 class="outcomes-heading">Outcomes</h5>
      <p class="outcomes-amount" id="outcomes-amount">0 €</p>
    </div>
  </div>
  <div class="transaction-preview" id="transaction-preview">
    <ul class="trans-list" id="trans-list">
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <button
            class="trans-list-edit-button"
            id="trans-list-edit-button"
          >
            edit
          </button>
          <button
            class="trans-list-delete-button"
            id="trans-list-delete-button"
          >
            delete
          </button>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <button
            class="trans-list-edit-button"
            id="trans-list-edit-button"
          >
            edit
          </button>
          <button
            class="trans-list-delete-button"
            id="trans-list-delete-button"
          >
            delete
          </button>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
      <hr />
      <li class="trans-list-item" id="trans-list-item">
        <span class="trans-list-switch">income</span>
        <span class="trans-list-date" id="trans-list-date"
          >05/09/2020</span
        >
        <span class="trans-list-type" id="trans-list-type">Salary</span>
        <span class="trans-list-cash" id="trans-list-cash">0€</span>
        <div class="trans-list-btns-box" id="trans-list-btns-bix">
          <div class="trans-list-btns-box" id="trans-list-btns-bix">
            <button
              class="trans-list-edit-button"
              id="trans-list-edit-button"
            >
              edit
            </button>
            <button
              class="trans-list-delete-button"
              id="trans-list-delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
`

export function showDashboardView(ctx) {
  ctx.render(dashboardTemp());
}