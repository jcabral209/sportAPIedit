import { Component, OnInit, Input } from '@angular/core';
import { ScheduleInterData } from '../schedule-inter-data';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.css']
})
export class DisplayScreenComponent implements OnInit {

  constructor() { }
  @Input() score: ScheduleInterData;
  ngOnInit() {
  }

}
