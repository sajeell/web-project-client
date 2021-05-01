
import "./SignIn.scss"

import FormBG from "../../static/images/form-bg.png"

export default function SignIn() {
    document.title = "Sign In"
    return (
        <div className="signin-wrapper">
            <div className="signin-bg-image">
                <img src={FormBG} alt="Form background" />
            </div>
            <div className="signin-form">
                <form>
                    <div className="signin-row-1">
                        <span>Sign In</span>
                    </div>
                    <div className="signin-row-2">
                        <input type="email" name="email" id="email" placeholder="Email Address" />
                    </div>
                    <div className="signin-row-3">
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>

                    <div className="signin-row-4">
                        <input type="submit" name="submit-btn" id="submit-btn" value="Sign In" />
                    </div>

                    <div className="signin-row-5">
                        <span className="signin-row-5-item">Don't have an account yet?</span>
                        <span className="signin-row-5-item">Sign Up</span>
                        <span className="signin-row-5-item">here</span>
                    </div>
                </form>
            </div>
        </div>
    )
}