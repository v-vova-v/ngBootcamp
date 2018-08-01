import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'dashboard';

  priceList = [
    {title: 'Dental seal', price: '350'},
    {title: 'Dental seal', price: '350'},
    {title: 'Dental seal', price: '350'},
    {title: 'Dental seal', price: '350'},
    {title: 'Dental seal', price: '350'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
