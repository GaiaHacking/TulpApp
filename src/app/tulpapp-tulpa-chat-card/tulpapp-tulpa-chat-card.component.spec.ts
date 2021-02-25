import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TulpappTulpaChatCardComponent } from './tulpapp-tulpa-chat-card.component';

describe('TulpappTulpaChatCardComponent', () => {
  let component: TulpappTulpaChatCardComponent;
  let fixture: ComponentFixture<TulpappTulpaChatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulpappTulpaChatCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TulpappTulpaChatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
