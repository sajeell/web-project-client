import { Link } from "react-router-dom"
import './NormalQuiz.scss';

export default function NormalQuiz() {
    return (
        <div className='normal-quiz-wrapper'>
            <div className='quiz-intro'>
                <Link to="/">
                    <h3>EVALY</h3>
                </Link>
                <span>Normal Quiz</span>
            </div>
            <div className='normal-quiz-content'>
                <div className='normal-quiz-row'>
                    <span>Question 1/4</span>
                </div>
                <div className='normal-quiz-row'>
                    <span>
                        What is your ideal workspace?
                    </span>
                </div>
                <div className='normal-quiz-row'>
                    <div className='normal-quiz-answer'>
                        <div className='normal-quiz-answer-left'>
                            <input type='radio' name='answer' id='answer' />
                        </div>
                        <div className='normal-quiz-answer-right'>
                            <span>A place where people don't question my authority</span>
                        </div>
                    </div>
                    <div className='normal-quiz-answer'>
                        <div className='normal-quiz-answer-left'>
                            <input type='radio' name='answer' id='answer' />
                        </div>
                        <div className='normal-quiz-answer-right'>
                            <span>A place where people don't question my authority</span>
                        </div>
                    </div>
                    <div className='normal-quiz-answer'>
                        <div className='normal-quiz-answer-left'>
                            <input type='radio' name='answer' id='answer' />
                        </div>
                        <div className='normal-quiz-answer-right'>
                            <span>A place where people don't question my authority</span>
                        </div>
                    </div>
                    <div className='normal-quiz-answer'>
                        <div className='normal-quiz-answer-left'>
                            <input type='radio' name='answer' id='answer' />
                        </div>
                        <div className='normal-quiz-answer-right'>
                            <span>A place where people don't question my authority</span>
                        </div>
                    </div>
                </div>
                <div className='normal-quiz-row'>
                    <input type="submit" value="Next Question" />
                </div>
            </div>
        </div>
    );
}
