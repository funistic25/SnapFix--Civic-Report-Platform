import { Heading } from "../Components/SignUp/Heading"
import { SubHeading } from "../Components/SignUp/SubHeading"
import { InputBox } from "../Components/SignUp/InputBox"
import { Button } from "../Components/SignUp/Button"
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {


    // Create a react useState variable for storing the input 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className="h-screen bg-slate-300 flex justify-center items-center sm:flex justify-center items-center">
                <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/3 bg-white rounded-xl px-6 py-6 shadow-lg">
                    <Heading label="Sign Up" ></Heading>
                    <SubHeading label="Enter your information to create an account"></SubHeading>
                    <InputBox onChange = {(e) => {setFirstName(e.target.value)}} label="First Name" label2="nathan"></InputBox>
                    <InputBox onChange = {(e) => {setLastName(e.target.value)}} label="Last Name" label2="raw"></InputBox>
                    <InputBox onChange = {(e) => {setEmail(e.target.value)}} label="Email" label2="nathanraw@gmail.com"></InputBox>
                    <Button onClick = { async() => {

                        await axios.post("http://localhost/3000/api/user/signup", {
                            firstName,
                            lastName,
                            email   
                        })
                        navigate('/dashboard')
                    }
                    }label="Sign Up"></Button>
                </div>
            </div>

        </>
    )
}
