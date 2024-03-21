import { Component, Output } from '@angular/core';
import { cours } from '../model/cours';
import { types } from '../model/types'
import { CourseService } from '../Services/course.service';
@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.scss'
})
export class NewCourseComponent {
  constructor(private courseSRV: CourseService) { }
  courseList: cours[] = this.courseSRV.courses;
myCourseList:cours[]=this.courseSRV.myCourseList;
  addCourse(Cours: cours) {
    this.courseSRV.courses.push(Cours);
  }
   delete() {
    this.courseSRV.myCourseList.splice(0,this.myCourseList.length);
    this.courseSRV.isCourseInList = false;
  }

}
