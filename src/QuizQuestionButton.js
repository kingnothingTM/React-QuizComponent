import React, {Component} from 'react';

class QuizQuestionButton extends Component{
    
    handleClick(){
        console.log("Clicked on button with text " + this.props.button_text);
        this.props.clickHandler(this.props.button_text);
    }
    render(){
        return (<li><button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>);
    }
}

export default QuizQuestionButton;