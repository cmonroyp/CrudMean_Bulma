import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Forms 
import {FormsModule} from '@angular/forms';
//modulos http 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { NavComponent } from './components/nav/nav.component';

//rutas 
import { APP_ROUTING } from './app.routing';

//Services
import { FacultadService } from './services/facultad.service';
import { AlumnoService } from './services/alumno.service';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    NavComponent,
    AdministracionComponent,
    EditStudentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [FacultadService,AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
