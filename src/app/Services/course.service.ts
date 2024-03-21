import { Injectable } from '@angular/core';
import { cours } from '../model/cours';
import { types } from '../model/types';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public courses:cours[]=[
    {name:"english",hours:20,type:types.fromHome,date:'05'},
    {name:"math",hours:80,type:types.frontal,date:'09'},
    {name:"history",hours:65,type:types.maabada,date:'05'},
  ];

  myCourseList: cours[]  = [];

  isCourseInList: boolean =false;

   

  

  
  


}
