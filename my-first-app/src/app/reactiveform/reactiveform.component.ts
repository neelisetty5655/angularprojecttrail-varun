import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  myform:any;
  ngOnInit(): void {
// this.myform=new FormGroup({
  
// email:new FormControl(''),
// message:new FormControl('')
// });
this.myform=this.fb.group(
  {
    email:['',[Validators.required]],
    message:['',[Validators.required,Validators.minLength(15)]]
  }
);
  }
onsubmit(form:FormGroup)
{
  console.log('valid?',form.valid);
  console.log(form.value.email);
  console.log(form.value.message);
}
}
