console.log("Hi, npm run build");
import { createElementWithParams } from "./helpers/DOMhelper.js";

const body = document.querySelector("#app");

const text = createElementWithParams("h2", { textContent: "Hello tne World" });

body.append(text);

console.log(body);
