import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AngularDelegate, IonItem } from '@ionic/angular';

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
  @ViewChild('card') el: ElementRef<IonItem>;


  constructor() {
  }

  //expand/contract
  public toggleAccordion(): void{
    this.isOpen = !this.isOpen;
  }

  //give Output to the outside
  public broadcastName(name: string): void{
    this.change.emit(name);
  }
}
