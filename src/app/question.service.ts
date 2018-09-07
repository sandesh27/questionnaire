import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './components/index/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  uri = 'http://localhost:4000/questions';

  constructor(private http: HttpClient) { }

  addQuestion(v_name, q_text, q_title, a_list) {
    const obj = {
      v_name: v_name,
      q_text: q_text,
      q_title: q_title,
      a_list: a_list
    };
    console.log('Add question::::::::::::::::::: ', obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getQuestions() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editQuestion(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateQuestion(v_name, q_text, q_title, a_list, id) {

    const obj = {
      v_name: v_name,
      q_text: q_text,
      q_title: q_title,
      a_list: a_list
    };
    // console.log('Edit question: ', obj);
    // console.log('Edit question::::::::::::::::::: ', obj);
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteQuestion(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
