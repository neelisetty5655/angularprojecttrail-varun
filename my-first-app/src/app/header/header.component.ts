import { Component, OnInit, Input } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public co:InformationService) { }

  ngOnInit(): void {
  }
@Input() recived:any;

}
