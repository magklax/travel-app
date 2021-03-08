import React from 'react';
import { PropTypes } from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './SimpleCard.scss'

const SimpleCard = ({ country }) => {
	return (
		<Card
			className="simple-card"
			style={{ backgroundImage: `url( ${process.env.PUBLIC_URL + '/images/' + country.imageUrl } )` }}
		>
			<CardContent className="simple-card__content">
				{country.countryName.en}
				<CardActions>
					<Button size="small">Learn More</Button>
				</CardActions>
			</CardContent>			
		</Card>
	);
};

SimpleCard.propTypes = {
	country: PropTypes.shape({
		countryName: PropTypes.shape({
			en: PropTypes.string,
			ru: PropTypes.string,
			de: PropTypes.string,
		}),
		imageUrl: PropTypes.string,
	}).isRequired,
}

export default SimpleCard;