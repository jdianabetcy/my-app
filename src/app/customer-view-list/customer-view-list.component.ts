import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-customer-view-list',
  templateUrl: './customer-view-list.component.html',
  styleUrls: ['./customer-view-list.component.css']
})
export class CustomerViewListComponent implements OnInit {
  title = "Customer List";
  constructor(private metaTagService:Meta,
    private titleTagService:Title) { }

  ngOnInit(): void {
    this.titleTagService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name:"description", description:"Customer List with all Details"}
    );
  }

}
