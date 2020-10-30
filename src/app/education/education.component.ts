import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  skills = ['HTML/CSS', 'JAVASCRIPT/JQUERY', 'GIT', 'RESPONSIVE DESIGN', 'NODE.JS BASICS',
  'SQL(MySQL)', 'REACT/REDUX BASICS', 'GOOD COMUNICATION', 'PROBLEM SOLVING',
  'ABILITY TO WORK WITH A HUGE AMOUNT INFORMATION', 'MULTITASKING', 'ADAPTABILITY'];
  constructor() { }

  ngOnInit(): void {
  }

}
