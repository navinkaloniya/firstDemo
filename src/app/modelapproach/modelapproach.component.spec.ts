import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelapproachComponent } from './modelapproach.component';

describe('ModelapproachComponent', () => {
  let component: ModelapproachComponent;
  let fixture: ComponentFixture<ModelapproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelapproachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelapproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
