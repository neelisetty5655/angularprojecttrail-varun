import { Component } from '@angular/core';
import { DatetimeService } from './datetime.service';
import { InformationService } from './information.service';
import { HttpDataRequestService } from './http-data-request.service';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public d: InformationService, public ht:HttpDataRequestService) {}


ngOnInit(){
  this.ht.getData().subscribe((data)=>this.show(data));
 
}
rexdata:any;

show(data:any)
{

return this.ht.getData=this.rexdata;
}
id:any;
myform:any;
lname:any;
fname:any;
email:any;
data:any;
onsubmit(){
this.data={
  "id":this.id,
    "first_name":this.lname,
    "last_name":this.fname,
    "email":this.email

}

this.ht.put(this.data).subscribe((data)=>console.log(data));
}

}



