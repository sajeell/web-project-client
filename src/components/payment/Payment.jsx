import { Link } from 'react-router-dom';
import './Payment.scss';

export default function Payment() {
    return (
        <div className='payment-wrapper'>
            <div className='payment-left'>
                <div className='payment-intro'>
                    <div className='breadcrumb'>
                        <Link to='/'>
                            <span className='breadcrumb-item'>Dashboard</span>
                        </Link>
                        <span className='breadcrumb-item'>→</span>
                        <span className='breadcrumb-item'>Course Details</span>
                        <span className='breadcrumb-item'>→</span>
                        <span className='breadcrumb-item'>Payment</span>
                    </div>
                    <div className='payment-title'>
                        <h4>Checkout</h4>
                    </div>
                    <div className='payment-heading'>
                        <span>PERSONAL DETAILS</span>
                    </div>
                    <div className='border-div'></div>
                </div>
                <div className='payment-personal-details'>
                    <div className='payment-input-row'>
                        <div className='payment-input-title'>
                            <span>FULL NAME</span>
                        </div>
                        <div className='payment-input'>
                            <input type='text' name='name' id='name' />
                        </div>
                    </div>
                    <div className='payment-input-row'>
                        <div className='payment-input-title'>
                            <span>EMAIL ADDRESS</span>
                        </div>
                        <div className='payment-input'>
                            <input type='email' name='email' id='email' />
                        </div>
                    </div>
                </div>
                <div className='payment-heading'>
                    <span>PAYMENT METHOD</span>
                </div>
                <div className='border-div'></div>
                <div className='payment-method'>
                    <div className='payment-method-row'>
                        <div className='payment-method-row-left'>
                            <input type='radio' name='payment-method' id='debit' />
                        </div>
                        <div className='payment-method-row-right'>
                            <div className='payment-method-row-right-title'>
                                <span>
                                    Debit/Credit Card
                                </span>
                            </div>
                            <div className='payment-method-row-right-description'>
                                <span>
                                    Safe and quick payment using world's leading payment system
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="payment-right">
                <div className='payment-heading'>
                    <span>BILLING DETAILS</span>
                </div>
                <div className='border-div'></div>
                <div className='payment-input-row'>
                    <div className='payment-input-title'>
                        <span>NAME ON CARD</span>
                    </div>
                    <div className='payment-input'>
                        <input type='email' name='email' id='email' />
                    </div>
                </div>
                <div className='payment-input-row'>
                    <div className='payment-input-title'>
                        <span>CARD NUMBER</span>
                    </div>
                    <div className='payment-input'>
                        <input type='email' name='email' id='email' />
                    </div>
                </div>
                <div className="payment-input-row-short-wrapper">
                    <div className='payment-input-row-short'>
                        <div className='payment-input-title'>
                            <span>VALID THROUGH</span>
                        </div>
                        <div className='payment-input'>
                            <input type='text' name='valid-thru' id='valid-thru' />
                        </div>
                    </div>
                    <div className='payment-input-row-short'>
                        <div className='payment-input-title'>
                            <span>CVC</span>
                        </div>
                        <div className='payment-input'>
                            <input type='text' name='cvc' id='cvc' />
                        </div>
                    </div>
                </div>
                <div className="payment-button">
                    <input type="submit" value="PAY NOW" />
                </div>
            </div>
        </div>
    );
}
