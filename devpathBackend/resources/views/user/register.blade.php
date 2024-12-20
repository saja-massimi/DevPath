<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SignIn & SignUp</title>
    <link rel="stylesheet" type="text/css" href="./css/reg.css" />
    <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container">
        <div class="forms-container">


            <div class="signin-signup">
                <!-- sign in form -->
                <form action="" class="sign-in-form">
                    <h2 class="title">Sign In</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="email" id="email" name="email" placeholder="Email" required="" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="pswd" name="pswd" placeholder="Password" required="" />
                    </div>
                    <input type="submit" value="Login" class="btn solid" id="loginBtn" disabled />
                </form>






                <!-- sign up form -->
                <form action="" class="sign-up-form">

                    <h2 class="title">Sign Up</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" id="username" placeholder="Username" required />
                    </div>

                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="email" id="signup-email" placeholder="Email" required />
                    </div>

                    <!-- Email error message here -->
                    <span id="email-error-message" class="error" style="color: tomato;"></span>



                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="signup-password" placeholder="Password" required />
                    </div>

                    <!-- <ul id="password-requirements" class="password-requirements">

                        <li id="min-length" class="requirement">• At least 8 characters</li>
                        <li id="uppercase" class="requirement">• At least one uppercase letter</li>
                        <li id="lowercase" class="requirement">• At least one lowercase letter</li>
                        <li id="number" class="requirement">• At least one number</li>
                        <li id="special-char" class="requirement">• At least one special character (@$!%*?&)</li>
                    </ul> -->


                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="confirm-password" placeholder="Confirm Password" required />
                    </div>

                    <!-- Error message will appear here -->
                    <span id="error-message" class="error" style="color: tomato;"></span>


                    <div class="input-field">
                        <i class="fas fa-globe"></i>
                        <select id="country" required>
                            <option value="" disabled selected>Select your country</option>
                        </select>
                    </div>


                    <input type="submit" value="Sign Up" class="btn solid" id="signupBtn" />
                </form>
            </div>
        </div>





        <!-- Panels for switching between forms -->
        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>New here?</h3>
                    <p>Register and unlock a World of Coding Possibilities!</p>
                    <button class="btn transparent" id="sign-up-btn">Sign Up</button>
<!-- add the image here -->
@include('user.partials.registerSVG');
                </div>

            </div>
        </div>

        <script src="./js/reg.js"></script>
</body>

</html>