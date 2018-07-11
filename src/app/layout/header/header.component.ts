import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Sticky Header
    const stick_header = document.getElementById('stick-header');
    const logo = document.getElementById('logo');
    const sticky = stick_header.offsetTop;
    const window_scroll = document.body.scrollTop + document.documentElement.scrollTop;

    // Scroll Down
    if (window_scroll < 120) { // 120 ความยาวของ header
      stick_header.classList.remove('stick-header');
      logo.classList.remove('blank-menu');
    } else {
      stick_header.classList.add('stick-header');
      logo.classList.add('blank-menu');

    }
    // if (sticky >= window_scroll) {
    //   console.log('Gooooooooooooooooooooooood');
    //   stick_header.classList.remove('stick-header');
    //   logo.classList.remove('blank-menu');
    // }

    console.log('Sticky : ', sticky);
    console.log('Window_scroll : ', window_scroll);
    // if (sticky - window_scroll < 61) {
    //   stick_header.classList.remove('stick-header');
    //   logo.classList.remove('blank-menu');
    // }
    // if (sticky - 100 < window_scroll) {
    //   stick_header.classList.remove('stick-header');
    //   logo.classList.remove('blank-menu');

    // } else {
    //   stick_header.classList.add('stick-header');
    //   logo.classList.add('blank-menu');

    // }


  }

  ngOnInit() {
  }

}
