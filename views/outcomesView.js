import { html } from "@lit-html";

const outcomesTemp = () => html`
  <section id="outcomes">
    <form id="form-outcomes">
      <div class="fields-box field-box-date" id="fields-box">
        <label class="data-label" id="data-label" for="data">Date: </label>
        <input type="date" class="data-input" id="data-input" default="today" />
      </div>
      <div class="form-box-left">
        <h5>Dept Payment</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="outcomeDept"
            id="select-outcomes"
            class="select-outcomes outcomeDept"
          >
            <option value="">Select from list</option>
            <option value="">Medical Bills</option>
            <option value="">Auto Loans</option>
            <option value="">Student Loans</option>
            <option value="">Personal Loans</option>
            <option value="">Payday loans</option>
            <input
              name="dept"
              class="outcome-amount-output"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Transportation</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="outcomeTransportation"
            id="select-outcomes"
            class="select-outcomes select-transportation"
          >
            <option value="">Select from list</option>
            <option value="">Gas</option>
            <option value="">Parking</option>
            <option value="">DMV Registration</option>
            <option value="">Auto warranty</option>
            <option value="">Tyres, oil Changer</option>
            <option value="">Repair</option>
            <input
              name="transportation"
              class="outcome-amount-output"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Work</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="work"
            id="select-outcomes"
            class="select-outcomes select-work"
          >
            <option value="">Select from list</option>
            <option value="">Lanches</option>
            <option value="">Dry Cleaning</option>
            <option value="">Certification</option>
            <option value="">Classes & Training</option>
            <input
              name="work"
              class="outcome-amount-output work"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Medical</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="select-medical"
            id="select-outcomes"
            class="select-outcomes select-work"
          >
            <option value="">Select from list</option>
            <option value="">Medications</option>
            <option value="">Doctor</option>
            <option value="">Eye care</option>
            <option value="">Dental care</option>
            <option value="">Therapist Fees</option>
            <option value="">Physical terapies</option>
            <option value="">Medical divises</option>
            <input
              name="medical"
              class="outcome-amount-output work"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Insuarance</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="select-insuarance"
            id="select-outcomes"
            class="select-outcomes select-insuarance"
          >
            <option value="">Select from list</option>
            <option value="">Health Insuarance</option>
            <option value="">Dental Insuarance</option>
            <option value="">Vision Insuarance</option>
            <option value="">Auto Insuarance</option>
            <option value="">Homeowners Insuarance</option>
            <option value="">Life Insuarance</option>
            <option value="">Disability Insuarance</option>
            <input
              name="medical"
              class="outcome-amount-output insuarance"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Food</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="select-food"
            id="select-outcomes"
            class="select-outcomes select-food"
          >
            <option value="">Select from list</option>
            <option value="">Grosseries</option>
            <option value="">Restaurants</option>
            <option value="">Caffe Shops</option>
            <option value="">Fast Food</option>
            <option value="">Alchohol</option>
            <input
              name="food"
              class="outcome-amount-output food"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Personal Expenses</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="select-personal"
            id="select-outcomes"
            class="select-outcomes select-personal"
          >
            <option value="">Select from list</option>
            <option value="">Cloathing</option>
            <option value="">Shoes & Accesories</option>
            <option value="">Jewrly</option>
            <option value="">Lingery</option>
            <option value="">Perfume</option>
            <option value="">Consmetics</option>
            <input
              name="personal"
              class="outcome-amount-output personal"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Enterteiment & travel</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="select-travel"
            id="select-outcomes"
            class="select-outcomes select-travel"
          >
            <option value="">Select from list</option>
            <option value="">Book, Music</option>
            <option value="">Movie, Theathers</option>
            <option value="">Subscription Service</option>
            <option value="">Sport Events</option>
            <option value="">Clubs & Hobies</option>
            <option value="">Special outing</option>
            <option value="">Travel costs</option>
            <input
              name="travel"
              class="outcome-amount-output travel"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
      </div>
      <div class="form-box-right">
        <h5>Housing</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="selectHousin"
            id="select-outcomes"
            class="select-outcomes select-housing"
          >
            <option value="">Select from list</option>
            <option value="">Morgage and Rent</option>
            <option value="">Property Taxes</option>
            <option value="">HOA Fees</option>
            <option value="">Home Inprovment</option>
            <input
              name="housing"
              class="outcome-amount-output housing"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Houshold</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="outcomeHousehold"
            id="select-outcomes"
            class="select-outcomes select-household"
          >
            <option value="">Select from list</option>
            <option value="">Kitchen Supplies</option>
            <option value="">Garage Items</option>
            <option value="">Laundry Products</option>
            <option value="">Lows & Garden</option>
            <input
              name="household"
              class="outcome-amount-output household"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Personal Care</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="personalCare"
            id="select-outcomes"
            class="select-outcomes select-personalcare"
          >
            <option value="">Select from list</option>
            <option value="">Skincare</option>
            <option value="">Hair</option>
            <option value="">Toiletries</option>
            <option value="">Massages</option>
            <input
              name="personalCare"
              class="outcome-amount-output personalCare"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Gifts</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="select-gifts"
            id="select-outcomes"
            class="select-outcomes select-gifts"
          >
            <option value="">Select from list</option>
            <option value="">Birthsday gift</option>
            <option value="">Anniversary gift</option>
            <option value="">Cristmas gift</option>
            <option value="">Other holiday gifts</option>
            <option value="">Baby gift</option>
            <option value="">Wedding gift</option>
            <option value="">Donation</option>
            <input
              name="gifts"
              class="outcome-amount-output gifts"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Utilities</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="select-utilities"
            id="select-outcomes"
            class="select-outcomes select-utilities"
          >
            <option value="">Select from list</option>
            <option value="">Electricity</option>
            <option value="">Natural gas</option>
            <option value="">Water</option>
            <option value="">Garbage</option>
            <option value="">Sewer</option>
            <option value="">Internet</option>
            <option value="">Cabel</option>
            <option value="">Cell Phones</option>
            <option value="">Alarm</option>
            <input
              name="utilities"
              class="outcome-amount-output utilities"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Pets</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="select-pets"
            id="select-outcomes"
            class="select-outcomes select-pets"
          >
            <option value="">Select from list</option>
            <option value="">Pet Food</option>
            <option value="">Veterinary Care</option>
            <option value="">Pet Insuarance</option>
            <input
              name="pets"
              class="outcome-amount-output pets"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Kids</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="select-kids"
            id="select-outcomes"
            class="select-outcomes select-kids"
          >
            <option value="">Select from list</option>
            <option value="">School supplies</option>
            <option value="">Privat Lessons</option>
            <option value="">Athletic fees</option>
            <option value="">School lanches</option>
            <option value="">Babysitters</option>
            <option value="">Campts</option>
            <input
              name="kids"
              class="outcome-amount-output kids"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
        <h5>Miscellarcous</h5>
        <div class="fields-box-outcomes" id="fields-box">
          <select
            name="select-miscellarcous"
            id="select-outcomes"
            class="select-outcomes select-miscellarcous"
          >
            <option value="">Select from list</option>
            <option value="">Bank fees</option>
            <option value="">Taxes</option>
            <option value="">Anithing</option>

            <input
              name="miscellarcous"
              class="outcome-amount-output miscellarcous"
              id="outcome-amount-output"
              type="number"
            />€
          </select>
        </div>
      </div>
      <button class="outcomes-submit-btn" id="outcomes-submit-btn">
        submit
      </button>
    </form>

    <div class="transaction-preview" id="transaction-preview">
      <ul class="trans-list" id="trans-list">
        <li class="trans-list-item" id="trans-list-item">
          <span class="trans-list-switch">income</span>
          <span class="trans-list-date" id="trans-list-date">05/09/2020</span>
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
      </ul>
    </div>
  </section>
`;

export function outcomesShowView(ctx) {
  ctx.render(outcomesTemp());
}
