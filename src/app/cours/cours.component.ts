import { Component,Input,Output ,EventEmitter} from '@angular/core';
import {cours} from '../model/cours'
import {types} from '../model/types'
import { style } from '@angular/animations';


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.scss'
})
export class CoursComponent {
  @Input()
  courses:cours[]=[
    {name:"english",hours:20,type:types.fromHome,date:'05'},
    {name:"math",hours:80,type:types.frontal,date:'09'},
    {name:"history",hours:65,type:types.maabada,date:'05'},
  ]
  isCourseInList:boolean=false;

  @Input()
  coursData: cours = {name:"",hours:0,type:types.fromHome,date:''};

  @Input()
  num: number = 0;
  
  @Input()
  myCourseList: Array<cours> =[];
  

  @Output()
  courseSelected: EventEmitter<{ num:number,name: string, hours: number, type:types ,date:string}> = new EventEmitter<{ num:number ,name: string,  hours: number, type:types ,date:string }>();
  @Output()
  courseDeleted:EventEmitter<string> = new EventEmitter<string>();

  enterToTheCours(){
    alert("you enter to the cours!");
  }
  getTypes(){
    return types;
  }

  selectCourse(){
    this.courseSelected.emit({num:this.num,name:this.coursData.name, hours:this.coursData.hours, type:this.coursData.type,date:this.coursData.date});
    this.isCourseInList=true;
  }

  deleteCourse(courseName: string){
    this.courseDeleted.emit(courseName);
     this.isCourseInList=false;
  }

  
}
