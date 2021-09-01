import React, { createContext, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { Marginer } from "../marginer";
import M from "materialize-css";
import { useHistory } from "react-router";

import { deviceSize } from "../../components/responsive";

import axios from "axios";
import { Select } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const StyledTableCell = withStyles((theme) => ({
    head: {
        //  backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


const Title = styled.h2 `
  margin: 0;
  margin-bottom: 13px;
  color: #00695c;
  font-weight: 600;
  font-size: 20px;
`;



export function SuivieBoxForm(props) {
    const classes = useStyles();
    const [produit, setProduit] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get("/suivie")
            .then(resultat => {
                setProduit(resultat.data)
                console.log(resultat.data)
            })



        axios.get("/suivie")
            .then(resultat => {
                setUser(resultat.data)

            })

    }, [])







    return (

        <
        div > { /* //tableau */ }


        <
        Title > Products < /Title> <
        div className = "tableau" >
        <
        TableContainer component = { Paper } >
        <
        Table className = { classes.table } >
        <
        TableHead className = "head" >
        <
        TableRow >
        <
        StyledTableCell align = "center" > < Title > Name of product < /Title> < /StyledTableCell > <
        StyledTableCell align = "center" > < Title > Characteristics < /Title> < /StyledTableCell >

        <
        StyledTableCell align = "center" > < Title > Picture < /Title> < /StyledTableCell >

        <
        /TableRow> < /
        TableHead > <
        TableBody > {
            produit.map((element, index) => ( <
                StyledTableRow key = { element.name } >
                <
                StyledTableCell align = "center"
                component = "th"
                scope = "row" > { element.name } <
                /StyledTableCell> <
                StyledTableCell align = "center" > { element.characteristics } <
                /StyledTableCell> <
                StyledTableCell align = "center" > { element.photo } <
                /StyledTableCell>



                <
                /StyledTableRow>
            ))
        } <
        /TableBody> < /
        Table > <
        /TableContainer> < /
        div >



        <
        p >
        <
        br / >
        <
        br / >
        <
        /p>


        <
        p >
        <
        br / >
        <
        br / >
        <
        /p>



        <
        Title > Clients < /Title>




        <
        div className = "tableau" >
        <
        TableContainer component = { Paper } >
        <
        Table className = { classes.table } >
        <
        TableHead className = "head" >
        <
        TableRow >
        <
        StyledTableCell align = "center" > < Title > Name < /Title> < /StyledTableCell > <
        StyledTableCell align = "center" > < Title > Email < /Title> < /StyledTableCell >


        <
        /TableRow> < /
        TableHead > <
        TableBody > {
            user.map((element, index) => ( <
                StyledTableRow key = { element.name } >
                <
                StyledTableCell align = "center"
                component = "th"
                scope = "row" > { element.name } <
                /StyledTableCell> <
                StyledTableCell align = "center" > { element.email } <
                /StyledTableCell>



                <
                /StyledTableRow>
            ))
        } <
        /TableBody> < /
        Table > <
        /TableContainer> < /
        div >

        <
        /div>

    );

}