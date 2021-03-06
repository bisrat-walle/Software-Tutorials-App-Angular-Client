import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import { Chart, BarElement, BarController, CategoryScale, LinearScale, Decimation, Filler, Legend, Title as ChartTitle, Tooltip } from 'chart.js'; 
import * as $ from "jquery";

@Component({
  selector: 'app-admin-tutorial',
  templateUrl: './admin-tutorial.component.html',
  styleUrls: ['./admin-tutorial.component.css']
})
export class AdminTutorialComponent implements OnInit {

  constructor(private title:Title) {
	Chart.register(BarElement, BarController, CategoryScale, Decimation, Filler, Legend, ChartTitle, Tooltip, LinearScale );
  }

  ngOnInit(): void {
	this.title.setTitle("Manage Tutorials");
	
	
	//from thymleaf
	const charts:any = document.querySelectorAll(".chart");

	charts?.forEach(function (chart:any){
		var ctx = chart.getContext("2d");
		var myChart= new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["Instructors", "Clients", "Enrollements", "Tutorials"],
				datasets: [
					{
						label: "Instructors - Clients - Instructors - Tutorials",
						data: [
							parseInt(document.getElementById("instructorSize")?.innerHTML || '10'),
							parseInt(document.getElementById("clientSize")?.innerHTML || '0'),
							parseInt(document.getElementById("enrollementSize")?.innerHTML || '0'),
							parseInt(document.getElementById("tutorialSize")?.innerHTML || '0')
							 ],
						backgroundColor: [
							"rgba(255, 99, 132, 1)",
							"rgba(54, 162, 235, 1)",
							"rgba(255, 206, 86, 1)",
							"rgba(75, 192, 192, 1)",
							"rgba(153, 102, 255, 1)",
							"rgba(255, 159, 64, 1)",
							"rgba(255, 159, 64, 1)",
						],

						borderColor: [
							"rgba(255, 99, 132, 1)",
							"rgba(54, 162, 235, 1)",
							"rgba(255, 206, 86, 1)",
							"rgba(75, 192, 192, 1)",
							"rgba(153, 102, 255, 1)",
							"rgba(255, 159, 64, 1)",
							"rgba(255, 159, 64, 1)",

						],

						borderWidth: 1,
					},
				],
			},
			options:{
				scales: {
					y: {
						beginAtZero: true,
					},
				},
					},
				
		
		});
	});

	$(document).ready(function () {
		$(".data-table").each(function (_, table){
			$(table).DataTable();
		});
	});
  }

}
