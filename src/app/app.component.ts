import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isMenuOpened: boolean = false;
  selectedSubName : string;
  constructor() {}

  openMenu() {
    this.isMenuOpened = true;
  }
  closeMenu() {
    this.isMenuOpened = false;
  }

  selectedSubject(subName : string){
     this.isMenuOpened = false;
     this.selectedSubName = subName;
  }
}
