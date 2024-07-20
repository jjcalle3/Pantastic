import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  msj: String = 'Forma parte de nuestro equipo Pantastic';  

  constructor(){}

  ngOnInit(): void {
    
  }
}
