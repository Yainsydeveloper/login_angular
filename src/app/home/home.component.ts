import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  
  user:any = {};

constructor(){}

ngOnInit(): void {
    this.user = JSON.stringify(localStorage.getItem("user"));
    if(!this.user){
      location.href = "/";
    }
    
  }

  logout(){

    localStorage.removeItem("user");
    location.href = "/";
  }

}


