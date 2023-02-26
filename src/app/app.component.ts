import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-fcc-tutorial';

  role = 'Admin'

  @ViewChild('template', {read: ViewContainerRef}) viewContainer!: ViewContainerRef

  ngAfterViewInit(): void {
    const componentRef = this.viewContainer.createComponent(RoomsComponent)
    componentRef.instance.title = 'Title from componentRef'
  }
}
