import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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
  @Input() creationStage: string; //the stage with description, e.g. vocality, imposition, etc.
  @Input() creationStageProgress: number; //the progress in percentage, e.g. vocality - 50%. Is displayed in a progress bar

  //Accordion things
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  public isOpen: boolean = false;


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
