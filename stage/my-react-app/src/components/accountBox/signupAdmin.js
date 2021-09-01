import React, { useContext } from "react";
import { Marginer } from "../marginer";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import { AccountContext } from "./context";
import {
    useState
} from "react";
import M from "materialize-css";
import { useHistory } from "react-router";

export function SignupFormAdmin(props) {
    const history = useHistory()
    const { switchToSignin } = useContext(AccountContext);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData = () => {

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "invalid email", classes: "#00796b" })
            return

        }



        fetch("/admin/signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,

                })
            }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({
                        html: data.error,
                        classes: "#26a69a"
                    })
                } else {
                    M.toast({ html: data.message, classes: "#00796b" })
                    history.push('/admin/signin')
                }
            }).catch(err => {
                console.log(err)
            })


    }

    return ( <
        BoxContainer >
        <
        FormContainer >
        <
        Input placeholder = "Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        / > <
        Input type = "password"
        placeholder = "Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        / > <
        Input type = "password"
        placeholder = "Confirm Password" / >
        <
        /FormContainer> <
        Marginer direction = "vertical"
        margin = "1em" / >
        <
        SubmitButton onClick = {
            () => PostData()
        } >
        Signup < /SubmitButton>

        <
        Marginer direction = "vertical"
        margin = { 5 }
        />

        <
        MutedLink href = "#" >
        Already have an account ?
        <
        BoldLink href = "#"
        onClick = { switchToSignin } >
        sign in


        <
        /BoldLink>

        <
        /
        MutedLink >

        <
        /BoxContainer>
    );
}