import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TulpaGalleryPagePage } from './tulpa-gallery-page.page';

describe('TulpaGalleryPagePage', () => {
  let component: TulpaGalleryPagePage;
  let fixture: ComponentFixture<TulpaGalleryPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulpaGalleryPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TulpaGalleryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
