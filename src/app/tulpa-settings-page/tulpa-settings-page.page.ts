import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tulpa-settings-page',
  templateUrl: './tulpa-settings-page.page.html',
  styleUrls: ['./tulpa-settings-page.page.scss'],
})
export class TulpaSettingsPagePage implements OnInit {

  tulpaID = null

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //We'll use that to look up in the DB
    this.tulpaID = this.route.snapshot.paramMap.get('tulpID')
  }

}
