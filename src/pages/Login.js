import React,{useContext} from "react";
import AuthContext from '../context/AuthContext';

function Login() {
  const {loginUser}=useContext(AuthContext)


  return (
    <div>
      <div role="main" class="site-content">

        <div class="header-spacer"></div>
        <div class="container">
          <div class="post-content no-vc">
            <div class="woocommerce">
              <div class="container">
                <div class="woocommerce-notices-wrapper"></div>
                  <div class="et-overflow-container et-login-wrapper no_popup">
                    <div class="et-form-container">              
                      <div id="et-login-form" class="">
                        <h2 class="page-title">Log In</h2>                
                        <form onSubmit={loginUser} class="woocommerce-form woocommerce-form-login login">
                          <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide float-label">
                              <input className='input input-text' type='text' name='email' placeholder="Email Address..." required/> *
                            {/* <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value=""/> */}
                              <label for="username" class="fl-label">Username or email address&nbsp;<span class="required">*</span>
                              </label>
                          </p>
                          <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide float-label">
                            <input className='input input-text' type='password' name='password' placeholder="Password" required/>
                            {/* <input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password"/> */}
                            <label for="password" class="fl-label">Password&nbsp;<span class="required">*</span></label>
                            <span class="password-input form-row float-label"><span class="show-password-input"></span></span>
                          </p>
                          <p class="form-row form-group">
                            <label class="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme inline">
                              <input class="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever"/> <span>Remember me</span>
                            </label>
                            <span class="woocommerce-LostPassword lost_password">
                              <a href="/lost-password">Forgot your password?</a>
                            </span>
                          </p>
                          <p class="form-actions">
                            <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="0719d99fac"/>
                            <input type="hidden" name="_wp_http_referer" value="/my-account/"/>
                            <button type="submit" class="woocommerce-button button woocommerce-form-login__submit" name="login" value="Log In">Log in</button>
                          </p>                  
                          <p class="form-actions extra">Not a member?<a href="/register" class="register-link">Register</a></p>
                        </form>
                      </div> 
                      <div id="et-register-form" class="">
                        <h2 class="page-title">Register</h2>                  
                          <form method="post" class="woocommerce-form woocommerce-form-register register">
                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide float-label">
                              <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value=""/>
                              <label for="reg_email" class="fl-label">Email address&nbsp;<span class="required">*</span></label>
                            </p>                  
                            <p>A password will be sent to your email address.</p>                    
                            <div class="woocommerce-privacy-policy-text"><p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="https://gallerybangladesh.com/privacy-policy/" class="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.</p>
                            </div>
                            <p class="woocommerce-form-row form-row">
                                <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" value="56972349ac"/>
                                <input type="hidden" name="_wp_http_referer" value="/my-account/"/>
                                <button type="submit" class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="Register">Register</button>
                            </p>
                            <p class="form-actions extra">Already a member?<a href="https://gallerybangladesh.com/my-account/#et-login-wrap" class="login-link">Log In</a></p>
                            <div class="wcfmmp_become_vendor_link"><a href="https://gallerybangladesh.com/vendor-register/">Become a Vendor</a></div>
                        </form>
                    </div>
                  </div>
                </div>          
            </div>
          </div>
        </div>
	    </div>
    </div>   
    </div>   
  );
}

export default Login;