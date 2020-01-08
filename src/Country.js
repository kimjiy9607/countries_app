import React from "react";
import PropTypes from "prop-types";
import "./Country.css";

function Country({ id, name, capital, flag }) {
return (
    <div className="country">
        <img src={flag} alt={name} name={name} />
        <div className="country__data">
            <h2 className="country__name">{name}</h2>
            <h3 className="country__capital">{capital}</h3>
        </div>
    </div>
)
}

Country.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired
};

export default Country;