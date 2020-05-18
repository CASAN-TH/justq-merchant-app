import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoptypePage } from './shoptype.page';

describe('ShoptypePage', () => {
  let component: ShoptypePage;
  let fixture: ComponentFixture<ShoptypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoptypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoptypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
