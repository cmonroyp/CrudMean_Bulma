import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

//Service 
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public showMenu:boolean = true;
  private width = document.documentElement.clientWidth;
  public identity;

  constructor(private _alumnoService: AlumnoService,
              private _router: Router) {

    //codigo para manipular el MenuBurguer
    const $resizeEvent = Observable.fromEvent(window, 'resize')
      .map(() => {
        return document.documentElement.clientWidth;
        })
      .debounceTime(200)
      $resizeEvent.subscribe(data => {
        this.width = data;

        if(this.width>750){  
          this.showMenu = true;
        }
      });
   }

  ngOnInit() {
  }

  openMenu(){
    //menuburger
    this.showMenu = !this.showMenu;    
  }

  logout(){
    this._alumnoService.removeToken();
    this._router.navigate(['/login']);//quitamos cualquier ruta visitada.
  }

}
