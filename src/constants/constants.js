export const projects = [
	{
		title: "Mapping Data",
		description:
			"My flight history as an ex-Cabin Crew plotted on a map! 1351 flights narrow down to every unique flight I ever did. 10 years over 9000 hours (DBZ pun not intended). This project uses a dataset I build up after my flight logbook. I took the unique flights and the coordinates of the Airports and plotted the data on top of the Nasa Black Marble world map.",
		image: "/images/1.png",
		tags: ["Phyton", "Pandas", "MatplotLib"],
		source: "https://github.com/maco-data/Flight-History/blob/main/mapper.py",
		visit: "https://github.com/maco-data/Flight-History",
		id: 0,
	},
	{
		title: "Flights Book Dashboard",
		description:
			"A small tool to automate the extraction of a crew duty report. The information is in many tables inside a pdf with several pages which make it tedious to work with. I extracted the data then performed an analysis on it, then I used Tableau to create a dashboard. I you are an Ex-EK crew let me know if you would like to try this!",
		image: "/images/2.png",
		tags: ["Python", "Pandas", "Matplotlib", "Tableau"],
		source: "https://github.com/maco-data/Crew-Report-Generator",
		visit: "https://public.tableau.com/app/profile/marco.alberto.camarena.ospino/viz/logbook_proj/DataViz",
		id: 1,
	},
	{
		title: "Web Scraping Data and Machine Learning",
		description:
			"This project was a Machine Learning practice. I scraped the data and then used it to learn how to predict the winner of football matches in the English Premier League (EPL). Who does not love football? and what better to know if your favorite team is more likely to win than your friends’ favorite team. I used only the last 5  years (2017 to 2022).",
		image: "/images/3.png",
		tags: ["Python", "Jupyter Notebook", "Scikit Learn", "Beautiful Soup"],
		source: "https://github.com/maco-data/ML_EPL",
		visit: "https://google.com",
		id: 2,
	},
	// {
	// 	title: "Unichat",
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam tortor sit amet ipsum fringilla vestibulum. Vivamus pellentesque finibus massa, sed tincidunt dui malesuada nec. Duis consectetur blandit eros sit amet porta. Aliquam sed nibh mollis, interdum velit ut, porttitor felis. Duis scelerisque dapibus purus a pharetra. Curabitur vehicula massa.",
	// 	image: "/images/4.jpg",
	// 	tags: ["React", "ChatEngine", "Firebase"],
	// 	source: "https://google.com",
	// 	visit: "https://google.com",
	// 	id: 3,
	// },
]

export const TimeLineData = [
	{ year: 2015, text: "Started my journey as Designer" },
	{ year: 2018, text: "Dived into the world of Data Science" },
	{ year: 2021, text: "Shared my projects with the world" },
	{ year: 2022, text: "Looking for new challenges" },
]
