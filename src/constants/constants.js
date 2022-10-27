export const projects = [
	{
		// keep description to <55 words
		title: "Mapping Data",
		description:
			"My flight history as a Cabin Crew! It accounts for 1351 flights, ten years, and over 9000 hours (DBZ pun not intended). This project uses a dataset I build up after my flight logbook. I plotted all the flights and the airport data on a map. It looks like an airline network.",
		image: "/images/1.png",
		tags: ["Phyton", "Pandas", "MatplotLib"],
		source: "https://github.com/maco-data/Flight-History/blob/main/mapper.py",
		visit: "https://github.com/maco-data/Flight-History",
		id: 0,
	},
	{
		title: "Logbook Dashboard",
		description:
			"A script to automate the extraction of data from a crew duty report. The information from tables inside a pdf file. I extracted the data, analyzed it, and used Tableau to create a dashboard. This automation saves quite some time and does a great job of organizing the information for better visualization.",
		image: "/images/2.png",
		tags: ["Python", "Pandas", "Matplotlib", "Tableau"],
		source: "https://github.com/maco-data/Crew-Report-Generator",
		visit: "https://public.tableau.com/app/profile/marco.alberto.camarena.ospino/viz/logbook_proj/DataViz",
		id: 1,
	},
	{
		title: "Web Scraping Data and Machine Learning",
		description:
			"Machine Learning practice. I extracted the data, transformed it, and then used it to predict the winner of football matches in the English Premier League (EPL). Who does not love football? I only used data from the last five seasons (2017 to 2022). I keep iterating on this project.",
		image: "/images/3.png",
		tags: ["Jupyter Notebook", "Scikit Learn", "Beautiful Soup"],
		source: "https://github.com/maco-data/ML_EPL/blob/main/predictions.ipynb",
		visit: "https://github.com/maco-data/ML_EPL",
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
	{ year: 2008, text: "Worked as a Aircraft Maintenance Technician." },
	{ year: 2010, text: "Became a Cabin Crew and traveled the world." },
	{ year: 2015, text: "Started designing logos for friends and family." },
	{ year: 2018, text: "Dived into the world of Data Science." },
	{ year: 2021, text: "Shared some of my projects with the world." },
	{ year: 2022, text: "Looking to learn and experience new things!" },
]
