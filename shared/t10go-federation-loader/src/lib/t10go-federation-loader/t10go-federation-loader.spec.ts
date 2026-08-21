import { ComponentFixture, TestBed } from '@angular/core/testing';
import { T10goFederationLoader } from './t10go-federation-loader';

describe('T10goFederationLoader', () => {
  let component: T10goFederationLoader;
  let fixture: ComponentFixture<T10goFederationLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T10goFederationLoader],
    }).compileComponents();

    fixture = TestBed.createComponent(T10goFederationLoader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
