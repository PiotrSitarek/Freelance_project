import React from 'react';
import image from '../../assets/People-3.jpg';
import decoration from "../../assets/Decoration.svg";
import signature from '../../assets/Signature.svg';

const HomeAboutUs = () => {
    return (
        <section className="aboutUsContainer" id="idAboutUs">
            <div className="aboutUS">
                <p>O nas</p>
                <img src={decoration} alt="decorationImage" />
                <p>Nulla tristique, lacus id varius luctus, metus urna posuere velit, et tristique purus magna vel dolor. Praesent sit amet ullamcorper lacus, et rhoncus quam.</p>
                <img src={signature} alt="signatureImage" />
            </div>
            <div className="peopleImg">
                <img src={image} alt="peopleImage" />
            </div>
        </section>
    )
}
export default HomeAboutUs;