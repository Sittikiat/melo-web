import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Restaurant } from "../models/restaurant.model";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  public getRestaurantAll(): Observable<Restaurant[]> {
    return this.http.get("http://sittikiat.streetfood.in.th:3000/api/restaurant")
      .map((res: Response) => <Restaurant[]> res.json())
      .catch((err: any) => Observable.throw(err.json() || "Not connect to server"));
  }

  public getRestaurantCategoryDetail(id: number): Observable<Restaurant[]> {
    return this.http.get(`http://sittikiat.streetfood.in.th:3000/api/restaurant/${id}`)
      .map((res: Response) => <Restaurant[]> res.json())
      .catch((err: any) => Observable.throw(err.json() || "Not connect to server"));
  }

  public getRestaurantCategory(): Observable<any> {
    return this.http.get("http://sittikiat.streetfood.in.th:3000/api/restaurant_category")
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json() || "Not connect to server"));
  }

  public getRestaurantDetail(id: number): Observable<any> {
    return this.http.get(`http://sittikiat.streetfood.in.th:3000/api/restaurant_detail/${id}`)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json() || "Not connect to server"));
  }


}
