import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  private list=[{title:'dgege',subtitle:'dgegnege',price:2443.33,count:1}];
  constructor(
    private nav:NavController
  ) { }

  ngOnInit() {}
  goBack(){
   this.nav.back();
  }
}
