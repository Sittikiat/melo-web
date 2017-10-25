import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TestPipe } from "../../pipes/test.pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private date: string = Date();
  private num: number = 3.14159;
  private currency: number = 2000;
  private data: any;
  private text: string = "sittikiat";
  private title = 100;

  constructor(private router: Router) {
    this.data = [
      { id: "123", name: "mike" },
      { id: "456", name: "john" }
    ]
  }

  ngOnInit() {
  }

  private goRestaurant(): void {
    this.router.navigate(["restaurant"]);
  }

  private goMenu(): void {
    this.router.navigate(["menu"]);
  }

}
