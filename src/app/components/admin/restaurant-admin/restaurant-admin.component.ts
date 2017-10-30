import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-admin',
  templateUrl: './restaurant-admin.component.html',
  styleUrls: ['./restaurant-admin.component.css']
})
export class RestaurantAdminComponent implements OnInit {

  private myForm: FormGroup;
  private name: FormControl;
  private info: FormControl;
  private rate: FormControl;
  private address: FormControl;
  private img: FormControl;
  private lat: FormControl;
  private lng: FormControl;
  private restaurantCategory: FormControl;
  private menu: FormControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.name = this.fb.control(null, Validators.compose([Validators.minLength(5), Validators.required]));
    // this.rate = this.fb.control(null, Validators.required);

    this.myForm = this.fb.group({
      "name": this.name,
      "info": this.info,
      "rate": this.rate,
      "address": this.address,
      "img": this.img,
      "lat": this.lat,
      "lng": this.lng,
      "restaurantCategory": this.restaurantCategory,
      "menu": this.menu
    }); 
  }

  private submited(): void {
    console.log(this.myForm.value);
  }

}
