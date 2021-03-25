import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tulpa-chat-page',
  templateUrl: './tulpa-chat-page.page.html',
  styleUrls: ['./tulpa-chat-page.page.scss'],
})
export class TulpaChatPagePage implements OnInit {

  tulpaID = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //We'll use that to look up in the DB
    this.tulpaID = this.route.snapshot.paramMap.get('tulpID')
  }

}
