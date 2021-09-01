import React, { createContext, useState } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { Marginer } from "../marginer";
import M from "materialize-css";
import { useHistory } from "react-router";

import { deviceSize } from "../../components/responsive";

export const BoxContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const SubmitButton = styled.button `
  padding: 10px 10%;
  width: 100px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.03);
  }
`;

const TopContainer = styled.div `
  width: 100%;
  height: 255px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

export const FormContainer = styled.form `
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

const BackDrop = styled(motion.div)
`
  position: absolute;
  width: 160%;
  height: 550px;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Text = styled.h3 `
  font-weight: 400;
  color:#26a69a;
  font-size:15px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

const RightBottomContainer = styled.div `
  display: flex;
`;

const LeftBottomContainer = styled.div `
  display: flex;
`;



export function AddBoxForm(props) {
    const [name, setName] = useState("");
    const [characteristics, setCharacteristics] = useState("");
    const [photo, setPhoto] = useState("");
    const history = useHistory()
    const PostData = () => {





        fetch("/customer", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    characteristics,
                    photo,

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
        input type = "text"
        placeholder = "name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }

        / > <
        input type = "text"
        placeholder = "characteristics"
        value = { characteristics }
        onChange = {
            (e) => setCharacteristics(e.target.value)
        }

        / > <
        Text > Enter the folder that contains your product images < /Text> <
        Marginer direction = "vertical"
        margin = "1em" / >
        <
        input type = "file"
        placeholder = "enter your product files "
        value = { photo }
        onChange = {
            (e) => setPhoto(e.target.value)
        }

        / >










        <
        /FormContainer> <
        Marginer direction = "vertical"
        margin = "1em" / >



        <
        SubmitButton onClick = {
            () => PostData()
        } > Record < /SubmitButton>









        <
        /BoxContainer>

    );
}