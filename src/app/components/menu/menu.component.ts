import { Component, OnInit } from '@angular/core';
import { Menu } from "../../models/menu.model";
import { MenuService } from "../../services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menus: Menu[];
  public menuDetail: any;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenuAll();
  }

  private getMenuAll(): void {
    this.menuService.getMenuAll().subscribe(
      (res) => this.menus = res,
      (err) => alert(err),
      () => console.log("success")
    );
  }

  private goDetail(id) {
    this.menuService.getMenu(id).subscribe(
      (res) => this.menuDetail = res,
      (err) => alert(err),
      () => console.log("success")
    );
  }

}
