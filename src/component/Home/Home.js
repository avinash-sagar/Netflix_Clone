import React, { useEffect, useRef } from 'react'
import "./Home.css"
import { Formik } from "formik";
export const Home = ({ MyRef }) => {
    const inputRef = useRef(null)

    useEffect(() => {
        MyRef(inputRef)
    }, [inputRef])

    return (
        <div style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8) ),
            url("https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
            backgroundPosition: 'center center',
            height: '100vh',
            fontSize: '50px',
            backgroundRepeat: 'no-repeat',
        }}  >

            {console.log(localStorage.getItem('email'))}
            <div className='details_container' >
                <div className='text_container' >
                    <h3>Ultimited movies, TV shows and more.</h3>
                    <h5>Watch anywhare, Cancel anytime.</h5>
                    <h6>Ready to watch? Enter your email to create or restart your membership</h6>
                </div>
                <div>
                    <Formik
                        initialValues={{ email: "" }}
                        onSubmit={async values => {
                            localStorage.setItem('email', JSON.stringify(values))
                            console.log(values)
                        }}
                        validate={values => {
                            let errors = {}
                            if (!values.email) {
                                errors.email = "Please enter a valid email"
                            }
                            return errors
                        }}
                    >
                        {props => {
                            const {
                                values,
                                touched,
                                errors,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            } = props;
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            ref={inputRef}
                                            id="email"
                                            placeholder="Email address"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={"text-input"}
                                        />
                                        <button
                                            onClick={() => {
                                                if (values.email.length > 5) {
                                                    window.location.href = '/movies'
                                                }
                                            }}
                                            className='submit_btn'
                                            type="submit"
                                            disabled={isSubmitting}>
                                            {"Get Started >"}
                                        </button>
                                    </div>
                                    {errors.email && touched.email &&
                                        (<div className="input-feedback">{errors.email}</div>)
                                    }
                                </form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
