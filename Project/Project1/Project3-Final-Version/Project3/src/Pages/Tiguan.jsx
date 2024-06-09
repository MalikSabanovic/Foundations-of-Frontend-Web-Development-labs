import React from 'react';
import './Tiguan.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Tiguan = () => {
    return (
        <div>
            <div className="hero-image">
                <img src="https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B1920_Component.Box_Stage_Fullscreen_Item_Media_Image_Image_Component/93221-stage-996688-media-child-image-b1920/dh-1917-ef522c/9b2a6328/1712583938/tiguan-min.jpg" alt="Tiguan Hero" />
            </div>
            <div className="intro-text">
                <h1>Experience the new Volkswagen Tiguan</h1>
            </div>
            <div className="Line">
                <span className="line"></span>
            </div>
            <div className="infos">
                <div className="info">
                    <img src="https://cf-cdn-v6.volkswagen.at/media/Content_ContentSlider_List_Item_Media_Image_Component/93221-1351919-1351921-list-996678-media-child/dh-701-801a82/d2d0caeb/1712580006/tn2434.jpg" alt="icon" />
                    <div>
                        <h3>Space and practicality</h3>
                        <p>
                            The VW Tiguan combines the flexibility of an SUV with ample space and practicality, 
                            ensuring a comfortable and convenient driving experience for families and adventurers alike.
                        </p>
                    </div>
                </div>
                <div className="Line">
                    <span className="line"></span>
                </div>
                <div className="info">
                    <img src="https://cf-cdn-v6.volkswagen.at/media/Content_ContentSlider_List_Item_Media_Image_Component/93221-1351919-1351921-list-996677-media-child/dh-701-801a82/d9774eda/1712580006/tn2430.jpg" alt="icon" /> 
                    <div>
                        <h3>Performance</h3>
                        <p>
                            The VW Tiguan boasts impressive performance, 
                            delivering powerful acceleration and dynamic handling that elevate the driving experience on any terrain.
                        </p>
                    </div>   
                </div>
                <div className="Line">
                    <span className="line"></span>
                </div>
                <div className="info">
                    <img src="https://cf-cdn-v6.volkswagen.at/media/Content_ContentSlider_List_Item_Media_Image_Component/93221-1351919-1351921-list-996675-media-child/dh-701-801a82/080f8a08/1712580006/connect-1.jpg" alt="icon" />
                    <div>
                        <h3>Agility</h3>
                        <p>
                            The VW Tiguan excels in agility, 
                            effortlessly navigating urban streets and off-road trails with responsive handling and nimble steering, 
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
                            <span> 184 bhp @ 4000 rpm</span>
                        </li>
                        <li>
                            <span>Maximum torque</span>
                            <span> 221 Nm @ 1600 rpm</span>
                        </li>
                        <li>
                            <span>Turning radius</span>
                            <span> 11.5 m</span>
                        </li>
                        <li>
                            <span>Acceleration (0-100 kph)</span>
                            <span> 7.7s</span>
                        </li>
                        <li>
                            <span>Drive type</span>
                            <span> AWD</span>
                        </li>
                        <li>
                            <span>Turbo charger</span>
                            <span> Yes</span>
                        </li>
                        <li>
                            <span>Boot</span>
                            <span> 615 L</span>
                        </li>
                        <li>
                            <span>Number of seats</span>
                            <span> 5</span>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="models-text">
                <h1>Choose between our finest Tiguan models</h1>
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
                            image="https://autoexportmarseille.com/wp-content/uploads/2024/02/2024-volkswagen-tiguan-r-line-gris-dauphin-algerie.png"
                            alt="VW Tiguan R-Line"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                R Line
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The Tiguan R-Line is a sporty version of the Volkswagen Tiguan, featuring stylish design elements like unique bumpers, 
                                side skirts, and R-Line badges. Inside, it offers sport seats and a sport steering wheel, 
                                enhancing both comfort and aesthetics. 
                                It is ideal for those who want a blend of performance and practicality in an SUV.
                                The Tiguan R-Line adds sporty design elements and enhanced styling.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://cf-cdn-v6.volkswagen.at/media/Content_Model_Equipment_Lightbox_Child_MediaBig_Image_Component/64322-978063_lightbox-671213-mediaBig-child/dh-1280-00fe24/8ec6b07c/1695742424/new-tiguan-r-line.jpg"
                            alt="VW Tiguan R"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                R
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The Tiguan R is Volkswagen's sporty version of the Tiguan, known for its powerful engine, distinctive design, 
                                and dynamic driving experience. It features sporty styling details inside and out, 
                                making it a popular choice for enthusiasts seeking a compact yet thrilling ride.
                                The Volkswagen Tiguan is a compact SUV known for its stylish design, efficient performance, and advanced technology.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images0.autocasion.com/unsafe/500x281/ad/01/2474/b82f59e2ef3f319785fac4264e3b513fa514123d.png"
                            alt="VW Tiguan Style"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Style
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The Tiguan Style is a refined version of the Volkswagen Tiguan, 
                                featuring sleek design, premium interior materials, and added comfort features.
                                The Volkswagen Tiguan is a compact SUV known for its stylish design, efficient performance, and advanced technology.
                                The Volkswagen Tiguan Style offers a blend of modern design, practicality, and advanced features in a compact package.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}

export default Tiguan;
