import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Title,Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-sales-product-list',
  templateUrl: './sales-product-list.component.html',
  styleUrls: ['./sales-product-list.component.css']
})
export class SalesProductListComponent implements OnInit {
  title = "Sales Product List";
  theFakeJsons: any;
  errorMessage: any;
  constructor(private http: HttpClient,
    private titleTagService:Title,
    private metaTagService:Meta) { }

  ngOnInit(): void {
    this.titleTagService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name:"description", content:"Sales Product List of the Enterprises"}
      )
    this.http
    .get<any>('https://mocki.io/v1/45239641-a504-45cd-8c9f-a31c43ce1f57')
    .subscribe({
      next: (data) => {
        this.theFakeJsons = data;
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.log('There was a error:', error);
      },
    });
  }

}
