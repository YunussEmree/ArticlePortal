import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwriterComponent } from './viewwriter.component';

describe('ViewwriterComponent', () => {
  let component: ViewwriterComponent;
  let fixture: ComponentFixture<ViewwriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewwriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewwriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
