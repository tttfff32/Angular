import { Component, Output } from '@angular/core';
import { cours } from '../model/cours';
import {types} from '../model/types'
@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.scss'
})
export class NewCourseComponent {
  courses:cours[]=[
    {name:"english",hours:20,type:types.fromHome,date:'05'},
    {name:"math",hours:80,type:types.frontal,date:'09'},
    {name:"history",hours:65,type:types.maabada,date:'05'},
  ];
  
  myCourseList:Array<cours>=[];

  addCourse(cours:cours){
    this.courses.push(cours);
  }
  addCourseToList(cours:any){
    console.log('Course details received:', cours);
    this.myCourseList.push({name:cours.name,hours: cours.hours ,type:cours.type,date:cours.date});
  }
  deleteCourseFromList(coursName:string){
    this.myCourseList = this.myCourseList.filter(course => course.name !== coursName); 
  }
 
 delete(){
  this.myCourseList=[];
 }

}
