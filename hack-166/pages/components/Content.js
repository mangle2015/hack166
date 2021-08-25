import React from "react";
import styles from "../../styles/Home.module.css";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

//data for bar chart
const barChartdata = {
	labels: [
		"Docker",
		"Kubernetes",
		"Rancher",
		"Helm",
		"Java",
		".net",
		"Selenium",
		"Test Cafe",
		"Postman",
		"GIT",
		"Bitbucket",
		"React",
	],
	datasets: [
		{
			label: "Skills in hours",
			fill: false,
			// barTension: 0.1,
			backgroundColor: "rgba(0,0,225,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 0,
			pointHoverRadius: 0,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			pointHitRadius: 0,
			data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
		},
	],
};

//doughnut chart data set

const circleData = {
	labels: ["Front End", "BackEnd", "DevOps","Soft Skills"],
	datasets: [
		{
			data: [150, 50, 150,50],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#DDA0DD"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#DDA0DD"],
		},
	],
};

function Content() {
	return (
		<div className={styles.contentcontainer}>
			<div className={styles.contentwrapper}>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Tech Stack</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Team Roster</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Stories</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Projects</h2>
					</div>
				</div>
			</div>
			{/* chart started  */}
			<div className={styles.charts}>
				<div className={styles.bar}>
					<h2>Kaufman’s Model of Learning Evaluation</h2>
					<Bar data={barChartdata} width={400} height={400} />
				</div>
				<div className={styles.circle}>
					<h2>Tech Stack</h2>
					<Doughnut data={circleData} width={400} height={400} />
				</div>
			</div>
		</div>
	);
}

export default Content;
