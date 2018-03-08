import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
questions:Question[];

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
  getQuestion() {
    return this.questions;
  }

}
