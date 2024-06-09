import React from 'react';
import './Polo.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Polo = () => {
    return (
        <div>
            <div className="hero-image">
                <img src="https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B1920_Component.Box_Stage_Fullscreen_Item_Media_Image_Image_Component/69139-stage-613300-media-child-image-b1920/dh-1995-ef522c/d46b1f05/1700719610/polo-r-line-world-premiere-still-exterieur-po4856-clean.jpeg" alt="Polo Hero" />
            </div>
            <div className="intro-text">
                <h1>Experience the new Volkswagen Polo</h1>
            </div>
            <div className="Line">
                <span className="line"></span>
            </div>
            <div className="infos">
                <div className="info">
                    <img src="https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B1920_Component.Content_Model_HighlightCluster_HighlightSmallAbstract_Image_Component/69139-896227-highlightSmall2-image-b1920/dh-564-f1ef71/908c3b5f/1700719612/polo-r-line-world-premiere-still-digitalcockpit-po4864-clean.jpeg" alt="icon" />
                    <div>
                        <h3>Space and practicality</h3>
                        <p>
                            The VW Polo combines compactness with ample space and practicality, 
                            ensuring a comfortable and convenient driving experience without sacrificing maneuverability.
                        </p>
                    </div>
                </div>
                <div className="Line">
                    <span className="line"></span>
                </div>
                <div className="info">
                    <img src="https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B560_Component.Content_MoodGallery_MediaList_Item_Image_Component/69139-896239-mediaList-613261-child-b560/dh-744-bd092b/556e08a0/1700719614/polo-r-line-world-premiere-still-lifestyle-po4861-clean.jpeg" alt="icon" /> 
                    <div>
                        <h3>Performance</h3>
                        <p>
                            The VW Polo boasts impressive performance, 
                            delivering exhilarating acceleration and dynamic handling that elevate the driving experience to new heights.
                        </p>
                    </div>   
                </div>
                <div className="Line">
                    <span className="line"></span>
                </div>
                <div className="info">
                    <img src="https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B960_Component.Content_Model_HighlightFeatureSection_Item_Content_Gallery_Item_Component/69139-896242-896244-613262-content-gallery-613263-b960/dh-1235-e0864f/d3c8272b/1700719614/polo-assistance-system-travelassist.jpg" alt="icon" />
                    <div>
                        <b><h3>Agility</h3></b>
                        <p>
                            The VW Polo excels in agility, 
                            effortlessly navigating urban streets and country lanes with responsive handling and nimble steering, 
                            making every journey a delight.
                        </p>
                    </div>
                </div>
            </div>
            <div className="Line">
                <span className="line"></span>
            </div>
            <section className="specs">
                <div>
                    <div className="specs-header">
                        <h2>Tech Specs</h2>
                        <span>Engine</span>
                    </div>
                    <ul>
                        <li>
                            <span>Transmission</span>
                            <span> Manual/Automatic</span>
                        </li>
                        <li>
                            <span>Maximum power</span>
                            <span> 95 bhp @ 1000 rpm</span>
                        </li>
                        <li>
                            <span>Maximum torque</span>
                            <span> 250 Nm @ 1000 rpm</span>
                        </li>
                        <li>
                            <span>Turning radius</span>
                            <span> 10.6 m</span>
                        </li>
                        <li>
                            <span>Acceleration (0-100 kph)</span>
                            <span> 10.8s</span>
                        </li>
                        <li>
                            <span>Drive type</span>
                            <span> FWD</span>
                        </li>
                        <li>
                            <span>Turbo charger</span>
                            <span> No</span>
                        </li>
                        <li>
                            <span>Boot</span>
                            <span> 351 L</span>
                        </li>
                        <li>
                            <span>Number of seats</span>
                            <span> 5</span>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="models-text">
                <h1>Choose between a our finest Polo models</h1>
            </div>
            <div className="Line">
                <span className="line"></span>
            </div>
            <div className="card-container">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://assets.volkswagen.com/is/image/volkswagenag/new-polo-r-line-1?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2E1Nw=="
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                R Line
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The Polo R-Line is a sporty version of the Volkswagen Polo, featuring stylish design elements like unique bumpers, 
                                side skirts, and R-Line badges. Inside, it offers sport seats and a sport steering wheel, 
                                enhancing both comfort and aesthetics. 
                                It is ideal for those who want a blend of performance and practicality in a compact car.
                                The Polo R-Line adds sporty design elements and enhanced styling.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://assets.volkswagen.com/is/image/volkswagenag/new_cars-polo_gti-badge-10_6-1920x1152?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTc2OCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiYyMmI2"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                GTI
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The Polo GTI is Volkswagen's sporty version of the Polo, known for its powerful engine, distinctive design, 
                                and dynamic driving experience. It features sporty styling details inside and out, 
                                making it a popular choice for enthusiasts seeking a compact yet thrilling ride.
                                The Volkswagen Polo is a compact car known for its stylish design, efficient performance, and advanced technology.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/nd1afa1l/polo-white-rline.jpg?width=1200&height=800&mode=crop&scale=both"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Style
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The Polo Style is a refined version of the Volkswagen Polo, 
                                featuring sleek design, premium interior materials, and added comfort features.
                                The Volkswagen Polo is a compact car known for its stylish design, efficient performance, and advanced technology.
                                The Volkswagen Polo Style offers a blend of modern design, practicality, and advanced features in a compact package.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}

export default Polo;





