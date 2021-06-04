import React from "react";
import PropTypes from "prop-types";
//create your first component
const Card = props => {
	return (
		<div className="col-lg-3">
			<div className="card">
				<img
					className="card-img-top"
					src={props.src}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a href={props.url} className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	src: PropTypes.string,
	url: PropTypes.string
};
export default Card;
