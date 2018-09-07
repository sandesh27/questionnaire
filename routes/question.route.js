// question.route.js

const express = require('express');
const app = express();
const questionRoutes = express.Router();

// Require Question model in our routes module
let Question = require('../models/Question');

// Defined store route
questionRoutes.route('/add').post(function (req, res) {
  let question = new Question(req.body);
  question.save()
    .then(game => {
    res.status(200).json({'question': 'Question in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
questionRoutes.route('/').get(function (req, res) {
  Question.find(function (err, questions){
    if(err){
      console.log(err);
    }
    else {
      res.json(questions);
    }
  });
});

// Defined edit route
questionRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  //console.log('id::::::::', id);
  Question.findById(id, function (err, question){
      //console.log('err::::::::', err);
      //console.log('question::::::::', question);
      res.json(question);
  });
});

//  Defined update route
questionRoutes.route('/update/:id').post(function (req, res) {
  Question.findById(req.params.id, function(err, question) {
    //console.log('req.body::::::::', req.body);
    if (!question)
      return next(new Error('Could not load Document'));
    else {
        question.v_name = req.body.v_name;
        question.q_text = req.body.q_text;
        question.q_title = req.body.q_title;
        question.a_list = req.body.a_list;

        question.save().then(question => {
          //console.log('question1111::::::::', question);
          res.json('Update complete');
      })
      .catch(err => {
            //console.log('err222::::::::', err);
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
questionRoutes.route('/delete/:id').get(function (req, res) {
  Question.findByIdAndRemove({_id: req.params.id}, function(err, question){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = questionRoutes;
