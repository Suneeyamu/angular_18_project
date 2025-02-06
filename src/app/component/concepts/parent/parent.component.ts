import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  //we must need to define the type of the data otherwise it'll throws errors, we can use any kind of data from parent to child and vice versa
  parentMessage: string = "Hi, I'm from Parent";
  parentMessage2: string = ""     ;
  parentNumArry: number[] = [2, 3, 4];
  parentStringrry: string[] = ['a','b','c'];
  parentArrayofObj = [{ name: 'suni', age: 25 },
  { name: 'ashok', age: 26 }
  ];

  
receivedMsg : string = "";
receivedArray:string[] =[];
receivedObj: { name: string, age: number }= { name: '', age: 0 };
receivedArrayofObj:{name:string, age: number}[] =[];

  recevingMsgfromChild(msg:string){
this.receivedMsg = msg;
  }

  recevingArray(arraymsg:string[]){
    this.receivedArray = arraymsg;
  }

  recevingObj(objMsg:{name:string; age: number}) {
    this.receivedObj = objMsg;
  }
  recevingArrayofObj(arrayofObjMsg:{name:string; age: number}[]){
    this.receivedArrayofObj= arrayofObjMsg
  }
}
