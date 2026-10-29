import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sonderefaccomponent } from './sonderefaccomponent';

describe('Sonderefaccomponent', () => {
  let component: Sonderefaccomponent;
  let fixture: ComponentFixture<Sonderefaccomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sonderefaccomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Sonderefaccomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
