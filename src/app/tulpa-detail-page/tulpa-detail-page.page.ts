import { Component, OnInit, NgModule } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tulpa-detail-page',
  templateUrl: './tulpa-detail-page.page.html',
  styleUrls: ['./tulpa-detail-page.page.scss'],
})
export class TulpaDetailPagePage implements OnInit {

  tulpaID = null;

  gaugeType = "semi";
  gaugeValue = 50.0;
  gaugeThickness = 75;
  gaugeSize = 300;
  gaugeColor = getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary');

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    //We'll use that to look up in the DB
    this.tulpaID = this.route.snapshot.paramMap.get('tulpID')
  }

}
