import "./template.css";
import "./teaching.css";
import { createHome } from "./home.js";

const home = document.querySelector("#home");
const portfolio = document.querySelector("#portfolio");
const writing = document.querySelector("#writing");
const about = document.querySelector("#about");
const body = document.querySelector("#body");

home.addEventListener("click", () => {
	clearBody();
	createHome();
});

function clearBody() {
	console.log("Clearing body");
	while (body.childElementCount > 0) {
		body.removeChild(body.firstChild);
	};
};
