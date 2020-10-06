import React from 'react';
import InputField from '../../Components/InputField/InputField';
import './Login.scss';
import * as yup from 'yup';
import {Form, Formik} from 'formik'
import fire from '../../Config/Config';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
interface Props {

}

const validationschema=yup.object().shape({
email:yup.string().email("email is invalid").required("email is required"),
password:yup.string().required("password is required")
});

const Login: React.FunctionComponent<Props> = (Props) => {
    const history=useHistory();
    return (
        <div>
            <div className="InputFieldContainer">
                <Formik initialValues= {{
                    email:"",
                    password:"",
                    
                }}  
                onSubmit={(values)=>{
                    fire.auth().signInWithEmailAndPassword(values.email,values.password).then(res=>{
                        console.log(res);
                        console.log(res.user?.uid);
                        
                        fire.auth().currentUser?.getIdToken(true).then(token=>{
                            localStorage.setItem("authtoken",token);
                            history.replace('/dashboard');
                            // Axios.get("https://examportalreactapp.firebaseio.com/Users/.json?auth="+token,).then(data=>{
                            //     console.log(data);
                            // });
                        });
                        
                    }).catch(e=>{
                        console.log(e);
                    })
                    
                }}

                validationSchema={validationschema}
                >
                    {
                        ({})=>{
                            return (
                                <Form>
                                    
                                    <InputField helpertext="email" type="email" name="email" label="email" ></InputField>
                                    <InputField helpertext="password" type="password" name="password" label="password" ></InputField>
                                    <button type="submit">Submit</button>
                                    
                                </Form>
                            );
                        }
                    }
                </Formik>

            </div>

        </div>
    );
}

export default Login;