import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './Card.css';
import MaterialCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

class Card extends Component{
    static propTypes = {
        cardData: PropTypes.object,
    };
    render() {
        return(
            <div className='card'>
                <MaterialCard style={{width: 336}}>
                    <CardActionArea>
                        <CardMedia
                        style={{height: 492, width: 336}}
                            image={this.props.cardData.card_images[0].image_url}
                            // image={fav}
                            title={this.props.cardData.name}
                        />
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </MaterialCard>
            </div>
        );
    }
}

export default Card;