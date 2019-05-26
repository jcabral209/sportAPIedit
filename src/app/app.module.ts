import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AreaContentComponent } from './components/areaContent/areaContent.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplayScreenComponent } from './components/display-screen/display-screen.component';
import { DisplayDetailComponent } from './components/display-detail/display-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TeamSelectionComponent } from './components/team-selection/team-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AreaContentComponent,
    DisplayScreenComponent,
    DisplayDetailComponent,
    PaginationComponent,
    TeamSelectionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
