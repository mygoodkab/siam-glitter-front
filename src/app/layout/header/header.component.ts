import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from '../../app.service';
​​import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: any;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

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

  }

  ngOnInit() {
    this.getCategory();
  }

  async getCategory() {
    this.categories = await this.appService.getCategory('');
  }

  // route_category(id) {
  //   this.router.navigate(['home/category', id]);
  // }

  route(link, params) {
    this.router.navigate([link, params]);
  }
}
