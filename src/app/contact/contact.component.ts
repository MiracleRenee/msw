import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimationStyleMetadata } from '@angular/core/src/animation/dsl';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {


  public contact ={
    firstName: '',
    lastName: '',
    email:'',
    content:''
   };

  constructor(public http: HttpClient) { }

  ngOnInit() {

  }
submit(){
  this.http.post('http://localhost:8080/sendEmail', this.contact)
    .subscribe( (response: any) => {
      console.log(response);
      this.contact ={
        firstName: '',
        lastName: '',
        email:'',
        content:''
       };
    
    }, (error) => {
      console.log(error);
    });
    

}
}
