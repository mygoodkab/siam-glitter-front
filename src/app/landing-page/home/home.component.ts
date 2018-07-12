import { Component, OnInit, HostListener } from '@angular/core';
import { DefaultUrlSerializer } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img_slide = [
    { img: '../../../assets/images/21.jpg' },
    { img: '../../../assets/images/21.jpg' },
    { img: '../../../assets/images/21.jpg' },
  ];

  new_arrival = [
    { img: '../../../assets/images/1.jpg', detail_short: '32 inch with Crystal', name: 'Pearl', pro_id: 'PR0005' },
    { img: '../../../assets/images/2.jpg', detail_short: '16 inch with Ruby Pendant', name: 'Pearl', pro_id: 'PR0001' },
    { img: '../../../assets/images/3.jpg', detail_short: 'lenght 90 cm', name: 'Pearl', pro_id: 'SC0005' },
  ];

  products = [
    { img: '../../../assets/images/1.jpg', name: 'Jewelry' },
    { img: '../../../assets/images/2.jpg', name: 'Jewelry' },
    { img: '../../../assets/images/3.jpg', name: 'Scarf' },
    { img: '../../../assets/images/4.jpg', name: 'Wallet' },
    { img: '../../../assets/images/5.jpg', name: 'Perfume' },
    { img: '../../../assets/images/6.jpg', name: 'Hangbag' },
  ];

  constructor() { }

  @HostListener('window:resize', ['$event'])

  //  default dive to SET Height as Width
  // defaultSize() {
  //   // tslint:disable-next-line:forin
  //   for (const index in this.new_arrival) {
  //     const new_arrival_item = document.getElementById('new_arrival_item' + index);
  //     const new_arrival_item_width = new_arrival_item.offsetWidth;
  //     new_arrival_item.style.height = new_arrival_item_width.toString() + 'px';
  //   }
  // }

  onresize() {
    // SET Height as Width in New Arrival Items
    // tslint:disable-next-line:forin
    for (const index in this.new_arrival) {
      const new_arrival_item = document.getElementById('new_arrival_item' + index);
      const new_arrival_item_width = new_arrival_item.offsetWidth;
      new_arrival_item.style.height = new_arrival_item_width.toString() + 'px';
    }
    // SET Height as Width in Product
    // tslint:disable-next-line:forin
    for (const index in this.products) {
      const prodct_list = document.getElementById('prodct_list' + index);
      const prodct_list_width = prodct_list.offsetWidth;
      prodct_list.style.height = prodct_list_width.toString() + 'px';
    }
  }

  ngOnInit() {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.onresize();
  }
}
