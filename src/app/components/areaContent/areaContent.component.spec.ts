import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaContentComponent } from './areaContent.component';

describe('AreaContentComponent', () => {
  let component: AreaContentComponent;
  let fixture: ComponentFixture<AreaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
