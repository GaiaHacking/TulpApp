import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TulpappTulpaCardComponent } from './tulpapp-tulpa-card.component';

describe('TulpappTulpaCardComponent', () => {
  let component: TulpappTulpaCardComponent;
  let fixture: ComponentFixture<TulpappTulpaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulpappTulpaCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TulpappTulpaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
