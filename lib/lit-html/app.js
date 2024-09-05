import  page  from "../lib/page/page.mjs";
import { html, render } from "../lib/lit-html/lit-html.js";
import { classMap } from "../lib/lit-html/directives/class-map.js";


const temp = () => html `
  <h1>This is my test page</h1>
  `


function showHome() {
  render(temp())
  
}

page(render(temp(), document.querySelector('main')));
page.start();

