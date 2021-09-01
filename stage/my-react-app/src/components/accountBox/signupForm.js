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
import M from "materialize-css";
import {
    useState
} from "react";
import { useHistory } from "react-router-dom";

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);
    const history = useHistory()
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData = () => {

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "invalid email", classes: "#00796b" })
            return

        }



        fetch("/customer/access/signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullname,

                    email,
                    password

                })
            }).then(res => res.json())
            .then(data => {
                console.logo(data)
                if (data.error) {
                    M.toast({
                        html: data.error,
                        classes: "#26a69a"
                    })
                } else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    M.toast({ html: "signed success", classes: "#00796b" })
                    history.push('/')
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
        Input placeholder = "Full Name"
        value = { fullname }
        onChange = {
            (e) => setFullname(e.target.value)
        }
        / > <
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
        } > Signup < /SubmitButton> <
        Marginer direction = "vertical"
        margin = { 5 }
        /> <
        MutedLink href = "#" >
        Already have an account ?
        <
        BoldLink href = "#"
        onClick = { switchToSignin } >
        sign in
        <
        /BoldLink> < /
        MutedLink > <
        /BoxContainer>
    );
}