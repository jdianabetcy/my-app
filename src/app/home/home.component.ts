import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Home"
  constructor(private metaTagService:Meta,
    private titleTagService:Title) { }

  ngOnInit(): void {
    this.titleTagService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name:"Home", description:"Home Page"}
    );
  }

}
