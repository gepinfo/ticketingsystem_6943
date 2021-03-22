import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchticketsComponent } from './searchtickets.component';

describe('SearchticketsComponent', () => {
  let component: SearchticketsComponent;
  let fixture: ComponentFixture<SearchticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});