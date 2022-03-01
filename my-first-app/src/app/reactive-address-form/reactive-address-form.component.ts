import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
myform:any;

  ngOnInit(): void {
    this.myform=this.fb.group(
      {
        email:['',[Validators.required]],
        fname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
        lname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
        phone:['',[Validators.required]],
        state:['',[Validators.required]],
        location:['',[Validators.required]],
        age:['',[Validators.required,Validators.min(15)]],
        from:['',[Validators.required]],
        to:['',[Validators.required]]

      }
    );
  }
  day1:any;
  day2:any;
 Difference_In_Time:any;
 Difference_In_Days:any;
  onsubmit(formvalue:any)
  {
    console.log(formvalue.value.email);
    console.log(formvalue.value.fname);
    console.log(formvalue.value.lname);
    console.log(formvalue.value.phone);
    console.log(formvalue.value.state);
    console.log(formvalue.value.location);
    console.log(formvalue.value.age);
    console.log(formvalue.value.from);
    console.log(formvalue.value.to);
    this.day1=new Date(formvalue.value.from);
    this.day2=new Date(formvalue.value.to);
    this.Difference_In_Time = this.day2.getTime() - this.day1.getTime();
    this.Difference_In_Days = this.Difference_In_Time / (1000 * 3600 * 24);
    console.log(this.Difference_In_Days);
  }

}
