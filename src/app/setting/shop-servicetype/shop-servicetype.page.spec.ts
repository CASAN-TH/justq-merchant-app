import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopServicetypePage } from './shop-servicetype.page';

describe('ShopServicetypePage', () => {
  let component: ShopServicetypePage;
  let fixture: ComponentFixture<ShopServicetypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopServicetypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopServicetypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
