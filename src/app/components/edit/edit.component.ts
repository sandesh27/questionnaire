import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Question } from '../index/Question';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  question: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private questionservice: QuestionService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
        v_name: ['', Validators.required ],
        q_text: ['', Validators.required ],
        q_title: ['', Validators.required ],
        a_list: ['', Validators.required ]
         });
      }

    updateQuestion(v_name, q_text, q_title, a_list) {
      this.route.params.subscribe(params => {
          this.questionservice.updateQuestion(v_name, q_text, q_title, a_list, params['id']);
          this.router.navigate(['index']);
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.questionservice.editQuestion(params['id']).subscribe(res => {
          this.question = res;
      });
    });
  }
}
