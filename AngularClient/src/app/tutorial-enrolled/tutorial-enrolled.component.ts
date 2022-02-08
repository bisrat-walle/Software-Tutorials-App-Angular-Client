import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorial-enrolled',
  templateUrl: './tutorial-enrolled.component.html',
  styleUrls: ['./tutorial-enrolled.component.css']
})
export class TutorialEnrolledComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
	this.title.setTitle("Enrolled Tutorials");
  }

}
