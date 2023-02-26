import {AfterViewInit, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {AllRoomsData, Room} from "./rooms";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit{
  rooms: AllRoomsData = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  roomList: Room[] = []
  hotelName = "Kickass Hotel"
  numberOfRooms = this.rooms.totalRooms
  hideRooms = false
  title = 'Room list'

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent

  constructor() { }

  ngAfterViewInit(): void {
      this.headerComponent.title = 'Rooms View'
    }

  ngDoCheck(): void {//checks if any changes were made
    console.log("doCheck is called")
    }

  ngOnInit(): void {
    // console.log(this.headerComponent)
    this.roomList = [
      {
        roomType: 'Presidential Suite',
        amenities: ["Big Ass TV", "Air Conditioning", "Hookers", "Cocaine"],
        price: 1500,
        photos: ["http://realcoolphotos.com/presidential"],
        checkInTime: new Date(2022, 12, 10),
        checkOutTime: new Date(2022, 12, 17),
        rating: 4.6
      },
      {
        roomType: 'Honeymoon Suite',
        amenities: ["Big Ass TV", "Air Conditioning", "Dildos", "Champagne"],
        price: 1000,
        photos: ["http://realcoolphotos.com/honeymoon"],
        checkInTime: new Date(2022, 11, 10),
        checkOutTime: new Date(2022, 11, 17),
        rating: 4.8
      },
      {
        roomType: 'Bachelor Party Suite',
        amenities: ["Big Ass TV", "Air Conditioning", "Strippers", "Bourbon"],
        price: 1200,
        photos: ["http://realcoolphotos.com/bachelor"],
        checkInTime: new Date(2022, 12, 15),
        checkOutTime: new Date(2022, 12, 17),
        rating: 4.1
      }
    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = this.title != 'Toggled room list' ? 'Toggled room list' : 'Room list'
  }

  selectRoom(room: Room) {
    console.log(room)
  }

  addRoom() {
    const room : Room ={
      roomType: 'Teenage Dream Suite',
      amenities: ["Big Ass TV", "Air Conditioning"],
      price: 500,
      photos: ["http://realcoolphotos.com/teenage"],
      checkInTime: new Date(2022, 4, 10),
      checkOutTime: new Date(2022, 5, 17),
      rating: 3.6
    }
    // this.roomList.push(room)
    this.roomList = [...this.roomList, room]

  }
}
