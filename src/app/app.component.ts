import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './component/concepts/parent/child/child.component';
import { ParentComponent } from './component/concepts/parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_conceptsBased_project';
}
