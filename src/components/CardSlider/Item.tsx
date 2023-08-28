import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';
import { Icon } from '@iconify/react';

const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(2),
      }
  }));

const MovieCard = ( {movie}: any ) => {
    return (
        <Grid container 
            sx={{ width: 1174, 
                height: 500, 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative", 
                backgroundColor: "#1f293db3", 
                top: "120px", 
                left: "19%",
                padding: "50px 30px 30px 30px" }}
        >
            <Grid item xs={8} sx={{height: "100%"}}>
                <CardInfo sx={{display: "flex", flexDirection: "column", gap: "30px"}}>
                    <Typography variant="h2" gutterBottom component="div" color="white">
                        {movie.title}
                    </Typography>
                    <Box sx={{display: "flex", gap: "50px"}}>
                        <Button variant="outlined" 
                            sx={{
                            '&.MuiButtonBase-root': {
                                color: '#FF8036',
                                fontSize: "20px",
                                border: 'none',
                            },
                            '&:hover': {
                                backgroundColor: 'transparent',
                                border: 'none',
                                boxShadow: 'none',
                            }
                            }}
                        >
                            <Icon icon="ph:play-fill" fontSize='3rem' className="mr-[15px] border border-[#FF8036] rounded-[50%] p-[10px]" />
                            WATCH TRAILER
                        </Button>
                        <Button variant="outlined" 
                            sx={{
                            '&.MuiButtonBase-root': {
                                color: '#FF8036',
                                fontSize: "20px",
                                border: 'none',
                            },
                            '&:hover': {
                                backgroundColor: 'transparent',
                                border: 'none',
                                boxShadow: 'none',
                            }
                            }}
                        >
                            <Icon icon="ph:heart-fill" fontSize='3rem' className="mr-[15px] border border-[#FF8036] rounded-[50%] p-[10px]" />
                            ADD TO FAVOURITE
                        </Button>
                    </Box>
                    <Box sx={{display: "flex", gap: "50px", padding: "20px"}}>
                        <Typography variant="h5" gutterBottom component="div" color="white">
                            Release: {movie.runTime}
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div" color="white">
                            Release: {movie.releaseDate}
                        </Typography>
                    </Box>
                </CardInfo>
            </Grid>

            <Grid item xs={4} sx={{height: "345px"}}>
                <Box sx={{ position: 'relative', height: "100%"} }>
                    <CardMedia
                        component="img"
                        image={movie.image}
                        alt={movie.title}/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MovieCard;