import { Component, OnInit } from '@angular/core';
import { Question } from './Question';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  questions: Question[];

  constructor(private questionservice: QuestionService) { }

  deleteQuestion(id) {
    this.questionservice.deleteQuestion(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.questionservice
      .getQuestions()
      .subscribe((data: Question[]) => {
      this.questions = data;
    });
  }
}
