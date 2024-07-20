import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})

export class CatalogoComponent implements OnInit{
  
  constructor() {}
  
  ngOnInit(): void {
    
  }

  num: number = 0;

  decremento(){
    this.num--;
  }

  incremento(){
    this.num += 1;
  }

}
