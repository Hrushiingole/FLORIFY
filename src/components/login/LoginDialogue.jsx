import React from 'react'

import './style.scss'








export default function LoginDialogue() {
  return (
   
    
        <div class="container">
            <div class="forms-container">
                <div class="signin-signup">
                    <form action="#" class="sign-in-form">
                        <h2 class="title">Sign in</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" class="btnl solid" />
                    </form>
                    <form action="#" class="sign-up-form">
                        <h2 class="title">Sign up</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" class="btnl" value="Sign up" />
                    </form>
                </div>
            </div>
            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                            Discover a world of possibilities! Join us and explore a vibrant
              community where ideas flourish and connections thrive.
                        </p>
                        <button class="btnl transparent" id="sign-up-btnl">
                            Sign up
                        </button>
                    </div>
                    <img  src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" class="image" alt="" />
                </div>
                <div class="panel right-panel">
                    <div class="content">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                            Thank you for being part of our community. Your presence enriches our
              shared experiences. Let's continue this journey together!
                        </p>
                        <button class="btnl transparent" id="sign-in-btnl">
                            Sign in
                        </button>
                    </div>
                    <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"  class="image" alt="" />
                </div>
            </div>
        </div>
        
    
  )
}
