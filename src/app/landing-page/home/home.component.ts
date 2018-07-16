import { Component, OnInit, HostListener } from '@angular/core';
import { DefaultUrlSerializer } from '../../../../node_modules/@angular/router';
import { HomeService } from './home.service';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  new_arrival: any;
  imageURL = this.appService.baseURL + '/file/image/';
  img_slide = [
    { img: '../../../assets/images/21.jpg' },
    { img: '../../../assets/images/21.jpg' },
    { img: '../../../assets/images/21.jpg' },
  ];

  constructor(
    private homeService: HomeService,
    private appService: AppService,
  ) { }

  @HostListener('window:resize', ['$event'])

  ngOnInit() {
    this.getProduct();
    this.getNewProduct();
  }

  // // tslint:disable-next-line:use-life-cycle-interface
  // ngAfterViewInit() {
  //    this.onresize();
  // }

  // onresize() {
  //   // SET Height as Width in New Arrival Items
  //   // tslint:disable-next-line:forin
  //   for (const index in this.new_arrival) {
  //     const new_arrival_item = document.getElementById('new_arrival_item' + index);
  //     const new_arrival_item_width = new_arrival_item.offsetWidth;
  //     new_arrival_item.style.height = new_arrival_item_width.toString() + 'px';
  //   }
  //   // SET Height as Width in Product
  //   // tslint:disable-next-line:forin
  //   for (const index in this.products) {
  //     const prodct_list = document.getElementById('prodct_list' + index);
  //     const prodct_list_width = prodct_list.offsetWidth;
  //     prodct_list.style.height = prodct_list_width.toString() + 'px';
  //   }
  // }

  async getProduct() {
    this.products = await this.appService.getProduct('?limit=6');
  }
  async  getNewProduct() {
    this.new_arrival = await this.appService.getNewProduct('?limit=3');
  }
}
