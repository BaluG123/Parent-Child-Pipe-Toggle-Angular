import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtocComponent } from './ptoc.component';

describe('PtocComponent', () => {
  let component: PtocComponent;
  let fixture: ComponentFixture<PtocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
