import React, { useState, useEffect } from 'react';
import './VolkswagenModels.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const VolkswagenModels = () => {
  const [headingText, setHeadingText] = useState('');
  const [paragraphText, setParagraphText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/content.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHeadingText(data.heading);
        setParagraphText(data.paragraph);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="third-section">
        <div className="heading-one">
          <h1>{headingText}</h1>
          <p>{paragraphText}</p>
        </div>
      </div>
      <div className="Linee">
        <span className="linee"></span>
      </div>
      <div className="col">
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://dicleotomotiv.com/panel/anaresim/1639059f606563.webp"
              alt="New Polo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                New Polo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the all-new Polo with advanced features and stunning design.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://dicleotomotiv.com/panel/anaresim/1639059e30b803.webp"
              alt="New Golf"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                New Golf
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience the latest Golf with exceptional performance and comfort.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://dicleotomotiv.com/panel/anaresim/163905a358dcb6.webp"
              alt="New Tiguan"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                New Tiguan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The new Tiguan offers a blend of style, technology, and versatility.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.volkswagen-me.info/bbo/model-carousel/img/color/t-roc.png"
              alt="New T-Roc"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                New T-Roc
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the bold and stylish T-Roc with advanced features.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="Linee">
        <span className="linee"></span>
      </div>
    </div>
  );
};

export default VolkswagenModels;


