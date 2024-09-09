import { html } from "@lit-html";

const incomeTemp = () => html `

  
<section class="section-incomes" id="section-incomes">
  <h2 class="heading-2">Incomes</h2>
  <div class="income-container">
    <div class="input-field-container" id="input-field-container">
      <form class="income-form" id="income-form">
        <div class="fields-box" id="fields-box">
          <label class="data-label" id="data-label" for="data"
            >Date: </label
          >
          <input
            type="date"
            class="data-input"
            id="data-input"
            default="today"
          />
        </div>
        <div class="fields-box" id="fields-box">
          <select
            name="incomeType"
            id="select-income"
            class="select-income"
          >
            <option value="10">Salary</option>
            <option value="">Alimony</option>
            <option value="">Child Support</option>
            <option value="">Tips</option>
            <option value="">Investment Income</option>
            <option value="">Monetary gift</option>
            <option value="">Work bonuses</option>
            <option value="">Side husle income</option>
            <option value="">Refund</option>
            <option value="">Lottary</option>
            <option value="">Betting</option>
            <option value="">Casinos</option>
            <input
              name="amount"
              class="income-amount-input"
              id="income-amount-input"
              type="number"
            />€
          </select>
        </div>

        <button class="income-btn" type="submit">add income</button>
      </form>
    </div>

    <div class="income-info-box">
      <h4 class="heading-4" id="heading-4">Incomes</h4>
      <p class="incomes-amount-text" id="incomes-amount-text">0</p>
    </div>
  </div>
    <div class="transaction-preview" id="transaction-preview">
      <ul class="trans-list" id="trans-list">
        <li class="trans-list-item" id="trans-list-item">
          <span class="trans-list-switch">income</span>
          <span class="trans-list-date" id="trans-list-date"
            >05/09/2020</span
          >
          <span class="trans-list-type" id="trans-list-type"
            >Salary</span
          >
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
      </ul>
    </div>
  
</section>
`

export function showIncomeView(ctx) {
  ctx.render(incomeTemp())

  incomeCalc()
}

function incomeCalc() {
  let result = 0;
  const incomeInputs = document.getElementById('income-amount-input')
  const incomeResult = document.getElementById('incomes-amount-text')
  result += incomeInputs.value
  incomeResult.textContent = result

}