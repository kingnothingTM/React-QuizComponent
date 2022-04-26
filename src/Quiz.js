import React, {Component} from 'react';
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'


let quizData = require('./quiz_data.json')

class Quiz extends Component{

    constructor(props)
    {
        super(props);
        
        this.state = {
            quiz_position : 0
        }
    }
    showNextQuestion(){
        var oldState = this.state;
        console.log("Old state " + oldState.quiz_position);
        oldState.quiz_position ++;
        this.setState(oldState);   
        console.log("New state " + this.state.quiz_position);
    }
    render()
    {
        const isQuizEnd = (this.state.quiz_position !== 0) && (quizData.quiz_questions.length === this.state.quiz_position );
        console.log("isQuizEnd " + isQuizEnd);
        return (<div>
            <div className='QuizQuestion'>
                 {
                    isQuizEnd ? <QuizEnd /> : <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position]}/>
                 }
                </div>
            </div>);
    }
}

export default Quiz;