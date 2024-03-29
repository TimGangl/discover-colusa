import React from 'react';
import ReactPlayer from 'react-player/lazy';
import video from '../../videos/hand-in-water.mp4';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..//Navigation/Navigation.css';
import '../VideoCard/VideoCard.css';
import { Link } from 'react-router-dom';

const VideoCard = () => {
  return (
    <Card fluid className='react-player-card text-white h1'>
      <Card.Body className='card-body'>

        <ReactPlayer
          className='reactPlayer'
          url={video}
          playing
          loop
          muted
          width='100%'
          height='100%'
        />

      </Card.Body>
      <Card.ImgOverlay className='card-img-overlay'>
        <Card.Title className='card-title'>Discover Colusa</Card.Title>

        <div id="stay-text" style={{ color: 'white;' }}><Link to="/events">Upcoming Events!</Link></div>


      </Card.ImgOverlay>
    </Card>
  );
};

export default VideoCard;
