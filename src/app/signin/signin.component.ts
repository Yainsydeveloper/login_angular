import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: any = {};
  loading:boolean = false;




  constructor(private http: HttpClient){}



  ngOnInit(): void {
  
  }

  crear(){
    let formulario:any = document.getElementById("crear");
    let formularioValido:boolean = formulario.reportValidity();
    if(formularioValido){
      this.loading = true;
      this.createService().subscribe(
        data => this.confirmar(data)
      )

    }

  }

  confirmar(resultado:any){
    this.loading = false;
  if(resultado){
    alert("usuario creado exitosamente")
    this.user = {};
  }
else{
    
  alert("Error al crear el usuario");


  }
}

  createService(){
    var httpOptions = {
      Headers:new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
     return this.http.post<any>("http://localhost:8080/user/guardar", this.user.httpOptions);

  }

  regresar(){

    location.href = "/";
  }
   

  }
