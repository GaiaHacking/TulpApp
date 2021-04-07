import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tulpa-chat-page',
  templateUrl: './tulpa-chat-page.page.html',
  styleUrls: ['./tulpa-chat-page.page.scss'],
})

export class TulpaChatPagePage implements OnInit {

  tulpaID = '';

  //this array will contain the messages that will be read out from the database later
  chatMessages = [
    {sender: this.tulpaID, messageContent: "I think that you should help them", date: new Date("December 9, 2019 09:30:30")},
    {sender: "Host", messageContent: "I do not think that this is so easy", date: new Date("December 9, 2019 09:31:00")}
  ];
  currentWriter = this.tulpaID; //this will be used to determine which one is writing at the moment

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //We'll use that to look up in the DB
    this.tulpaID = this.route.snapshot.paramMap.get('tulpID')
  }

}
