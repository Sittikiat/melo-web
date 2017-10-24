import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "../../services/restaurant.service";
import { Restaurant } from "../../models/restaurant.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  private restaurants: Restaurant[];
  private restaurantDetail: any;
  private restaurantCategory: any;

  constructor(private restaurantService: RestaurantService, private activatedRoute: ActivatedRoute, private router: Router) {
    // param url
    // console.log(this.activatedRoute.snapshot.params["id"]);
  }

  ngOnInit() {
    this.getRestaurant();
    this.getRestaurantCategory();
  }

  private getRestaurant(): void {
    this.restaurantService.getRestaurantAll().subscribe(
      (res) => this.restaurants = res,
      (err) => alert(err),
      () => console.log("success")
    )
  }

  private getRestaurantCategory(): void {
    this.restaurantService.getRestaurantCategory().subscribe(
      (res) => this.restaurantCategory = res,
      (err) => alert(err),
      () => console.log("success")
    )
  }

  private goRestaurantCategoryDetail(id: number): void {
    this.restaurantService.getRestaurantCategoryDetail(id).subscribe(
      (res) => this.restaurants = res,
      (err) => alert(err),
      () => console.log("success")
    )
  }

  private goRestaurantDetail(data: any): void {
    this.restaurantDetail = data;
  }

}
