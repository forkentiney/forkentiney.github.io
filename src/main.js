const header = document.querySelector("#header");
const weather = document.querySelector("#weather")
const condition = document.querySelector("#condition");

// Add shadow on scroll down, remove it at top of page.
window.addEventListener("scroll", () => {
  if (window.scrollY < 5) {
    header.classList.remove("shadow");
  } else {
    header.classList.add("shadow");
  }
});

(async () => {
	const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/grand%20forks?key=LJVZ5T9ETAKSGFVR8K9ZHY69P');
	response.json().then(function(response) {
		console.log(response);
		const temperature = Math.floor((response.currentConditions.temp - 32) / 1.8);
		const conditions = response.currentConditions.conditions.toLowerCase();
		weather.textContent = `it's ${temperature}°C`;
		condition.textContent = `and ${conditions}`;
	}).catch(function(error) {
		weather.textContent = "it's probably cold";
		condition.textContent = "...and windy."
	});
})();
