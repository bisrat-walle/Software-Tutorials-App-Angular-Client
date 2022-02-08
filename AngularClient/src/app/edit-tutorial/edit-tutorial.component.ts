import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-tutorial',
  templateUrl: './edit-tutorial.component.html',
  styleUrls: ['./edit-tutorial.component.css']
})
export class EditTutorialComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
	this.title.setTitle("Edit Tutorial");
  }

}
