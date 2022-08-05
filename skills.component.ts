import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  userForm:FormGroup;
  listData:any;

  constructor(private fb:FormBuilder) {
    this.listData=[];
    this.userForm=this.fb.group({
      name :['',Validators.required],
      address :['',Validators.required],
      duration :['',Validators.required],
      domain :['',Validators.required],
    })
   }
   public addItem():void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();

   }
   reset(){
    this.userForm.reset();
   }
   //removeItem(element) {
    //this.listData.forEach((value, index) => {
      //if (value == element)
        //this.listData.splice(index, 1);
    //});
  //}
  
  ngOnInit(): void {
  }

}
