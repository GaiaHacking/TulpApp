import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'tulpapp-tulpa-card',
  templateUrl: './tulpapp-tulpa-card.component.html',
  styleUrls: ['./tulpapp-tulpa-card.component.scss'],
})
export class TulpappTulpaCardComponent{

  //Tulpa things
  @Input() name: string;
  @Input() type: string;
  @Input() color: string;
  @Input() image: string;

  //Accordion things
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  public isOpen: boolean = false;


  constructor(public navCtrl: NavController, public renderer: Renderer2) {
  }

  //expand/contract
  public toggleAccordion(): void{
    this.isOpen = !this.isOpen;

    //change the bottom border radius of the header. Chunky on expand, round on contract
    if(this.isOpen === true){
      document.getElementById("cardHeader").style.borderBottomLeftRadius = "0px";
      document.getElementById("cardHeader").style.borderBottomRightRadius = "0px";
    } else {
      document.getElementById("cardHeader").style.borderBottomLeftRadius = "10px";
      document.getElementById("cardHeader").style.borderBottomRightRadius = "10px";
    }
  }

  //give Output to the outside
  public broadcastName(name: string): void{
    this.change.emit(name);
  }
}
