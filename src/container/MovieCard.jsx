import React from 'react';
import { Col } from 'react-bootstrap';
import { MovieName, MovieImage, StyledCard } from '../styles/AppContainer.style';

export const MovieCard = React.forwardRef((props, ref) => {
    return (
        <Col {...props} lg={3} md={3} xs={4} sm={6} ref={ref} >
            <StyledCard >
                <MovieImage src={`./images/${props.val['poster-image']}`} />
                <MovieName>
                    {props.val.name}
                </MovieName>
            </StyledCard>
        </Col>
    )
})