import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TulpaProgressPagePage } from './tulpa-progress-page.page';

describe('TulpaProgressPagePage', () => {
  let component: TulpaProgressPagePage;
  let fixture: ComponentFixture<TulpaProgressPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulpaProgressPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TulpaProgressPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
