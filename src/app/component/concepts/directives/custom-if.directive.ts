// import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';

// @Directive({
//   selector: '[appCustomIf]' // custom structural directive
// })
// export class CustomIfDirective {

//   @Input() set appCustomIf(condition: boolean){
//     if(condition){
//       this.viewContainer.createEmbeddedView(this.templateRef); // show element
//     } else{
//       this.viewContainer.clear(); //remove element
//     }
//   }

//   constructor(
//     private templateRef:TemplateRef<any>,
//     private viewContainer : ViewContainerRef
//   ) { }

// }
