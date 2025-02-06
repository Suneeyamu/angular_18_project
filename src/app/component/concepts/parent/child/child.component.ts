import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() messageFromParent: string = "";
@Input() parentMessage2: string = "";
@Input() numArrayFromParent:number[] = [];
@Input() stringArrayFromParent:string[] = [];
@Input() objOfArrayFromParent:{name:string; age:number}[]= [];

@Output() message = new EventEmitter<string>();
@Output() arrayMsg = new EventEmitter<string[]>();
@Output() objMsg = new EventEmitter<{name:string; age:number}>();
@Output() ArrayofObjsMsg = new EventEmitter<{name:string, age:number}[]>();
  
sendingString : string="msg from child to parent";
sendingArray : string[] = ['a', '3', 'c'];
sendingObj = {name:'suni', age:25};
sendingArrayofObjs = [{name:'suni', age:25},
                      {name:'suni', age:25}
]
sendResponseToParent(){
this.message.emit(this.sendingString);
}

sendArrayResponse(){
this.arrayMsg.emit(this.sendingArray);
}

sendObjResponse(){
this.objMsg.emit(this.sendingObj)
}

sendArrayofObjResponse() {
this.ArrayofObjsMsg.emit(this.sendingArrayofObjs)
}
}

