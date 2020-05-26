import React from "react";
import PropTypes from "prop-types";

const Jumpbrotom = props => {
    return (
        <div className="container">
            <header className="jumbotron my-4">
                <h1 className="display-3">{props.title}</h1>
                <p className="lead">{props.description}</p>
                <a href="#" className="btn btn-primary btn-lg">{props.buttonLabel}</a>
            </header>
        </div>
    );
}


Jumpbrotom.propTypes = {
    title: PropTypes.string,
    description : PropTypes.string,
    buttonLabel: PropTypes.string,
}

export default Jumpbrotom;