import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {


  accPath : string = "E:\Web(JEE+TOM+Angular)\Angular test\PortFolio\src\assets\acc.jpg";

  constructor() { }

  ngOnInit() {
  }

}
