import "./home.css";
import joshuaPic from "./static/images/profile.webp";
import rightArrow from "./static/images/icons/right-arrow.svg";

const visualCrossingKey = "LJVZ5T9ETAKSGFVR8K9ZHY69P"

function createLocation(location, description) {
	const name = location;
	const cleanName = location.replaceAll(" ", "").replaceAll(",", "").toLowerCase();
	const details = description;
	const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cleanName}?key=${visualCrossingKey}`;

	return { name, details, query };
};
const grandForks = createLocation("Grand Forks, North Dakota", "I come from North Dakota, but I've lived all over the place. Here's what the weather is like now in Grand Forks. Click the arrow to see other places I've been!")
const lyon = createLocation("Lyon, France", "I lived in Lyon for a time after finishing undergrad. I was studying French in order to prepare for my master's program. I really loved the city, its architecture, and walkability. It has a great bike rental system and was a general joy to be in. I met a lot of great people here with whom I still hope to reunite.");
const batonRouge = createLocation("Baton Rouge, Louisiana", "I studied philosophy at Louisiana State University where I received a master's. I hated the environment but enjoyed the people and the winter weather.");
const seoul = createLocation("Seoul, South Korea", "In Seoul I taught English to a wide range of students aged from kindergarten to retirees. The weather went to extremes that my body was not used to, but I enjoyed how easy it was to move around and was impressed by the metro system. I don't think I would choose to live in such a large city again, however.");
const locations = [seoul, grandForks, lyon, batonRouge,];

function createEndeavour(name, subname, details, subnameTwo, detailsTwo) {
	const title = name;
	const subtitle = subname;
	const description = details;
	const subtitle2 = subnameTwo;
	const description2 = detailsTwo;

	return { title, subtitle, description, subtitle2, description2 };
};
const teaching = createEndeavour("Teaching", "Grand Forks Public Schools", "As a substitute teacher I cover many different subjects including at one point as an English teacher for an entire semester.", "Minot State University", "As an adjunct lecturer I teach philosophy online.");
const webdev = createEndeavour("Web Development", "HTML, CSS, JavaScript", "I'm still learning, but I'm moving at break-neck speed.");
const farmersMarket = createEndeavour("Farmer's Market", "Bagels, Sourdough, Granola, Cookies", "Claire and I enjoy cooking and this summer we are taking it to the town square.");
const endeavours = [teaching, webdev, farmersMarket,];

const slideOut = [
	{ transform: "translateX(0%)" },
	{ transform: "translateX(-250%)" },
];
const slideIn = [
	{ transform: "translateX(250%)" },
	{ transform: "translateX(0%)" },
]

const slideTiming = {
	duration: 250,
	iterations: 1,
	fill: "forwards",
};

function createHome() {
	i = 0; // Sets index for page status. Should reset on each page creation.
	// Create about section.
	const aboutSummary = document.createElement("div");
	aboutSummary.setAttribute("id", "about-summary");
	aboutSummary.classList.add("flex-centered-row");

	const profilePic = document.createElement("img");
	profilePic.setAttribute("id", "profile");
	profilePic.src = joshuaPic;
	profilePic.alt = "Profile picture of Joshua";

	const aboutText = document.createElement("p");
	aboutText.textContent = "I am currently a teacher hoping to break into the web development space. I am from North Dakota where I studied English and philosophy during my undergraduate education. I later completed a master's in philosophy at Louisiana State University. I have taught at LSU; in Seoul, KR; at the Grand Forks Public Schools; and at Minot State University. Scroll down to explore more about my interests!";

	body.appendChild(aboutSummary);
	aboutSummary.appendChild(profilePic);
	aboutSummary.appendChild(aboutText);

	// Create locations section
	const locationsContainer = document.createElement("div");
	locationsContainer.setAttribute("id", "locations");
	locationsContainer.classList.add("flex-centered-row");

	const locationDetails = document.createElement("div");
	locationDetails.setAttribute("id", "location-details");

	const locationText = document.createElement("p");
	locationText.setAttribute("id", "location-text");

	body.appendChild(locationsContainer);
	locationsContainer.appendChild(locationDetails);
	locationDetails.appendChild(locationText);

	const weatherContainer = document.createElement("div");
	weatherContainer.setAttribute("id", "weather");

	const weatherTitle = document.createElement("h4");
	weatherTitle.setAttribute("id", "weather-title");

	const temperature = document.createElement("p");
	temperature.setAttribute("id", "temperature");

	const condition = document.createElement("p");
	condition.setAttribute("id", "condition");

	const nextButton = document.createElement("button");
	nextButton.setAttribute("id", "right-button");
	nextButton.addEventListener("click", () => {
		temperature.animate(slideOut, slideTiming);
		weatherTitle.animate(slideOut, slideTiming);
		condition.animate(slideOut, slideTiming);
		setTimeout(cycleLocations, 250);
	});

	const buttonIcon = document.createElement("img");
	buttonIcon.classList.add("icon");
	buttonIcon.src = rightArrow;
	buttonIcon.alt = "Next Button";

	locationsContainer.appendChild(weatherContainer);
	weatherContainer.appendChild(weatherTitle);
	weatherContainer.appendChild(temperature);
	weatherContainer.appendChild(condition);
	weatherContainer.appendChild(nextButton);
	nextButton.appendChild(buttonIcon);
	cycleLocations();

	// Create endeavours section
	const endeavoursContainer = document.createElement("div");
	endeavoursContainer.setAttribute("id", "endeavours");
	endeavoursContainer.classList.add("flex-centered");
	body.appendChild(endeavoursContainer);

	const endeavoursTitle = document.createElement("h2");
	endeavoursTitle.textContent = "I get up to a lot, so check out my current endeavours!";
	endeavoursContainer.appendChild(endeavoursTitle);
	
	endeavours.forEach((endeavour) => {
		const card = document.createElement("div");
		card.classList.add("card");
		endeavoursContainer.appendChild(card);

		const cardTitle = document.createElement("h1");
		cardTitle.classList.add("card-title");
		cardTitle.textContent = endeavour.title;
		cardTitle.style.color = endeavour.color;
		card.appendChild(cardTitle);

		const cardSubtitle = document.createElement("h3");
		cardSubtitle.classList.add("card-subtitle");
		cardSubtitle.textContent = endeavour.subtitle;
		card.appendChild(cardSubtitle);

		const cardDescription = document.createElement("p");
		cardDescription.classList.add("card-text");
		cardDescription.textContent = endeavour.description;
		card.appendChild(cardDescription);

		if (endeavour.subtitle2 != undefined) {
			const cardSubtitle2 = document.createElement("h3");
			cardSubtitle2.classList.add("card-subtitle");
			cardSubtitle2.textContent = endeavour.subtitle2;
			card.appendChild(cardSubtitle2);

			const cardDescription2 = document.createElement("p");
			cardDescription2.classList.add("card-text");
			cardDescription2.textContent = endeavour.description2;
			card.appendChild(cardDescription2);
		} else {
			console.log("Done making cards");
		};

		const cardButton = document.createElement("button");
		cardButton.textContent = "Read More";
		card.appendChild(cardButton);
	});
};

let i = 0;
async function cycleLocations() {
	const temp = document.querySelector("#temperature");
	const condition = document.querySelector("#condition");
	const text = document.querySelector("#location-text");
	const title = document.querySelector("#weather-title");

	if (i < 3) {
		i += 1;
	} else {
		i = 0;
	};

	text.textContent = locations[i].details;
	title.textContent = locations[i].name;
	title.animate(slideIn, slideTiming);

	const response = await fetch(locations[i].query);
	const data = await response.json();
	const temperature = Math.floor((data.currentConditions.temp - 32) / 1.8);
	const conditions = data.currentConditions.conditions;
	temp.textContent = `${temperature}°C`;
	temp.animate(slideIn, slideTiming);
	condition.textContent = conditions;
	condition.animate(slideIn, slideTiming);
};

export { createHome };
