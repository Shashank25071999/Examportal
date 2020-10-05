import { ReactComponent } from '*.svg';
import { useFormikContext } from 'formik';
import { observer } from 'mobx-react';
import React from 'react';
import './InputField.scss';
interface Props{
type:"email"|"password"|"text"|"tel";
name:string;
label:string;
helpertext:string;
}

const InputField:React.FunctionComponent<Props>=({label,name,type,helpertext})=>{
    const {values,errors,handleBlur,handleChange,touched}=useFormikContext<any>();
    return (
        <div className="InputField">
                <label className="InputField__label">
                    {label}
                </label>   
                <input name={name} type={type} 
                className="InputField__input" 
                onBlur={handleBlur} 
                onChange={handleChange} 
                value={values[name]}></input>    
                <label className="InputField__hinttext">
                    {
                       touched[name] && errors[name] ? errors[name]:helpertext
                    }
                </label>
        </div>
    );
}

export default observer(InputField);