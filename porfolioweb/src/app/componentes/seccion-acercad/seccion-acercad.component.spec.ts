import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAcercadComponent } from './seccion-acercad.component';

describe('SeccionAcercadComponent', () => {
  let component: SeccionAcercadComponent;
  let fixture: ComponentFixture<SeccionAcercadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAcercadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionAcercadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
