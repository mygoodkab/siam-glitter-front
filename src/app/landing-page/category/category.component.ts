import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: any;
  category: any;
  category_id: any;
  imgURL: any = this.appService.baseURL + '/file/image/';
  constructor(
    private appService: AppService,
    private routeActive: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeActive.params.subscribe(params => {
      this.category_id = params.id;
      this.getProductByCategory();
      this.getCategory();
    });


  }
  async getCategory() {
    this.category = await this.appService.getCategory('/' + this.category_id);
  }

  async getProductByCategory() {
    this.products = await this.appService.getProductByCategory('?categoryId=' + this.category_id);
  }
}
