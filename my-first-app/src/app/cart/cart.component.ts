import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() riceprice='';
@Input() sugarprice='';
@Input() appleprice='';
@Input() riceq=""
@Input() sugarq="";
@Input() appleq="";

total=parseInt(this.riceprice)+parseInt(this.sugarprice)+parseInt(this.appleprice);

}