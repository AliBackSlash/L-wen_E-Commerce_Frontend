import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../Core/Interfaces/APIInterfaces/ViewDataInterfaces/iproduct';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  BestSaleProducts = Array<IProduct>();

  ngOnInit(): void {
    this.BestSaleProducts = [
      {
        productId: '1',
        productName: 'هودي لوفن',
        productDescription:
          'استمتع بالراحة القصوى مع هودي لوفن الكلاسيكي هودي عصري مريح مصنوع من القطن الطبيعي',
        productPrice: 650,
        productImage: 'image.png',
        productCategory: 'ملابس',
        productRatingPercent: Math.floor(77 / 5),
        productReviewsCount: 120,
        productColors: ['#131212ff', '#FFFFFF', '#fc0fe9ff'],
      },
      {
        productId: '2',

        productName: 'هودي لوفن',
        productDescription:
          'استمتع بالراحة القصوى مع هودي لوفن الكلاسيكي هودي عصري مريح مصنوع من القطن الطبيعي',
        productPrice: 650,
        productImage: 'image2.png',
        productCategory: 'ملابس',
        productRatingPercent: Math.floor(99 / 5),
        productReviewsCount: 170,
        productColors: ['#131212ff', '#FFFFFF', '#fc0fe9ff'],
      },
      {
        productId: '3',

        productName: 'هودي لوفن',
        productDescription:
          'استمتع بالراحة القصوى مع هودي لوفن الكلاسيكي هودي عصري مريح مصنوع من القطن الطبيعي',
        productPrice: 650,
        productImage: 'image3.png',
        productCategory: 'ملابس',
        productRatingPercent: Math.floor(55 / 5),
        productReviewsCount: 110,
        productColors: ['#131212ff', '#FFFFFF', '#fc0fe9ff'],
      },
      {
        productId: '4',

        productName: 'هودي لوفن',
        productDescription:
          'استمتع بالراحة القصوى مع هودي لوفن الكلاسيكي هودي عصري مريح مصنوع من القطن الطبيعي',
        productPrice: 650,
        productImage: 'image4.png',
        productCategory: 'ملابس',
        productRatingPercent: Math.floor(100 / 5),
        productReviewsCount: 150,
        productColors: ['#131212ff', '#FFFFFF', '#fc0fe9ff'],
      },
    ];
  }
}
