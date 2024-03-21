import { Component, ElementRef, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { cours } from '../model/cours';
import { types } from '../model/types';
import {NgForm } from '@angular/forms';
import { CourseService } from '../Services/course.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})

export class AddCourseComponent implements OnInit {
constructor(private courseSRV: CourseService){
  
}
  coursData: cours = { name: "", hours: 0, type: types.fromHome, date: "" };
  num: number = 0;
  formLoaded: boolean = false;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.formLoaded = true;
  }
  @ViewChild('f') f: NgForm | null = null;
  validateField(fieldName: string) {
    if (this.formLoaded) {
      const fieldValue = this.f!.form.controls[fieldName].value;
      if (!fieldValue) {
        return 'invalid';
      }
    }
    return '';
  }

  save() {
    if (this.f!.valid) {
      this.courseSRV.courses.push(this.coursData);
      alert('course save')
      this.coursData = { name: "", hours: 0, type: types.fromHome, date: "" };

    }
  }
}

