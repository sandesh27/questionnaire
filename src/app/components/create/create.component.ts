import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private questionservice: QuestionService, private fb: FormBuilder) {
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

  addQuestion(v_name, q_text, q_title, a_list) {
    this.questionservice.addQuestion(v_name, q_text, q_title, a_list);
  }

  ngOnInit() {
  }

}
