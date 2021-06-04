import React from "react";
import PropTypes from "prop-types";

//create your first component
const Jumbotron = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead"></p>
			<hr className="my-4" />
			<p>{props.text}</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="https://warhammerfantasy.fandom.com/es/wiki/Mundo_de_Warhammer"
					role="button">
					Learn more
				</a>
			</p>
		</div>
	);
};
Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};
export default Jumbotron;
