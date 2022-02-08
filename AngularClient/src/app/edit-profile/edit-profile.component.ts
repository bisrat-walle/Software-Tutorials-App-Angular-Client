import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';  

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
	this.title.setTitle("Edit Profile");
  }

}
