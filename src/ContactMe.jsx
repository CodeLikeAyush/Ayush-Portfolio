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
                className="text-center text-primary text-dark">

                Contact Me</h1>

            <div class="container-fluid w-75 mx-auto border rounded py-5 px-5 form-div" id="top" >
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <form method="post">
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
                                <input required class="form-control" id="email" name="email" type="text" />
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
                                <label class="control-label text" for="select">
                                    What describes you best?
                                </label>
                                <select class="select form-control" id="select" name="select">
                                    <option value="First Choice">
                                        select from dropdown
                                    </option>
                                    <option value="Second Choice">
                                        student
                                    </option>
                                    <option value="Third Choice">
                                        developer
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
                                            <input name="radio" type="radio" defaultChecked value="First Choice" />
                                            Male
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label class="radio text">
                                            <input name="radio" type="radio" value="Second Choice" />
                                            Female
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label class="radio text">
                                            <input name="radio" type="radio" value="Third Choice" />
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


// import React from 'react';
// import { makeStyles } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { useForm, Controller } from 'react-hook-form';

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: theme.spacing(2),

//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             width: '300px',
//         },
//         '& .MuiButtonBase-root': {
//             margin: theme.spacing(2),
//         },
//     },
// }));

// const Form = ({ handleClose }) => {
//     const classes = useStyles();
//     const { handleSubmit, control } = useForm();

//     const onSubmit = data => {
//         console.log(data);
//     };

//     return (
//         <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
//             <Controller
//                 name="firstName"
//                 control={control}
//                 defaultValue=""
//                 render={({ field: { onChange, value }, fieldState: { error } }) => (
//                     <TextField
//                         label="First Name"
//                         variant="filled"
//                         value={value}
//                         onChange={onChange}
//                         error={!!error}
//                         helperText={error ? error.message : null}
//                     />
//                 )}
//                 rules={{ required: 'First name required' }}
//             />
//             <Controller
//                 name="lastName"
//                 control={control}
//                 defaultValue=""
//                 render={({ field: { onChange, value }, fieldState: { error } }) => (
//                     <TextField
//                         label="Last Name"
//                         variant="filled"
//                         value={value}
//                         onChange={onChange}
//                         error={!!error}
//                         helperText={error ? error.message : null}
//                     />
//                 )}
//                 rules={{ required: 'Last name required' }}
//             />
//             <Controller
//                 name="email"
//                 control={control}
//                 defaultValue=""
//                 render={({ field: { onChange, value }, fieldState: { error } }) => (
//                     <TextField
//                         label="Email"
//                         variant="filled"
//                         value={value}
//                         onChange={onChange}
//                         error={!!error}
//                         helperText={error ? error.message : null}
//                         type="email"
//                     />
//                 )}
//                 rules={{ required: 'Email required' }}
//             />
//             <Controller
//                 name="password"
//                 control={control}
//                 defaultValue=""
//                 render={({ field: { onChange, value }, fieldState: { error } }) => (
//                     <TextField
//                         label="Password"
//                         variant="filled"
//                         value={value}
//                         onChange={onChange}
//                         error={!!error}
//                         helperText={error ? error.message : null}
//                         type="password"
//                     />
//                 )}
//                 rules={{ required: 'Password required' }}
//             />
//             <div>
//                 <Button variant="contained" onClick={handleClose}>
//                     Cancel
//                 </Button>
//                 <Button type="submit" variant="contained" color="primary">
//                     Signup
//                 </Button>
//             </div>
//         </form>
//     );
// };

// export default Form;
        // <div style={{ height: "100vh" }}>
        //     {/* <h1 className="mt-5">ContactMe {props.name}</h1> */}
        //     <h1 className="mt-5">ContactMe</h1>
        // </div>

        //     <form>
        //         <div className="mb-3 ">
        //             <label for="exampleInputEmail1" className="form-label">Email address</label>
        //             <input type="email" className="form-control border-danger" id="exampleInputEmail1" aria-describedby="emailHelp" />
        //             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        //         </div>
        //         <div className="mb-3">
        //             <label for="exampleInputPassword1" className="form-label">Password</label>
        //             <input type="password" className="form-control" id="exampleInputPassword1" />
        //         </div>
        //         <div className="mb-3 form-check">
        //             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        //             <label className="form-check-label" for="exampleCheck1">Check me out</label>
        //         </div>
        //         <button type="submit" className="btn y">Submit</button>
        //     </form>