import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import "./News.css";

function VolkswagenInfo() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            
            <div className="banner">
                <img 
                    src="https://assets.volkswagen.com/is/image/volkswagenag/VW_NGW6_Homepage_BasicStage-Desktop_TaosOffer?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2E1Nw==" 
                    alt="Golf Banner" 
                    className="banner-image" 
                />
            </div>

            
            <div className="second-section">
                <h1><b>87 years</b> of pure quality, VW</h1>
            </div>

         
            <div className="third-section">
                <iframe 
                    width="1160" 
                    height="665" 
                    src="https://www.youtube.com/embed/c04_GeQZFFw?autoplay=1&mute=1&controls=0" 
                    frameBorder="0" 
                    allowFullScreen
                ></iframe>
                <p>
                    <b>Volkswagen</b>,<br/> with its rich 87-year history, has stood as an emblem of resilience and innovation in the automotive industry. 
                    Since its founding in 1937, Volkswagen has consistently delivered iconic vehicles that have become synonymous with quality and craftsmanship, 
                    marking its enduring legacy as a pioneer of modern mobility. 
                    From the legendary Beetle to the innovative electric vehicles of today, 
                    Volkswagen's commitment to excellence and its pioneering spirit continue to shape the future of transportation worldwide.
                </p>
            </div>
            
            <hr />

            
            <div className="fourth-section">
                <h1>Golf Celebrating 50 years</h1>
                <img src="https://assets.volkswagen.com/is/image/volkswagenag/new_cars-match_trim-golf-16_9-1920x1080?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2E1Nw==" alt="Golf Image" />
                <p>
                    <b>Icon, brought to perfection.</b>
                    Volkswagen celebrates the 50th anniversary of the Golf model. 
                    Serial production of the best-selling Volkswagen model began in Wolfsburg in March 1974. 
                    Since then, more than 37 million vehicles have been produced after that first Golf model. 
                    Purely mathematically speaking, this means that every day for the past 50 years, more than 2000 people worldwide have decided to buy a new Golf. 
                    This compact icon makes it the most successful European vehicle and the best-selling Volkswagen model of all time. 
                    Volkswagen now presents the latest phase in the evolution of the Golf model with a completely new developed infotainment system and the next generation plug-in hybrid drive. 
                    This spring, the best Golf of the last 50 years arrives in car dealerships.
                </p>
                <br/>
                <p>
                    <b>New light design.</b> The new Golf and Golf Variant are recognizable by their modified front end. 
                    Features that visually define them include the Volkswagen logo², which is illuminated for the first time on European markets, and newly designed LED headlights. 
                    In the top variant IQ.LIGHT LED matrix headlights², new powerful high beams with a range of up to 500 m are included. IQ.LIGHT 3D LED taillights² 
                    in both body variants are also newly designed.
                </p>
                <img src="https://assets.volkswagen.com/is/image/volkswagenag/GL6263_DE_Golf_interior_two_guys_looking_at_HMI_16-9-1?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2E1Nw==" alt="Golf Image" />
                <p>
                    <b>New infotainment system.</b> The interior of the new model is equipped with a newly developed, intuitive infotainment system (MIB4) with a standalone touchscreen. 
                    Ergonomically optimized and illuminated touch sliders for temperature and volume control are located at the bottom of the screen.
                </p>
            </div>

            
            <div className="fifth-section">
                <div className="dialog-button" >
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Find Out More
                    </Button>
                </div>

                <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
                    <DialogTitle id="dialog-title">Find Out More</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Volkswagen, a globally renowned automobile manufacturer, is known for producing a 
                            diverse range of high-quality vehicles that cater to various market segments. 
                            Founded in 1937 in Germany, 
                            the brand has become synonymous with innovation, engineering excellence, 
                            and iconic models like the Beetle and the Golf. 
                            Volkswagen's commitment to sustainability is evident in
                             its increasing focus on electric and hybrid technologies, aiming to reduce 
                            its environmental impact and lead the automotive industry's green transition. 
                            The companys extensive lineup includes compact cars, sedans, SUVs,
                             and commercial vehicles, ensuring there is a Volkswagen for every drivers needs. 
                            Volkswagen's dedication to safety and cutting-edge technology is reflected in its vehicles' advanced features and robust performance. 
                            With a strong presence in global markets, 
                            Volkswagen continues to shape the future of mobility through 
                            its visionary approach and unwavering pursuit of automotive perfection.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default VolkswagenInfo;

