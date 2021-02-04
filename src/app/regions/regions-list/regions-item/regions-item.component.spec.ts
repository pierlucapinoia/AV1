import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsItemComponent } from './regions-item.component';

describe('RegionsItemComponent', () => {
  let component: RegionsItemComponent;
  let fixture: ComponentFixture<RegionsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
