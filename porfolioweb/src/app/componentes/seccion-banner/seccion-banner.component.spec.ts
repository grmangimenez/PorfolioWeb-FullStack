import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionBannerComponent } from './seccion-banner.component';

describe('SeccionBannerComponent', () => {
  let component: SeccionBannerComponent;
  let fixture: ComponentFixture<SeccionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
