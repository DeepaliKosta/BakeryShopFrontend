import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import logo from '../Images/logo.png';

function Login() {

    const url = "http://localhost:9190/api/v1/customer/login";

    const navigate = useNavigate();

    const loginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email cannot be empty"),
        password: Yup.string().required("Password cannot be empty").min(8, "Too weak").max(16, "Too long")
    });

    function submit(values) {
        axios.post(url, {
            email: values.email,
            password: values.password
        }).then(response => {
            // console.log(response.data)
            alert("Login sucessfully")
            // window.location.href = 'http://localhost:3000/Home/' + response.data.name;
            navigate("/Home/"+response.data.id);
        })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <div className="h-custom">
            <section className="vh-100" >
                {/* <div className="l-logo">
                <img src={logo} ></img>
                </div> */}
            
                <div className="top-right">
                    <h1 className="header-font">Sign in</h1>
                    <hr></hr>
                    <Formik
                        initialValues={
                            {
                                "email": "",
                                "password": ""
                            }
                        }
                        onSubmit={e => submit(e)}
                        validationSchema={loginSchema}
                    >
                        {() => (
                            <Form >
                                <div>
                                    <label className="fw-bold">Your Email</label>
                                    <Field type="email" name="email" id="email" className="form-input"></Field>
                                    <div className="error-wrapper">
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>
                                <div>
                                    <label className="fw-bold">Password</label>
                                    <Field type="password" name="password" id="password" className="form-input"></Field>
                                    <div className="error-wrapper">
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>
                                <input type="submit" value="Login" className="register-button"></input>
                                <p className="small fw-bold mt-4 pt-1 mb-0">Don't have an account? <Link to='/Register'
                                >Register</Link></p>
                            </Form>
                        )

                        }

                    </Formik>
                </div>
            </section>
        </div>
    )
}

export default Login;