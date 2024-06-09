import React from 'react';
import './Troc.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Troc = () => {
    return (
        <div>
            <div className="hero-image">
                <img src="https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B1920_Component.Box_Stage_Parallax_StageList_Item_Image_Component/76687-stage-stageList-728161-image-b1920/dh-1920-adbe6b/abf8e061/1700724200/tc0858-t-roc-exterior-white-front-side-view.jpg" alt="T-Roc Hero" />
            </div>
            <div className="intro-text">
                <h1>Experience the new Volkswagen T-Roc</h1>
            </div>
            <div className="Line">
                <span className="line"></span>
            </div>
            <div className="infos">
                <div className="info">
                    <img src="https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B1920_Component.Content_Model_HighlightClusterList_HighlightsList_Highlight_Media_Image_Component/76687-1045068-1045069-highlightsList-728114-media-child-b1920/dh-1101-43f040/99e2ae66/1700724201/tc0864-t-roc-interior-black.jpg" alt="icon" />
                    <div>
                        <h3>Space and practicality</h3>
                        <p>
                            The VW T-Roc combines the versatility of an SUV with ample space and practicality, 
                            ensuring a comfortable and convenient driving experience for urban and adventure seekers alike.
                        </p>
                    </div>
                </div>
                <div className="Line">
                    <span className="line"></span>
                </div>
                <div className="info">
                    <img src="https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B1920_Component.Content_Model_HighlightClusterList_HighlightsList_Highlight_Media_Image_Component/76687-1045068-1045069-highlightsList-728115-media-child-b1920/dh-744-43f040/affa63fe/1700724201/tc0861-t-roc-r-line-white-exterior-driving.jpg" alt="icon" /> 
                    <div>
                        <h3>Performance</h3>
                        <p>
                            The VW T-Roc boasts impressive performance, 
                            delivering powerful acceleration and dynamic handling that elevate the driving experience on both city streets and highways.
                        </p>
                    </div>   
                </div>
                <div className="Line">
                    <span className="line"></span>
                </div>
                <div className="info">
                    <img src="https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B960_Component.Content_Model_HighlightFeatureSection_Item_Content_Gallery_Item_Component/76687-1045076-1045079-728135-content-gallery-728136-b960/dh-1539-e0864f/3451a3e6/1700724204/tc0882-t-roc-exterior-connectivity-man-with-phone.jpg" alt="icon" />
                    <div>
                        <h3>Agility</h3>
                        <p>
                            The VW T-Roc excels in agility, 
                            effortlessly navigating urban streets and winding roads with responsive handling and nimble steering, 
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
                            <span> 187 bhp @ 4000 rpm</span>
                        </li>
                        <li>
                            <span>Maximum torque</span>
                            <span> 320 Nm @ 1600 rpm</span>
                        </li>
                        <li>
                            <span>Turning radius</span>
                            <span> 10.9 m</span>
                        </li>
                        <li>
                            <span>Acceleration (0-100 kph)</span>
                            <span> 7.2s</span>
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
                            <span> 445 L</span>
                        </li>
                        <li>
                            <span>Number of seats</span>
                            <span> 5</span>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="models-text">
                <h1>Choose between our finest T-Roc models</h1>
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
                            image="https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y2Vz87cNBDAt61aEIciQAhxR5-QKjF2_uewQq24IVAlUDn08Gm8_pdN4iS24-zmxAP1IXgPLrwAJy5cEMzyVRrpp8yMx_bMePLuz8PT1R-evH376vt_vvzcmN_rx4fDZT4cDo9I__jtq3d_ffH3sw9__uO9-tl8eBpXL6ZH5PL68UfdiEbBeVbm48MHpDo8ORw--JXw2-3j8Pz56ocZPY7fSCVW88nXopZt1kopc14LVbc5NkrnXGhRyUbmRdvkMieHTw-Hp__iMICsxkljXmg_uTifQHJeDjKbZSDxQpNskt9E65tsnORqxptMgURMGw8cMpYV8FX0nTHK34_-3s4Z8OLF3MwNlNWL6QSIq2IIKHCVjOD5rACVZONK8GwmpbarqQDNWGxks4nfPDtRrBqwF1yVgC42-wIYVHW5wSgklzCakRNCeaYdwpX1pIzIL4RVttuZELDtALdU9QUItJk6E-K5uCHxnSCmSmsQpndXBmIQgo77_n7CB44BRESWyCX6dieX1Lcr2TbZRg4ni5ktCX4509d0OuUcJPqclkvV5RpBasvPlGSdDMtBnZTrasKkNAclNVOSsNW0kepsOV4JQz22oGZbX0pQoau3jBDWVoFGySimVrbwBWGtKBPahDTkoO2WKKYeQtuVoINYbQZ6D5puZJRrzAqmt-x6IqSBF2DGybEWjMcm1mDCbFgPVm0NpdV2yNwNY-U2QsjdCrbHFsklbE0XwV5FRqE7N1SUic6FtRTQ-VAMFfSoWI8E3zeGEJaeQy8ufGPQD5GvDWFnV1KO8-Jb6Cebx4yQyl1D70e-09etACX0AcsTrQtrT7ftV9v3OQx4Kvua0GvBYBA2Nw6G07wsZJOTCqRUODBPGJpQERx3tED53JKtw8ZwGOigib4mX88FDB4zLQkJb8qgGj_AsPlm4TBiqFQOowx6ZDBqbGmHsVdqzAhrs5cwTlGGFhymeo3gaNs4EEKzIUyOjlHCjKOZOczCFnMFDy8OPCJ3A0EmnhGmBj1hbamvH54jeOoXz8HLvqZEetWdW_JUQ6ICeLKYBnyITJAypHyJ4Fft9gICiuKSE0y1ZBCEb5KBIG2hGASFS1dBMH07txAs5vsKoROOJYLKqaVCZwskOKypqMHZhioWJldezhBmv1Aiw7zW9HKCt1VHtmCLXkOIsqaqhKiz84VgmUACnZZsKSyOzkJppZcattA4Cr2vzAmIfSqotnEeBDVm9LqUnLDlJ4RIFxvOEG8DJYOY1JLIc1t5INt15uoCSfQ8MkhKtzRDkhb8nEGawlJYSDG1-wU2HNp4gof5Bg8DDrYuLdQMW8Ca8rKFUBhS_j_2CNgQHsYfPMw_2IXPqKg7tUKUsHeq2D3sfcpFAftq25F9q1zqaL6OysXjT3GV3XT_5pe7rZPRHnmbsTurOmPjsa3YHQ6zxWP0q7o74ag8Hl--eZ19d__yPrtnjN-ho59C7CYXjj_eFt2FqJTvnEFnBnWkYOMk1eBV6gJ5HX94nd2ZYRJIDb316hrUsip3Is_PnlDk_wBRGarxowYAAA.webp?width=648"
                            alt="VW T-Roc R-Line"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                R Line
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The T-Roc R-Line is a sporty version of the Volkswagen T-Roc, featuring stylish design elements like unique bumpers, 
                                side skirts, and R-Line badges. Inside, it offers sport seats and a sport steering wheel, 
                                enhancing both comfort and aesthetics. 
                                It is ideal for those who want a blend of performance and practicality in an SUV.
                                The T-Roc R-Line adds sporty design elements and enhanced styling.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y2Uy8okNRSAe2aYUVyMqIi4lx9hwJPUvRaNzOBO1AFlXMziJ-nKpTqpVFVu1V0rH2gewvcQxBdw5caN4Gn-gcDHuSY5OTnv_j48Tf7w5O3bV9__9-XnSv3RPj4cLsvhcHiE-sdvX73754t_n334y1_v1c9-OjyNyfP5Ebq8fvzRODEl4LwI9fHhA1QdnhwOH_yG-P0mHJ4_T94uzLPpm0HwpD75emikGJqho3XbdlQ0ZSlp0_NqKAVrq2IQLeesLOtPD4enfzJrYWimWbKykn52cTnBQKm_xsJziWsb6G1Jies6B1x83mig0eRKFlCQooKvoh-VEv5-8vd6KYBWL2xve6ibFzMDxpIgCM7SQBCeLgKYGMiUEJ4sFTCpk2qBqana0KYzvXmOvEoSmOFU1MBc7PYVWBDN5QYlGLqESU0UEeoz7hCuxKAyMnpBZRr67YwIrPfAttyYCjjThZCIeCYZkaldgfO5kRq4Mu5KgFvO8bgPtwTuA2UBeGQkY1z0_Y4u2fQJbdvQRwInzQpdI_x6pnCaT6eSwsB8ieGDGEvJYJCanj0iK1qAOAk3tohZSApikGQ8I7YWNxKjrqcrwrYTuiy6vdQgwthuGBdC6gVINhDMKYWufIVIDVZCqpBtCVJvGXNKG_qxBhl40gXIPUi8kRKuUwmU0eTKEdnSGtQ0x3ID5VkXO1BhUXQALbYOy6pHRlyFmBq3IULpEmjDemZAh60bUbryAlOPzjaRIkKqOYw-VLYBwwQxDOFNpxBhNRQMv9CNgLGRpg6xkysqp2X1PZhZl7FA5HqXYPxEd5R8IHgjE1h9wriQDN7WJG1MCZadatMijOQELNelcmBPy7p2YIdZBFQKZolH2C40CEcdBghfarSNrFMULB40ozT7FlvReuyeiMjspgyi8xbs5ru1hImFRiCGICcCk2Q97jAZIaYCkbq9BiznECpwLLcpgsNto0WEbptgdniMGhY2qYXCwnW1NOAZo84ihtNYIOaOeUTqsaEffiB4bBRPwQ-mxQp6Ma4VxgmbsfIeLaoDHyLhGB5yuUbwSbq9gsB4dSkRqlkLCNx3WUEYdCUIBMHWsYGgTL_0EDQr9wRh5I5YhCixl8KoK6x1cKzF1wxOd_hUYXb15Qxh8StWMCypxS8TvG5GtAVdGQkhDi0-R4iyON8kTThuG_G0KOWwOjwL1vOCLlvoHKbeE3Ec3k-UuFhOeohe1gNFbOWJQcSL2TPE2yRBlyzWXELcEg1ouy5UXCBzQ_E3ZiF7HB5ZcnouIM9hrRbIMff7BTZm-3iCh5EGDzMNtjGv2AVbYC3WZQuhUqjcWLdReBh4sHNfbAx2fPW4wD6Kavewm1zyCvak-4l8K1wecXxOwsXjzzEN43z_5te7bRyiPtK-IHdajErHY9-QO2YXzY7RJ3F3YpPw7Pjyzeviu_uX98U9IfSOOZz5cZxdOP54C7oLUQg_OsWcsuKIyaZ5ENaLPAb0Ov7wurhTduYMe3cz4hrEmoQ7oednTzDz_0dTawuCBgAA.webp?width=648"
                            alt="VW T-Roc GTI"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                R
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The T-Roc GTI is Volkswagen's sporty version of the T-Roc, known for its powerful engine, distinctive design, 
                                and dynamic driving experience. It features sporty styling details inside and out, 
                                making it a popular choice for enthusiasts seeking a compact yet thrilling ride.
                                The Volkswagen T-Roc is a compact SUV known for its stylish design, efficient performance, and advanced technology.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y2Uy8odRRCATxISxUVERcS9_AgBq3vuszhIghsRJaDERRY_1TN9mdM9l9OXmXNm5QPlIXwMwY0v4MqNG8E6_IGGj66qrq6uqq53fx-eJn948vbtqx_--_Jzrf-sHx8Ol-VwODwi-eO3r97988W_zz785a_34mffH57G5MX8iExeP_5oGFFLOC1Sf3z4gESHJ4fDB78Rfr9tDs-fJ-8W9Dh-00uR9CdfV6pjkomsyURDaDNEzPOiKKq6wa7q6r5jrM3Zp4fD0z_QOeircVaYF8rPU1w66Dkv8MK9ULS2nt-WUrSuc6Al5o0HDhnLCvgq-kFr6e9Hf2-WDHjxotzLHcrqhboAYpIMAQWmnhE8XySg7NmYCJ4tJFQm6QpQj8VGOrPym-UgiqQAreCyBJxis58Bg6wuN2iJZBJGPXJCKE90Q7gyS8KI_EJIfbudCAGbDnBbK1uAQJPJEyGeihtWvhPEXCkFQtvpykA4ISjc9-8TPnAMICKylUyib3cyWW2bSLf1bWTQGczMDf584tDNXZdz6NHndLyXQ64QenpfVxNWzTjITk5DTZilYiB7xWRH2Gq6SA6mjobg6rEEuZj6QghDvWWEkFoJCntGPpU0hS8IqaJMKB1Wl4My20o-lQvtUIIKIpkM1B4UvUjLqdEJtDXs2hNWR7HocY5sBO2xiTXosGhmwcitobSaAdl0w1hNSAj5lMBYbJFMwtYMtLuKjFwPk6siJ4RUChh8KFwFFiWzSPC20YRwthysuPCNgXWRp4awsysJx-XsW7CzyWNGWMtdgfUj32l3K0AJNmDZ0bmQLL3WJmNtDg670tYEqwQDJ0yuJ3Ddcj6Trp9lIKFExzzBNaEiTHwinfQ5VcwN2GgOjgJdaTf7einAecxUT1jxJgyy8Q7c5hvyOWKoJKEPamQwKmzphtFKOWaE1OwlUDr70MCEa50iTHRtdITQbCPME4VRwoKjXjgswhRLBR6RT47Qp5IR5gY9IbXU0A9_Dzw1iufge1tTBr0cTm1GcCtl3pNGN-BDpE9OWPNzBJ_UtBcQUBSXnKCrcwZB-GbVEHpTSAZB4nmoIGjbLi0Eg_meIAxiomSFQebUS2EwBeU6TFhTNcNkGipVmKfycoKw-DNlMCyppi8TvKkG0gVTWAUh9jWVI0SVnSzBMIEEipZ0azhPFAvlk75o2EIzkes9sUlAtGtBRY2LE6yF6FXZc8KWdwiRHuZOEG-TJIO4yvNKllvigXTXhcsLrMJy-o2rVC0Nj1UJfspgncO5MLDGtd0vsKFrYwcPwwwephlsw3qmLtgC1pSXLYRCk3DDhtr0YdTBLny2IexU9djDPshi17DbNRcF7Mm0I_tWTutAg3OUUzz-HFM_zPdvfr3bhj6aI28zdmfkoE08thW7Q7cYPEaf5F2Ho_R4fPnmdfbd_cv77J4xfocTTfs4zFM4_nQ7dBeilH6YNE7aySM5G-deOi_XIZDV8cfX2Z12s0Dq3c3Ka5DnJKeOLD97Qp7_BxxGo4x8BgAA.webp?width=648"
                            alt="VW T-Roc Style"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Style
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The T-Roc Style is a refined version of the Volkswagen T-Roc, 
                                featuring sleek design, premium interior materials, and added comfort features.
                                The Volkswagen T-Roc is a compact SUV known for its stylish design, efficient performance, and advanced technology.
                                The Volkswagen T-Roc Style offers a blend of modern design, practicality, and advanced features in a compact package.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}

export default Troc;
