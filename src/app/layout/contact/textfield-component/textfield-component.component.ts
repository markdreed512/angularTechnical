import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textfield-component',
  templateUrl: './textfield-component.component.html',
  styleUrls: ['./textfield-component.component.css']
})
export class TextfieldComponentComponent  {
  @Input() fieldName: string; 
}
