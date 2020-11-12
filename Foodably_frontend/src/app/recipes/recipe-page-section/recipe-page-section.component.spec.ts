import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePageSectionComponent } from './recipe-page-section.component';

describe('RecipePageSectionComponent', () => {
  let component: RecipePageSectionComponent;
  let fixture: ComponentFixture<RecipePageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipePageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
