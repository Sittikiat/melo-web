import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Menu } from "../models/menu.model";

@Injectable()
export class MenuService {

  constructor(private http: Http) { }

  public getMenuAll(): Observable<Menu[]> {
    return this.http.get("http://sittikiat.streetfood.in.th:3000/api/menu")
      .map((res: Response) => <Menu[]> res.json())
      .catch((err: any) => Observable.throw(err.json() || "Not connect to server"));
  }
  
  public getMenu(id: number): Observable<Menu[]> {
    return this.http.get(`http://sittikiat.streetfood.in.th:3000/api/menu/${id}`)
      .map((res: Response) => <Menu[]> res.json())
      .catch((err: any) => Observable.throw(err.json() || "Not connect to server"));
  }


}
