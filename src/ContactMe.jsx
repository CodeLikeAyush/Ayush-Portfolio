import React from 'react'
import './index.css';
import CommonTemplate from './CommonTemplate';
// import contact from '../src/static/images/contact.jpg'
import contact from '../src/static/images/contact.png'


// function ContactMe(props) {
function ContactMe() {

    const functoScroll = (e) => {
        e.preventDefault();
        window.scrollTo(0, 650);
    }
    return (

        <>
            <CommonTemplate H1="Your Opinion📌" H2="Is Valued." name="" para="So just scroll down and fill-up the form." imgSrc={contact} btnText="Scroll Down" link="" targt="" scrollFunc={functoScroll} className="my-5" />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1
                className="text-center text-primary text-light">

                Contact Me</h1>

            <div class="container-fluid mx-auto rounded py-5 px-5 form-div" id="top" >
                <div class="row">
                    <div class="col-md-10 col-sm-10 col-xs-20">
                        <form action="https://formsubmit.co/achkon@zohomail.in" method="POST">
                            <div class="form-group ">
                                <label class="control-label requiredField text" for="name">
                                    Name
                                    <span class="asteriskField">
                                        *
                                    </span>
                                </label>
                                <input required class="form-control" id="name" name="name" placeholder="Your Name" type="text" />
                            </div>
                            <br />

                            <div class="form-group ">
                                <label class="control-label requiredField text" for="email">
                                    Email
                                    <span class="asteriskField">
                                        *
                                    </span>
                                </label>
                                <input required class="form-control" id="email" name="email" placeholder="Your Email" type="email" />
                            </div>
                            <br />

                            <div class="form-group ">
                                <label class="control-label requiredField text" for="message">
                                    Message
                                    <span class="asteriskField">
                                        *
                                    </span>
                                </label>
                                <textarea required class="form-control" cols="40" id="message" name="message" placeholder="Write if any query or any feedback you want to give." rows="5"></textarea>
                            </div>
                            <br />

                            <div class="form-group ">
                                <label class="control-label text" for="role">
                                    What describes you best?
                                </label>
                                <select class="select form-control" id="select" name="role">
                                    <option value="not selected">
                                        select from dropdown
                                    </option>
                                    <option value="student">
                                        student
                                    </option>
                                    <option value="developer">
                                        developer
                                    </option>
                                    <option value="other">
                                        others
                                    </option>
                                </select>
                            </div>
                            {/* <div class="form-group ">
                                <label class="control-label text">
                                    Check all that apply
                                </label>
                                <div class=" ">
                                    <div class="checkbox">
                                        <label class="checkbox text">
                                            <input name="checkbox" type="checkbox" value="First Choice" />
                                            First Choice
                                        </label>
                                    </div>
                                </div>
                            </div> */}
                            <br />
                            <br />
                            <br />
                            {/* <hr /> */}
                            <div class="form-group">
                                <label class="control-label text">
                                    <strong>Gender:</strong>
                                </label>
                                <div class="">
                                    <div class="radio">
                                        <label class="radio text">
                                            <input name="gender" type="radio" defaultChecked value="male" />
                                            Male
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label class="radio text">
                                            <input name="gender" type="radio" value="female" />
                                            Female
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label class="radio text">
                                            <input name="gender" type="radio" value="others" />
                                            Others
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div>
                                    <button class="btn outline my-3" name="submit" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>

    )
}

export default ContactMe;

