import { ComponentFixture, TestBed } from '@angular/core/testing';
import { T10goEnvLoader } from './t10go-env-loader';

describe('T10goEnvLoader', () => {
  let component: T10goEnvLoader;
  let fixture: ComponentFixture<T10goEnvLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T10goEnvLoader],
    }).compileComponents();

    fixture = TestBed.createComponent(T10goEnvLoader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
