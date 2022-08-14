import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionHardyskillComponent } from './seccion-hardyskill.component';

describe('SeccionHardyskillComponent', () => {
  let component: SeccionHardyskillComponent;
  let fixture: ComponentFixture<SeccionHardyskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionHardyskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionHardyskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
