import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TulpaChatPagePage } from './tulpa-chat-page.page';

describe('TulpaChatPagePage', () => {
  let component: TulpaChatPagePage;
  let fixture: ComponentFixture<TulpaChatPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulpaChatPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TulpaChatPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
