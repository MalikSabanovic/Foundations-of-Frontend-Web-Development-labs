import React from 'react';
import './Golf.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Polo = () => {
    return (
        <div>
            <div className="hero-image">
                <img src="https://assets.volkswagen.com/is/image/volkswagenag/GL6231_Golf_parking_sidewys_at_restaurant_16-9-1?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2E1Nw==" alt="Polo Hero" />
            </div>
            <div className="intro-text">
                <h1>Experience the new Volkswagen Golf</h1>
            </div>
            <div className="Line">
                <span className="line"></span>
            </div>
            <div className="infos">
                <div className="info">
                    <img src="https://assets.volkswagen.com/is/image/volkswagenag/new_cars-new_golf-interior-GL6264_DE_Golf_interior_view_at_HMI_16-9?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTY4MCZoZWk9MzgzJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjM3NDA=" alt="icon" />
                    <div>
                        <h3>Space and practicality</h3>
                        <p>
                            The VW Golf combines compactness with ample space and practicality, 
                            ensuring a comfortable and convenient driving experience without sacrificing maneuverability.
                        </p>
                    </div>
                </div>
                <div className="Line">
                    <span className="line"></span>
                </div>
                <div className="info">
                    <img src="https://assets.volkswagen.com/is/image/volkswagenag/new_cars-new_golf-white_golf_cafe_GL6488-1920x1080?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTcyMCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiY5ZjIy" alt="icon" /> 
                    <div>
                        <h3>Performance</h3>
                        <p>
                            The VW Golf boasts impressive performance, 
                            delivering exhilarating acceleration and dynamic handling that elevate the driving experience to new heights.
                        </p>
                    </div>   
                </div>
                <div className="Line">
                    <span className="line"></span>
                </div>
                <div className="info">
                    <img src="https://assets.volkswagen.com/is/image/volkswagenag/new_cars-new_golf-white_golf_cafe_GL6489-1920x1080?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9NTQwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjRhNzg=" alt="icon" />
                    <div>
                        <b><h3>Agility</h3></b>
                        <p>
                            The VW Golf excels in agility, 
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
                <h1>Choose between our finest Golf models</h1>
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
                            image="https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y2UycodRRTHOwlJxEVERcS9fAgBT1XPvbhIEnEjShYSF1l8nOquoW9XTzV039srHygP4Uu4cuMLuHLjRvBcEij4Uaf-NZyp3v2dPI4uefT27csf__vqC63_rB4myWVJkuQB2R--ffnuny__ffLRL399MD_5IXkcohPzA5K8fvhxP6KWcF6k_iR5SqbkUZI8_Y3w-22SPHsWnV3Q4fhtJ0XUn34jWVkVKWvKriiEVCJNG1lzLNKuyVVapJLXWdFl_LMkefwHWgtdOc4Ks1y5eQpLCx3yQl7SRee3YZGG627jOnsakLI0h6-D67WW7n5092bhwPPnhSscFOXz3gEi5jojRMkQUGDsKoLjiwSUXdqOBMcWBqhM1AQ95jutmY13NOtFHhXB6o0DDoLLAnAK9bECellebtASSelHPZLE--JMF_krG8gYkF8IsWv2M8Fj0wPuW33OQKDhgySEc34mbPygmZhLpUDoYboyEFYIerWYd-5pg_McVxAB2UaS4JqDJHvXBAatwdQUBLeeObRz26YltOGid0ZRdJknyD5TCJ0y_EyhVZtmKXS94tcMZCunnoPsFJMdYa_QguxNESTIxVSXFKTvKzpMeh8bCQo7RocpGUvyXWm_WQ7K7JsiWN_0BSgvoklBHV6RD1pOtY6gB8OuLYH0JehxnlgD2mEdMtB-0WwAvWN5rcH0yKacMJYTEnw2RTADDm0Bxu91H8DEbiDHzFWkdEM_2TKkBB8LAb3zuS1hQMkGJLih1gS_DhwGe7ArYVxW1xB8TpkeZpPR9mHesjMZ3cgPmt1CXsDgsWhJ4uOAZIxmGDKw2BZDRRiUYGDbZV0bsBItcwRb-5Iw8Ykk0mWGJHrvqcBsj7UmZT9aus_SCzcyDm1VItjZVUsO1mG6eMKGtzUvaxfA7q5eMxjRl5LQeTUyGBVW5xTGQcrxhlgfBYxz6HwDE25VvMJEbwmW4OsdYZ7obQUsOGrqlUWYnEr_fYPB-w4Dh13bV4S57jQhNlTQrp2l4_C-_QhDRYF0VCKlJTiua3A-MEFGv2WrARfVdOTgUZRtStDlShCu3jT4zuSSgZe49iV4daSKZnpoyHdvMDsi-F5MzBJkZjOCybEGP2FFSfWTqSl_fp6Kyxn84lZDkiVW1DLemZIq2XuTDwp86CpB1waVni8Ew4QkuCqSMmwMaUZhvdCZu68nwhHZJCAMW04vC4sVVJ_BqYLqOrg9axEC-WcDhE2uWwZhj9yT8bpweYFNDJy6cZOqoZLalOCUnG32a77A5kykmG0uNOTtFraG_pC931bNYfdYUUB273Ot4MPvdgisqccO4VJK3EHpDh0cvcxp3zFsGZXiEU0zsu_ktPX0ZY5yCqc3v96_evUmvX852-5u77tgTrxJ2Z2RvTbh1JTsDu1i8BRclHctjtLh6cWb1-n39y_u03vG-B1O9NWHfp786efbpjsfpHT9pHHSVp7osHHupHVy6z2pTj-95nfazgKpbvdBXr1co5xaUn7-iE7-HytpFjt5BgAA.webp?width=648"
                            alt="VW Golf R-Line"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                R Line
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The Golf R-Line is a sporty version of the Volkswagen Golf, featuring stylish design elements like unique bumpers, 
                                side skirts, and R-Line badges. Inside, it offers sport seats and a sport steering wheel, 
                                enhancing both comfort and aesthetics. 
                                It is ideal for those who want a blend of performance and practicality in a compact car.
                                The Golf R-Line adds sporty design elements and enhanced styling.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y2Vy6oeRRDHvyRExUVERcS9HISA1XOfWRwkwZ0oASUusjhUz_Rlvu659W3ONysfKA_he7jxBVy50YVgfTmBgh_VVd3TVf3vnrd_nZ5Gd3ry5s3LH_776gul_mgen0736-l0ekTjj9-8fPv3l_988NEvf74f_uB8ehqi48sjSnn1-ONxQiXgvAr1yelDGjo9OZ0-_I3w-9U5PXsWnV3R4fTtIHhUn35TNVIUQkqUss6HvGoKVvU5Z21Xt0U1sIoSeJ3Vn51OT_9Fa2Gop0ViUUq3zGHtoR-ybj-ydRiudq6vZoeruXd2LGR7765mCzLIWV7C18GNSgl3N7k7veaQlc_Xdm2hqp9HBYhYKkaIgiEgxzjkBJetAlAMeT8RHFspRep4zVRTMyVAnbKBvJGXURKsSuQZnokKcA7toQG9qO8dQQmkmJ_UlBF8daYP-QszNBgwuyfEodsDwWNL8_ZUU4yjzsyZEM4sEVJmFXC-1FICV2a-UIrlnHbNlz3zGXDnM9yAB2SJUoLrDkrZhy4w6DXm4xVuO2fQL31PnenDvdoZDOgKTxBjIREGKpNnhKRyGhxldslB9GKm6WKQbDwT9gYtiFFXkwOx6uaeUvzY0GLC-9gJkDgwWkyKWFPtUvlkM5B6T5JgfTdWID2POgd5eEk1KDG3KoIyml0GQrJFBWpaQrGBctiGGpRfVdaD2rG-tKBHZHNJmOoZCb6YI2iDRjeg_d6OF9BxMFSYvvCcvjDOtg45wceKPOdLW4NBwQwSnGkVwW8mA2MPRt0107q5luDLoQCz6IKmmyUV5w6MmzLqrrm2vALjserJ89FQtSZqYwqw2FemIRjJGdh-3bYSrEDLHMG2vibM2UwpwhWaUtQ-ksDsiK3KCJOlg7O0w3RF39QIdnENSdc6zNdASHiNedE6C3Z37VbAhL4WhMHLicEksTnnMBkhSHyTie1RAnV1oL3MmJqNwUx7CZbg293AMtPeGKw4KdL8ynV5xbsrBw93Dh4uHTzcOni4duBw6NlBWMZ2I8SOVO76RRwZuME01FZHgmkoJlymOnA-MNKZ86nYNLgoZ-qnR173JUHVWw2euzYp8IMuBcUEbiPF5JFL8pTp1gK8xuKI4Ec-N2eCKNYrdIkUm7GhI_azbi8Z-GWu7im2uo167dfY0BF7p2vStfe6ND34MDQ8J8j8TJ8NmvErXBMpJSSGAjw1-Z7W3H07E47IZg3BpNLUEFbLqwKCkxWpPLi96BEC1WfPEJLY6KjCHjNvIVzWTFwgcZORpJKQHT0lSfKMjiotfitXSE5H6llyoaNqU0jdkeDhcYN9TBsp5P0jt3tsqD2796WScHBs6eId3OU7gTQQBjhGUR4bHCYVmMMRdTex78ScRnpZJzGH259DHMbl7vWvN_s4BH2bdTm70WJUOtx2NbtBu2q8DS6Kmx4n4fD2xetX-fd3L-7yO8ayG5zpdxDGZfa3P10n3fgghBtnhbOy4pYWm5ZBWCfS6Cnr9sdX-Y2yC0dS8m7ExYstirmnzM-f0Mr_A-cVsYOdBgAA.webp?width=864"
                            alt="VW Golf GTI"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                GTI
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The Golf GTI is Volkswagen's sporty version of the Golf, known for its powerful engine, distinctive design, 
                                and dynamic driving experience. It features sporty styling details inside and out, 
                                making it a popular choice for enthusiasts seeking a compact yet thrilling ride.
                                The Volkswagen Golf is a compact car known for its stylish design, efficient performance, and advanced technology.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y2UzaolNRDHz8wwo7gYURERXMpFGLCS_u7FQWZwJ8qAMi5mcal00kmfpL-SdPqcXvk-zkP4Hm58AVdu3AjWRaHhx79SqVRVqvPuz9PTzZ-evH376rt_Pv9U69_rx6fTdTmdTo_I_vjtq3d_ffb3s_d_-uN_87MvTk_j5sX8iFxeP_5gGFEruCxKf3h6j0ynJ6fTe78QfnsQp-fPN-8W9Dh-LZXY9Edf8bJTXV_XmHdFluec5V2riroQBZYMZYltIZHL7OPT6emvHU4gq3HuMS96P09x6aCT3I8FX-aOPshYVsCX0Q9aK38_-nuzZMCLF651LZTVi1kAIhaaETbFEFDgJjOC54sCVDLrRoJnC7n0ZtMcUI91R2smcUnGQRQbuQxOJ1JWcFUDTrE5DGBQ1XUlaIW0FkY90vYQyktHuDFLxoj8SsZNtvuFELD1gHtqLjkINNz2hHgpLoTE3QhCzFVvQGg73RgIJwRTIOadBw7CB44riIjsGgm-Pchll23k0BnMBkbw64XU3HXUmS5e9c5Aos8DQQ15jyCpTNESks5KkEPPbzmoTk20XcmeqYmwtykDNZgyKlCLqa8lqDDUFEyFsLUKepSMgvVqq6j2XofkOPRmTz3BhXYooQ9iM6SO0FPntZoavYG2ht06QnJlDnqcY76D9thEUmHRzIHesbrVYAZkU0EYqwkJIZ82MBatobWwN0MEs0lLfTE3kdEJw-SqmBHCVkoYfChcBRYVs0jwttGEsFoO1h2MirbjsvqWEApJajb5SmpO-YXgR07dtT4wqsgGLLsHbBYzsJuxNgeHXWlrgu0FA9ctK213Ch3V4JRrQkWYVorilM8NQe8DjaIbsKE5c8PoIinKMD2gqysEN_t6oZiexqYnJKR7cEG1SYPbfbOWMGKoFEGGfmQw9lhfMhitUg_Kbs1RAHVV-hImTPWmYaJcoiGEZh9hnii3EhYcNc38IkzxgP9-J4-yay6EuUFP2NoLgu9mSh-8tLWtwNNQcFLKc92AD5EJTkjFShu2fqLTA4rimhN0tVYQhG8o-SBNoRgEhetALv2R9aS0banaYDA_JIRBTJUjKO4zgimQPCesHQWbTHPjEOapvF4hLH6lyQrLVj8YvakG2hBMYTsIUdaCVOyzS08wTFwIvt7ovJgYkpEaeaVj99BMlOCxseUC0aaCbjMuTuQlRN-XkhP2vEOIIeWOXJJatwbivvFAxtvClYAkLI8tJNW39FykXnC6jjSHtVggebPRuCUfW6o2xdQeCfYhrXT9e8CaGrKHUOgeDoEN_U6H8NlOoJuNEo5BFccKh025qOHYTDuyb9SUBnoLRzXF849xk8N8_-bnu32Q0Zx5m7E7owZt4rmt2B26xeA5-k3ddTgqj-eXb15n396_vM_uGeN3ONEDHod5CucfHjbdhaiUHyaNk3bqTMHGWSrnVRoCeZ2_f53daTcLpPncrboF6oeaOvL85AlF_hcVe2hrTwYAAA.webp?width=864"
                            alt="VW Golf R"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Style
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The Golf R is a refined version of the Volkswagen Golf, 
                                featuring sleek design, premium interior materials, and added comfort features.
                                The Volkswagen Golf is a compact car known for its stylish design, efficient performance, and advanced technology.
                                The Volkswagen Golf Style offers a blend of modern design, practicality, and advanced features in a compact package.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}

export default Polo;
