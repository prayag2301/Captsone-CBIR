import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image1 from '../assets/asset1.jpg'
import image2 from '../assets/asset2.jpg'

export default function ActionAreaCard() {
    return (
        <div className='.disp'>
            <Card sx={{ maxWidth: 1000, backgroundColor: "#293749" }}>
                <CardActionArea style={{ padding: '50px' }}>
                    <CardMedia
                        component="img"
                        height="750"
                        image={image1}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="white">
                            CBMIR
                        </Typography>
                        <Typography variant="body2" color="white" style={{ textAlign: 'justify' }}>
                            The rate at which medical images are produced everyday is increasing exponentially.
                            Such images are a rich source of information about shape, color and texture,
                            which can be exploited to improve the diagnosis and ultimately the treatment of
                            complex diseases. Alzheimer's Disease (AD) has been successfully associated with structural
                            changes in the brain.
                            However, with the volume of Magnetic Resonance Imaging (MRI) scans growing at a rapid rate,
                            it is becoming increasingly difficult to perform a search over these scans.
                            <p><b>
                                Research has shown that the performance of clinicians has improved through
                                the use of content-based image retrieval systems. Hence we have developed a prototype to emulate
                                CBMIR to assist medical professionals by providing relevant information pertainining to Alzheimer patients
                            </b></p>


                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
            <br></br>
            <Card sx={{ maxWidth: 1000, backgroundColor: "#293749" }} >
                <CardActionArea style={{ padding: '90px' }}>
                    <Typography variant="h4" color="white" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        An overview of Alzheimer detection model


                    </Typography>
                    <CardMedia
                        component="img"
                        height="360"
                        image={image2}
                        alt="green iguana"
                    />
                </CardActionArea>

            </Card>
        </div>

    );
}