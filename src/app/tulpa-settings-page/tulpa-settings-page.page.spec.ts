import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TulpaSettingsPagePage } from './tulpa-settings-page.page';

describe('TulpaSettingsPagePage', () => {
  let component: TulpaSettingsPagePage;
  let fixture: ComponentFixture<TulpaSettingsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulpaSettingsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TulpaSettingsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
