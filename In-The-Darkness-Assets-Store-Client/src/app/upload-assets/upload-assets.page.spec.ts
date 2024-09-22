import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadAssetsPage } from './upload-assets.page';

describe('UploadAssetsPage', () => {
  let component: UploadAssetsPage;
  let fixture: ComponentFixture<UploadAssetsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAssetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
