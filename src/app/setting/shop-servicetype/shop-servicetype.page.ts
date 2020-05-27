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

  shoptypeForm: FormGroup;
  items: FormArray;
  shoptypeData: any;

  constructor(
    private _location: Location,
    private formBuilder: FormBuilder,
    private shopService: ShopService,
  ) { }

  ngOnInit() {
    // this.shoptypeData = [
    //   {
    //     name: ""
    //   }
    // ];
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      items: this.formBuilder.array([this.createItem()]),
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: ""
    });
  }

  addItem(): void {
    this.items = this.shoptypeForm.get('items') as FormArray;
    this.items.push(this.formBuilder.group({
      name: ""
    }));
  }

  goBack() {
    this._location.back();
  }

}
