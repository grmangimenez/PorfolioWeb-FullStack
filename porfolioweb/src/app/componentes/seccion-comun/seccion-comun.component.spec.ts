import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionComunComponent } from './seccion-comun.component';

describe('SeccionComunComponent', () => {
  let component: SeccionComunComponent;
  let fixture: ComponentFixture<SeccionComunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionComunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
