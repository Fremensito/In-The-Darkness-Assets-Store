import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InGamePage } from './in-game.page';

describe('InGamePage', () => {
  let component: InGamePage;
  let fixture: ComponentFixture<InGamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
