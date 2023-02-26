import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Room} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms : Room[] = []

  @Input() title: string = ''

  @Output() roomSelected = new EventEmitter<Room>()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  selectRoom(room: Room) {
    this.roomSelected.emit(room)
  }
}
