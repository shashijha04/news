import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Channel = (props) => {
    return (
        <div className='card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='image' variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Button variant="primary" href={props.link} target="_blank">Click to visit site</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Channel
