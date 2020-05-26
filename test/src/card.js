import React from "react";
import PropTypes from "prop-types";

const Card = props => {
    return (
        

            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100">
                    <img class="card-img-top" src={props.imageURl} alt="" />
                    <div class="card-body">
                        <h4 class="card-title"></h4>
                        <p class="card-text">{props.description}</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">{props.buttonLabel}</a>
                    </div>
                </div>
            </div>
       
    );
}



Card.propTypes = {
    imageURl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
}

export default Card;