import "./error_404.css";
import { clearBody } from "./main.js";

function create404() {
	clearBody();
	const errorContainer = document.createElement("div");
	errorContainer.setAttribute("id", "error-404");

	const errorMessage = document.createElement("p");
	errorMessage.textContent = "This website is still under construction, but it looks better than the old one! Check back later...";
	
	body.appendChild(errorContainer);
	errorContainer.appendChild(errorMessage);
};

export { create404 };
