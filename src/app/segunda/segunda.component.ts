import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.css']
})
export class SegundaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  droppedItemsLunes = [
    {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif"},
    {name:"pecho",type:"gifs",url:"https://ugc.kn3.net/i/origin/http://www.gimnasiototal.com/animaciones/ejerciciosparapecho5.gif"}
  ];
  droppedItemsMartes = [
    {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif"},
    {name:"pecho",type:"gifs",url:"https://ugc.kn3.net/i/origin/http://www.gimnasiototal.com/animaciones/ejerciciosparapecho5.gif"}
  ];
  droppedItemsMiercoles = [
    {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif"},
    {name:"pecho",type:"gifs",url:"https://ugc.kn3.net/i/origin/http://www.gimnasiototal.com/animaciones/ejerciciosparapecho5.gif"}
  ];
  droppedItemsJueves = [
    {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif"},
    {name:"pecho",type:"gifs",url:"https://ugc.kn3.net/i/origin/http://www.gimnasiototal.com/animaciones/ejerciciosparapecho5.gif"}
  ];
  droppedItemsViernes = [
    {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif"},
    {name:"pecho",type:"gifs",url:"https://ugc.kn3.net/i/origin/http://www.gimnasiototal.com/animaciones/ejerciciosparapecho5.gif"}
  ];
  droppedItemsSabado = [
    {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif"},
    {name:"pecho",type:"gifs",url:"https://ugc.kn3.net/i/origin/http://www.gimnasiototal.com/animaciones/ejerciciosparapecho5.gif"}
  ];
  droppedItemsDomingo = [
    {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif"},
    {name:"pecho",type:"gifs",url:"https://ugc.kn3.net/i/origin/http://www.gimnasiototal.com/animaciones/ejerciciosparapecho5.gif"}
  ];
}

