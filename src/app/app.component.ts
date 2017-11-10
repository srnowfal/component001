import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
import { trigger,state,style,animate,transition,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  
  <h1 [class.green-title]=titleClass>CLICKIFSICK</h1>
  <h1 [class]=titleClass1>CLICKIFSICK</h1>

  <h1 [ngClass]=titleClasses>Symptom Checker</h1>
<h1 [style.color]="titleStyle?'blue':'yellow'">CLICKIFSICK</h1>
  <h1 [ngStyle]=titleStyles>CLICKIFSICK</h1>

  <p [@myOwnAnimation]=state (click)="AnimateMe()">{{ someMethode }}</p>
  <ul>
    <li *ngFor="let car of someProperty">{{ car }}</li>
  </ul>

  <p [@myOwnAnimation]=state (click)="AnimateMe()">I will Animate</p>
  
  `,
  // styleUrls: ['./app.component.scss']
  styles:[`
    h1{
      text-decoration:underline;
    }
    .green-title{
      color:#23d1b7;
    }
    .red-title{
      color:red;
    }
    .large-title{
      font-size:4em;
    }

    p {
    width:200px;
    background:lightgray;
    margin: 100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
  `
  ],
  animations:[
    trigger(
      'myOwnAnimation',[

        state('big',style({
          transform: 'scale(1.5)',
        })),

        state('small',style({
          transform: 'scale(1)',
        })),

        transition('big <=> small', animate('300ms ease-in',keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
          ])
        ))

    ])
  ]
})
export class AppComponent {
  

  title = 'app';
  imgPic='images/Logo.png';

  titleClass=true;
   titleClass1='red-title';
   titleClasses={
     'green-title': true,
     'large-title': true
   }
    titleStyle=true;
   titleStyles={
     color:'red',
     'font-size': '4em'
   }
   constructor(private dataService:MyDataService){

   }
   someProperty=[];
   someMethode:String="";

   ngOnInit(){
     this.someProperty=this.dataService.cars;
     this.someMethode=this.dataService.myMethode();
   }

   state='big';
   AnimateMe(){
     this.state=(this.state==='big'?'small':'big');
   }

}
