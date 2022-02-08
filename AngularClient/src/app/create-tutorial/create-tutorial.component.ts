import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';  

@Component({
  selector: 'app-create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.css']
})
export class CreateTutorialComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
	this.title.setTitle("Create Tutorial");
  }

}
