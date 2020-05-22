import { Component, OnInit } from "@angular/core";
import { ShopService } from "../shop.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-shop-register",
  templateUrl: "./shop-register.page.html",
  styleUrls: ["./shop-register.page.scss"],
})
export class ShopRegisterPage implements OnInit {
  shop: any = {
    name: "",
    openhours: [
      {
        seq: 1,
        dayofweek: "จันทร์",
        isopen: true,
        opentime: [
          {
            start: "08:30",
            end: "18:00",
          },
        ],
      },
      {
        seq: 2,
        dayofweek: "อังคาร",
        isopen: true,
        opentime: [
          {
            start: "08:30",
            end: "18:00",
          },
        ],
      },
      {
        seq: 3,
        dayofweek: "พุธ",
        isopen: true,
        opentime: [
          {
            start: "08:30",
            end: "18:00",
          },
        ],
      },
      {
        seq: 4,
        dayofweek: "พฤหัสบดี",
        isopen: true,
        opentime: [
          {
            start: "08:30",
            end: "18:00",
          },
        ],
      },
      {
        seq: 5,
        dayofweek: "ศุกร์",
        isopen: true,
        opentime: [
          {
            start: "08:30",
            end: "18:00",
          },
        ],
      },
      {
        seq: 6,
        dayofweek: "เสาร์",
        isopen: true,
        opentime: [
          {
            start: "08:30",
            end: "18:00",
          },
        ],
      },
      {
        seq: 7,
        dayofweek: "อาทิตย์",
        isopen: true,
        opentime: [
          {
            start: "08:30",
            end: "18:00",
          },
        ],
      },
    ],
  };
  constructor(private shopService: ShopService, private router: Router) {}

  ngOnInit() {}

  createShop() {
    console.log(this.shop);
    this.shopService.createShop(this.shop).subscribe((res: any) => {
      console.log(res);
      this.router.navigateByUrl('/set-location');
    });
  }
}
