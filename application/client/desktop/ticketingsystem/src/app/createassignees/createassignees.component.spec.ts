import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateassigneesComponent } from './createassignees.component';

describe('CreateassigneesComponent', () => {
  let component: CreateassigneesComponent;
  let fixture: ComponentFixture<CreateassigneesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateassigneesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateassigneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});