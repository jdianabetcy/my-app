import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private metaTagService:Meta){
  }

  ngOnInit(){
    this.metaTagService.addTags([
      {name:'keywords', content:'Angular SEO,Contact-us '},
      { name: 'author', content: 'Diana' },
      { name: 'sales', content: 'Sales list of the entire year' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ])
  }
}
