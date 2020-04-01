import React from "react";
import { Link } from 'react-scroll';
import image from '../assets/Home-Hero-Image-2.jpg';
import pageInfoimage from '../assets/Decoration.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink,
    useHistory
} from "react-router-dom";





const HomeHeader = () => {
    const history = useHistory()

    const toLoginPage = () => {
        history.push("/LoginPage")
    }

    return (
        <>
            <section className="heroImageContainer">
                <img src={image} />
            </section>
            <section className="navigationContainer">
                <div className="menuLoginContainer">
                    <div className="loginContainer">
                        <button>Zaloguj się</button>
                        <button>Załóż konto</button>
                    </div>
                    <div className="menuContainer">
                        <ul>
                            <li>Start</li>
                            <Link to="idFourSteps" smooth={true} duration={1000}>O co chodzi?</Link>
                            <Link to="idAboutUs" smooth={true} duration={1000}>O nas</Link>
                            <Link to="idWeHelp" smooth={true} duration={1000}>Fundacja i organizacje</Link>
                            <Link to="idHomeContact" smooth={true} duration={1000}>Kontakt</Link>
                        </ul>
                    </div>
                </div>
                <div className="pageInfoContainer">
                    <div className="pageInfoText">
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <img src={pageInfoimage} />
                    </div>
                    <div className="pageInfoOptions">
                        <button onClick={toLoginPage}>Oddaj rzeczy</button>
                        <button onClick={toLoginPage}>Zorganizuj zbiórkę</button>

                    </div>
                </div>
            </section>




        </>
    );
}

export default HomeHeader;