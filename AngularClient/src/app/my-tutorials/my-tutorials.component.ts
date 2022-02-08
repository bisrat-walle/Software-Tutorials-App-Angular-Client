import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-my-tutorials',
  templateUrl: './my-tutorials.component.html',
  styleUrls: ['./my-tutorials.component.css']
})
export class MyTutorialsComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
	this.title.setTitle("My Tutorials");
  }

}
