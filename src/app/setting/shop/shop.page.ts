import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.page.html",
  styleUrls: ["./shop.page.scss"],
})
export class ShopPage implements OnInit {
  shop: any = {
    name: "",
    hours: [
      {
        seq: 1,
        dayofweek: "Monday",
        times: [],
      },
      {
        seq: 2,
        dayofweek: "Tueday",
        times: [],
      },
      {
        seq: 3,
        dayofweek: "Monday",
        times: [],
      },
      {
        seq: 4,
        dayofweek: "Monday",
        times: [],
      },
      {
        seq: 5,
        dayofweek: "Monday",
        times: [],
      },
      {
        seq: 6,
        dayofweek: "Monday",
        times: [],
      },
      {
        seq: 7,
        dayofweek: "Monday",
        times: [],
      },
    ],
  };
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout().subscribe((res: any) => {
      console.log(res);
    });
  }
}
