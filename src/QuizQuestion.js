import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{
    
    buttonList = this.props.quiz_question.answer_options.map((item, index) => 
        <QuizQuestionButton key={index} clickHandler={this.handleClick.bind(this)} button_text={item} />
    );
    
    handleClick(buttonText){
        console.log("Entered QuizQuestion:handleClick with value " + buttonText);
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler();
        }   
    }

    render(){
        return(
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section className="buttons">
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map((item, index) => 
                            <QuizQuestionButton key={index} clickHandler={this.handleClick.bind(this)} button_text={item} />)
                        }
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;