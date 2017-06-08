import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardgroupContainerComponent } from './cardgroup-container.component';

describe('CardgroupContainerComponent', () => {
  let component: CardgroupContainerComponent;
  let fixture: ComponentFixture<CardgroupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardgroupContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardgroupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
