import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sondecomponent } from './sondecomponent';

describe('Sondecomponent', () => {
  let component: Sondecomponent;
  let fixture: ComponentFixture<Sondecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sondecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Sondecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
