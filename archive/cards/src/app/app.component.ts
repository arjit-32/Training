import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // data we will pass from parent to child
  posts = [
    {
      title: 'Amazon Pay | Pay utility bills fast & conveniently',
      links: ['#','#','#','#'],
      imageUrls: [
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/Electricity_186x116._SY116_CB646259375_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/LPG_186x116._SY116_CB646259375_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/Broadband_186x116._SY116_CB646259375_.jpg', 
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/PCrevised/DTH_186x116._SY116_CB628894454_.jpg'],
      imageCaptions: ['Electricity Bill','LPG Gas cylinder','Broadband bill', 'DTH Recharge']
    },
    
    {
      title: 'Amazon Pay | Book your travel tickets',
      links: ['#','#','#','#'],
      imageUrls: [
        'https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Flight_186x116._SY116_CB653435429_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Bus_186x116._SY116_CB653435429_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Train_186x116._SY116_CB653435429_.jpg', 
        'https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/essential_186x116._SY116_CB653435429_.jpg'],
      imageCaptions: ['Flight Tickets', 'Bus Tickets', 'Train Tickets', 'Essenbtial Travel products']
    }
  ]
}
