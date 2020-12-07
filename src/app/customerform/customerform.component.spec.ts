import { ComponentFixture, TestBed } from '@angular/core/testing';
import{Customer} from '../model/customer';
import { CustomerformComponent } from './customerform.component';
import { from } from 'rxjs';

describe('CustomerformComponent', () => {
  let component: CustomerformComponent;
  let fixture: ComponentFixture<CustomerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
