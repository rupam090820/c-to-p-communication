
import { Component, OnInit, Output, EventEmitter } from '@angular/core';  // step 1 import Output and EvenEmitter

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  @Output() public recived_data = new EventEmitter;  // step 3:- create new event (name is recived_data).
  public gender:any='';

  constructor() { }

  ngOnInit(): void {
  }


  send_data(n: any, n1: any, n2: any, n3:any, n4:any)  // step 2:- here decleare those event which is used in button(child3.component.html)
  {
    console.log(n.value); // step 4: check is value recived or not from child.component.html file
    console.log(n1.value);  // step 4: check is value recived or not from child.component.html file
    console.log(n2.value); // step 4: check is value recived or not from child.component.html file
   
    if(n3.checked){
      this.gender=n3.value;
    }
    else if (n4.checked){
      this.gender=n4.value;
    }
    else {
      this.gender='';
    }
  
    
    this.recived_data.emit({   // step 5:- here link to  above new event and emit this event( evit mean throw)
     'g1':n.value,            // step 6:- here store value into new variable
     'g2':n1.value,
     'g4':n2.value,
     'g5':this.gender
     });  // step 7:- here genarate bydefault $event which hold all data of recived_data event
    //  console.log(this.gender);
    }
    }
 

// now go to parent component html page rest of the step declare there