import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
  }

}
