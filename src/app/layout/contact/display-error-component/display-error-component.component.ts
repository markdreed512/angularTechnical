import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-error-component',
  templateUrl: './display-error-component.component.html',
  styleUrls: ['./display-error-component.component.css']
})
export class DisplayErrorComponentComponent {
  @Input() errorMsg: string;
  @Input() displayError: boolean;
}
