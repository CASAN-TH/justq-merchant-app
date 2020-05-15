import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QueuesPage } from './queues.page';

describe('QueuesPage', () => {
  let component: QueuesPage;
  let fixture: ComponentFixture<QueuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QueuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
