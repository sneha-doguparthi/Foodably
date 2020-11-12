import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePageItemComponent } from './recipe-page-item.component';

describe('RecipePageItemComponent', () => {
  let component: RecipePageItemComponent;
  let fixture: ComponentFixture<RecipePageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipePageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
