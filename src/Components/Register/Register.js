import * as Yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import axios  from "axios";
import "./Register.css";
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";



function Register(){

    const url="http://localhost:9190/api/v1/customer/register"

    const [errorData, setErrorData] = useState("");

    const navigate = useNavigate();

    const registerSchema= Yup.object().shape({
        name : Yup.string().required("Name cannot be empty"),
        email : Yup.string().email("Must be a valid email").required("Email cannot be empty"),
        password : Yup.string().required("Password cannot be empty").min(8, "passwsord weak").max(16, "password too long")
    });


    function submit(values){
       axios.post(url,{
        name : values.name,
        email : values.email,
        password : values.password,
        cart:{

        }
       }).then(res=>{
        alert("Registration Success");
        // console.log(res);
        //  window.location.href = 'http://localhost:3000/Home/'+res.data.name
        navigate('/Home/'+res.data.name)
        // navigate('/');
       }).catch(e=>{
       console.log(e);
       setErrorData(e.response.data.errorMessage)
       })
    }

return(
    <div className="h-custom">
    <section  className="vh-100" >
    <div className="top-right">
        <h1 className="header-font">Sign up</h1>
        <hr></hr>
    <Formik
    initialValues={{
        "name":"",
        "email" :"",
        "password":""
    }}
    onSubmit={(e)=>submit(e)}
    validationSchema={registerSchema}
    >
        {()=>(
            <Form>
                <div>
                    <label className="fw-bold">Enter Your Name</label>
                    <Field type="text" name="name" id="name" className="form-input"></Field>
                </div>
                <div>
                    <label className="fw-bold">Enter Your Email</label>
                    <Field type="email" name="email" id="email" className="form-input"></Field>
                    <div className="error-wrapper">
                    <ErrorMessage name="email"/>
                    </div>
                </div>
                <div>
                    <label className="fw-bold">Enter the Password</label>
                    <Field type="password" name="password" id="password" className="form-input"></Field>
                    <div className="error-wrapper">
                    <ErrorMessage name="password"/>
                    </div>
                </div>
                <input type="submit" value="Register" className="register-button" />
                <p className="small fw-bold mt-4 pt-1 mb-0">Already have an account? <Link to='/Login'>Sign in</Link></p>
            </Form>
        )

        }

    </Formik>
    </div>
    </section>
    </div>
)

}

export default Register;