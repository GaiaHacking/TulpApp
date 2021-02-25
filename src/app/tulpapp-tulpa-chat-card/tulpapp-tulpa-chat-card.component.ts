import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tulpapp-tulpa-chat-card',
  templateUrl: './tulpapp-tulpa-chat-card.component.html',
  styleUrls: ['./tulpapp-tulpa-chat-card.component.scss'],
})
export class TulpappTulpaChatCardComponent implements OnInit {

  @Input() color: string;
  @Input() image: string;
  @Input() name: string;
  @Input() lastMessage: string;

  constructor() { }

  ngOnInit() {}

}
