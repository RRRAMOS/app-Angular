import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  // variaveis criadas
  imageURL = "https://www.folhadelondrina.com.br/img/inline/2980000/Um-gatinho-para-D_-Helena0298121400202002201238-sm.jpg?xid=5156858"
  initialValue = "Valor Inicial"
  isDisabled = false; 
  accessibilityText = "Um texto acessível";
  

  constructor() { }

  ngOnInit(): void {
  }

  getImageURL() {
    return this.imageURL;
  }
}
