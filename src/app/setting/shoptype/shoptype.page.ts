import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shoptype",
  templateUrl: "./shoptype.page.html",
  styleUrls: ["./shoptype.page.scss"],
})
export class ShoptypePage implements OnInit {
  shoptypes: Array<any> = [
    {
      description: "ร้านหมูกระทะ",
      image: "../../../assets/pockpod.jpg",
      total: 41,
    },
    {
      description: "ร้านกาแฟ",
      image: "../../../assets/cafe.jpeg",
      total: 41,
    },
    {
      description: "ร้านนวดแอนด์สปา",
      image: "../../../assets/spa.png",
      total: 41,
    },
    {
      description: "ร้านเสริมสวย",
      image: "../../../assets/salon.jpeg",
      total: 41,
    },
    {
      description: "ฟิตเนส",
      image: "../../../assets/fitness.jpg",
      total: 41,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
