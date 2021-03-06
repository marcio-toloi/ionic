import { Component, Input } from '@angular/core';
import { Room } from '../../model/room';

/**
 * Generated class for the RoomCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'room-card',
  templateUrl: 'room-card.html'
})

export class RoomCardComponent {

  text: string;
  @Input() item: Room;
  @Input() onItemTapped: (item : any) => void = (item) => {

  };

  constructor() {
    console.log('Hello RoomCardComponent Component');
    this.text = 'Hello World';
  }

}
