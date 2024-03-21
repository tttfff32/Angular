import { Component, Input, Output, EventEmitter } from '@angular/core';
import { cours } from '../model/cours'
import { types } from '../model/types'
import { style } from '@angular/animations';
import { CourseService } from '../Services/course.service';


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.scss'
})
export class CoursComponent {
  constructor(private courseSRV: CourseService) { }

   isCourseInList: boolean =this.courseSRV.isCourseInList;

  @Input()
  coursData: cours = { name: "", hours: 0, type: types.fromHome, date: '' };

  @Input()
  num: number = 0;

  getTypes() {
    return types;
  }
  selectCourse(c: cours) {
    this.courseSRV.myCourseList.push(c);
    this.isCourseInList = true;
  }

  deleteCourse(courseName: string) {
    this.courseSRV.myCourseList.splice(this.courseSRV.myCourseList.findIndex(c => c.name === courseName), 1);
    this.isCourseInList = false;
  }


}
