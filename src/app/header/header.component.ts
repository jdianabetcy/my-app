import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private metaTagService:Meta,
    private titleService:Title) { }

  ngOnInit(): void {
    this.metaTagService.updateTag(
      { name: 'description', content: 'Navigation Menu' }
    );
  }

}
