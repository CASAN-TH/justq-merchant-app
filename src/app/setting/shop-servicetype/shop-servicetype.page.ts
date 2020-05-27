import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-servicetype',
  templateUrl: './shop-servicetype.page.html',
  styleUrls: ['./shop-servicetype.page.scss'],
})
export class ShopServicetypePage implements OnInit {


  constructor(
    private _location: Location,
    private formBuilder: FormBuilder,
    private shopService: ShopService,
  ) { }

  ngOnInit() {

  }

  goBack() {
    this._location.back();
  }

  saveSeviceType(){
    console.log("On Save ประเภทการให้บริการ");
  }

}
