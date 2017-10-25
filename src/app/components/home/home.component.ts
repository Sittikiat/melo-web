import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TestPipe } from "../../pipes/test.pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) {}

  ngOnInit() {
  }

  private goRestaurant(): void {
    this.router.navigate(["restaurant"]);
  }

  private goMenu(): void {
    this.router.navigate(["menu"]);
  }

}
