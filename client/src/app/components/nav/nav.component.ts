import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public showMenu:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openMenu(){
    //menuburger
    this.showMenu = !this.showMenu;
  }
}
