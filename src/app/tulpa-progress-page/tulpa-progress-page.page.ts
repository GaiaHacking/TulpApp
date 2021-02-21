import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tulpa-progress-page',
  templateUrl: './tulpa-progress-page.page.html',
  styleUrls: ['./tulpa-progress-page.page.scss'],
})
export class TulpaProgressPagePage implements OnInit {

  tulpaID = null

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //We'll use that to look up in the DB
    this.tulpaID = this.route.snapshot.paramMap.get('tulpID')
  }

}
