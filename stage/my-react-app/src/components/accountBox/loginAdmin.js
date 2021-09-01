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



export function SigninAdminForm(props) {
    const { switchToSignup } = useContext(AccountContext);
    const history = useHistory()
    const { switchToSignin } = useContext(AccountContext);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData = () => {

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "invalid email", classes: "#00796b" })
            return

        }



        fetch("/admin/signin", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

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
                    history.push('/suivie')
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
        Input type = "text"
        placeholder = "email"
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

        / > < /
        FormContainer > <
        MutedLink href = "#" > Forgot Password ? < /MutedLink> <
        Marginer direction = "vertical"
        margin = "1em" / >
        <
        SubmitButton onClick = {
            () => PostData()
        } >
        Login

        <
        /SubmitButton> <
        Marginer direction = "vertical"
        margin = { 5 }
        /> <
        MutedLink href = "#" >
        Dont have an Account ?
        <
        BoldLink href = "#"
        onClick = { switchToSignup } >
        sign up <
        /BoldLink> < /
        MutedLink > <
        /BoxContainer>
    );
}