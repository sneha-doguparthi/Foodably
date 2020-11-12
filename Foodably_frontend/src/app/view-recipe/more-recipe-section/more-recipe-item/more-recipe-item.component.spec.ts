import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreRecipeItemComponent } from './more-recipe-item.component';

describe('MoreRecipeItemComponent', () => {
  let component: MoreRecipeItemComponent;
  let fixture: ComponentFixture<MoreRecipeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreRecipeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
