import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreRecipeSectionComponent } from './more-recipe-section.component';

describe('MoreRecipeSectionComponent', () => {
  let component: MoreRecipeSectionComponent;
  let fixture: ComponentFixture<MoreRecipeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreRecipeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreRecipeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
