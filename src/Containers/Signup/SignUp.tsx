import React from 'react';
import InputField from '../../Components/InputField/InputField';
import './SignUp.scss';
import * as yup from 'yup';
import {Form, Formik} from 'formik'
import fire from '../../Config/Config';
import Axios from 'axios';
interface Props {

}

const validationschema=yup.object().shape({
email:yup.string().email("email is invalid").required("email is required"),
password:yup.string().required("password is required")
});

const SignUp: React.FunctionComponent<Props> = (Props) => {
    return (
        <div>
            <div className="InputFieldContainer">
                <Formik initialValues= {{
                    email:"",
                    password:"",
                    name:"",
                    phonenumber:""
                }}  
                onSubmit={(values)=>{

                    const data={
                        name:values['name'],
                        email:values["email"],
                        phonenumber:values["phonenumber"] 
                     };
                     
                    fire.auth().createUserWithEmailAndPassword(values["email"],values["password"]).then(res=>{
                        console.log("then block");
                        console.log(res);
                        
                         fire.auth().currentUser?.getIdToken().then(token=>{

                            console.log(token);
                            Axios.post("https://examportalreactapp.firebaseio.com/Users.json?auth="+token,
                            data ,
                            {
                                headers:{
                                    "Content-type":"application/json",
                                }
                              },
                            ).then(res=>{
                                console.log("axios response");
                                console.log(res);
                            }).catch(e=>{
                                console.log("axios error");
                                console.log(e);
                            });  
                         });
                                                 
                    }).catch(e=>{
                        console.log("error block");
                        console.log(e);
                    });
                }}

                validationSchema={validationschema}
                >
                    {
                        ({})=>{
                            return (
                                <Form>
                                    <InputField helpertext="name" type="text" name="name" label="FullName" ></InputField>
                                    <InputField helpertext="phonenumber" type="tel" name="phonenumber" label="phonenumber" ></InputField>
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

export default SignUp;