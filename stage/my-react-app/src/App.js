import logo from './logo.svg';
import './App.css';
import { Homepage } from './containers/Homepage';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { CustomerAccessPage } from './containers/customerAccessPage';
import { CustomerAccessAdd } from './containers/customerAccessPage1';
import { AboutUs } from './containers/Homepage/aboutUs';
import { SuivieAccessPage } from './containers/suivieClient';
import { AdminAccessPage } from './containers/adminAccessPage'


function App() {
    return (

        <
        div className = "App" >
        <
        Switch >
        <



        Route exact path = "/" >
        <
        Homepage / > <
        / Route >



        <



        Route exact path = "/customer/access/:action" >
        <
        CustomerAccessPage / > <
        / Route > <



        Route exact path = "/customer" >
        <
        CustomerAccessAdd / > <
        / Route >

        <



        Route exact path = "/admin/:action" >
        <
        AdminAccessPage / > <
        / Route >

        <



        Route exact path = "/suivie" >
        <
        SuivieAccessPage / > <
        / Route >


        <
        /
        Switch >







        <
        /
        div >
    );
}

export default App;