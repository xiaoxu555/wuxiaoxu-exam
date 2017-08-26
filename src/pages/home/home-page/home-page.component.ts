import { Component, OnInit } from '@angular/core';

interface Product {
  index: number,
  productName: string,
  number: number,
  price: number,
  born?: string,
  random: number,

}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: Array<Product>;
  firstLine: string;
  constructor() {
    this.getProducts()
  }

  getProducts() {
    this.products = [

      { index: 1, productName: "desk", number: 5, price: 30, born: "shenyang", random: Math.random() },
      { index: 2, productName: "chair", number: 10, price: 20, random: Math.random() },
      { index: 3, productName: "computer", number: 2, price: 5000, random: Math.random() },
      { index: 4, productName: "water", number: 2, price: 4, random: Math.random() },
      { index: 5, productName: "shoe", number: 1, price: 300, born: "dalian", random: Math.random() },
    ]
  
  }

  addProduct() {
    let newProduct = {
      index: this.products.length + 1,
      productName: "suger",
      number: 100,
      price: 10,
      random: Math.random()
    }
    this.products.push(newProduct)
  }

  asc() {

    this.products.sort((a, b) => {
      if (a.price < b.price) {
        return 1
      } else {
        return -1
      }
    })
  }


  desc() {
    // 逆序排列 
    this.products.sort((a, b) => {
      if (a.price > b.price) {
        return 1
      } else {
        return -1
      }
    })

  }

  random() {
    this.products.sort((a, b) => {
      if (a.random > b.random) {
        return 1
      } else {
        return -1
      }
    })

  }
  ngOnInit() {
  }

}
