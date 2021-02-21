import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tulpa-gallery-page',
  templateUrl: './tulpa-gallery-page.page.html',
  styleUrls: ['./tulpa-gallery-page.page.scss'],
})
export class TulpaGalleryPagePage implements OnInit {

  tulpaID = null

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //We'll use that to look up in the DB
    this.tulpaID = this.route.snapshot.paramMap.get('tulpID')
  }

}
