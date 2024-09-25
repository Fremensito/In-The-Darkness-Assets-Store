import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCharacterPage } from './new-character.page';

describe('NewCharacterPage', () => {
  let component: NewCharacterPage;
  let fixture: ComponentFixture<NewCharacterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
