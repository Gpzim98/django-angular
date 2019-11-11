import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberComponent } from './new-member.component';

describe('NewMemberComponent', () => {
  let component: NewMemberComponent;
  let fixture: ComponentFixture<NewMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
