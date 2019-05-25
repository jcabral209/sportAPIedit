import { Component, OnInit } from '@angular/core';
// import from the shared module
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // sharedModule: Sharedmodule;
  constructor() { }

  ngOnInit() {
  }
  // sharedModule.selectLeague
}
