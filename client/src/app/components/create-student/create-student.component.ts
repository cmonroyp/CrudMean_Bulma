import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
//service 
import { FacultadService } from '../../services/facultad.service';
import { AlumnoService } from '../../services/alumno.service';

//model 
import { Alumno } from '../../models/alumno';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public alumno: Alumno;
  public facultades:Array<any>=[];
  public selectedFacultad;
  public patternEmail:string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  public messageEmail:string;
  
  constructor(private _facultadService: FacultadService,
              private _alumnoService: AlumnoService) {
      
      this.alumno = new Alumno('','','','','');
   }

  ngOnInit() {
    this.getFacultades();
  }

  getFacultades(){
    this._facultadService.getFacultades()
        .subscribe((res:any)=>{
          this.facultades = res.facultades
          console.log('facultades',this.facultades);
        },
        (err)=>console.log('Error en la Consulta', err))
  }

  onSubmit(){    
    console.log('estudiante',this.alumno);
    this._alumnoService.addAlumno(this.alumno)
        .subscribe((res:any)=>{
          this.messageEmail = res.alumno.email;
        },
        (err)=>console.log(err));
    
  }

  message_close(){
    this.messageEmail = "";
  }
}
