import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-template',
  templateUrl: './root-template.component.html',
  styleUrls: ['./root-template.component.scss']
})
export class RootTemplateComponent implements OnInit {

  title: string;
  menuIsActive: boolean;
  menuItems = [
    {caption: 'Dashboard', route: ['/doctor/dashboard']},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(componentRef): void {
    this.title = componentRef.title;
  }

  closeMenu(): void {
    this.menuIsActive = false;
  }

  toggleMenu(): void {
    this.menuIsActive = !this.menuIsActive;
  }

}
