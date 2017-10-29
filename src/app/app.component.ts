import { Component } from '@angular/core';
import {Http, Response} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gym Wolf';
  private apiUrl ='https://gist.githubusercontent.com/defrex/e18a51d54b34770e83b48c471428d7b0/raw/8824958108b94f127347bed52af8170a259ea3e6/gifs.json';
  data:any={};
  
  constructor(private http:Http){
    console.log("hola estos son los usuarios")
    this.getContacts();
    this.getData();
  } 
  getData(){
    return this.http.get(this.apiUrl).map((res:Response)=>res.json())
  }
  getContacts(){
    this.getData().subscribe(data=>{
      console.log(data);
      this.data= data;
    })
    
  }
}
