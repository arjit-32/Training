import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamecontrolComponent } from './gamecontrol.component';

describe('GamecontrolComponent', () => {
  let component: GamecontrolComponent;
  let fixture: ComponentFixture<GamecontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamecontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamecontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
