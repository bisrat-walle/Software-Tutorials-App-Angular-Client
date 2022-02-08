import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.css']
})
export class TutorialDetailComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
	this.title.setTitle("Tutorial Detail");
  }

}
