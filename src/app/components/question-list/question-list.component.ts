import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Object[];

  constructor() {
    this.questions = [
    {
      text: 'What is your name?',
      answer: 'My name is Bruno',
      hide: true
    },
    {
      text: 'What is your favorite game console?',
      answer: 'PlayStation 4',
      hide: true
    },
    {
      text: 'Where do you stay?',
      answer: 'Gulu',
      hide: true
    }
  ];
   }

  ngOnInit() {
  }

}
