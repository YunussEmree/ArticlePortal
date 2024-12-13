import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritersSectionComponent } from './writers-section.component';


describe('WritersSectionComponent', () => {
  let component: WritersSectionComponent;
  let fixture: ComponentFixture<WritersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritersSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
