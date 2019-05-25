import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {

  constructor() { }
  @Input() label: string;
  @Input() value: string;
  ngOnInit() {
  }

}
