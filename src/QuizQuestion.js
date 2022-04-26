import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{
    
    constructor(props){
        super(props);
        this.state = { incorrectAnswer : false };
    }

    handleClick(buttonText){
        console.log("Entered QuizQuestion:handleClick with value " + buttonText);
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler();
            this.setState({incorrectAnswer : false});
        }
        else{
            this.setState({incorrectAnswer : true});
        }   
    }

    render(){
        return(
            <main>
                { this.state.incorrectAnswer ? <p className='error'>Sorry, that is not right</p> : null }
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