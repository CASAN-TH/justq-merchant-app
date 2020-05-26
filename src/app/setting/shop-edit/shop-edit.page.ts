import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.page.html',
  styleUrls: ['./shop-edit.page.scss'],
})
export class ShopEditPage implements OnInit {

  constructor(
    private _location: Location,
    
    ) { }

  ngOnInit() {
  }

  goback() {
    this._location.back();
  }

}
