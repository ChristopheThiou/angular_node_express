import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonItemComponent } from './person-item.component';

describe('PersonItemComponent', () => {
  let component: PersonItemComponent;
  let fixture: ComponentFixture<PersonItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonItemComponent]
    });
    fixture = TestBed.createComponent(PersonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
