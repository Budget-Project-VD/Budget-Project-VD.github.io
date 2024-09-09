import page from "@page";
import { showDashboardView } from "../views/dashboardView.js";
import { addRender } from "../middlewares/render.js";
import { showIncomeView } from "../views/incomeView.js";
import { outcomesShowView } from "../views/outcomesView.js";

const root = document.querySelector('main');

page(addRender(root));
page('/dashboard', showDashboardView);
page('/incomes', showIncomeView);
page('/outcomes', outcomesShowView);

page.start();
