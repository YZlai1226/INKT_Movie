// import Image from "next/image"

// export default function EachMovie (props) {
//     const image = "https://image.tmdb.org/t/p/original" + props.movie.poster_path
//     return (
//     <div>
//           <Image src={image} alt="movie poster" width={170} height={210} layout="fixed" />
//           <p>Name: {props.movie.title}</p>
//           <p>Released_date: {props.movie.release_date}</p>
//           <p>Rating: {props.movie.vote_average}</p>
//     </div>
//     )
// }


import Image from "next/image";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import MuiNextLink from "../MuiNextLink";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';


export default function EachMovie (props) {
    const image = "https://image.tmdb.org/t/p/original" + props.movie.poster_path
    const ctaText = "CHECK OUT"
    return (
        <MuiNextLink href="/movie" underline="none">
            <Card sx={{ maxWidth: 270, height: 530 }}>
                <CardMedia sx={{ height: 350 }} image={image} title={props.movie.title} />
                <CardContent>
                    <Typography component="h5" variant="h5" gutterBottom>
                    {props.movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {props.movie.release_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <StarRateIcon
                            sx={{
                                color: "orange"
                            }}
                            fontSize="small"
                        />
                    <span>{props.movie.vote_average}</span>
                    </Typography>
                </CardContent>
                {/* <CardActions disableSpacing>
                    <MuiNextLink href="/movie" underline="none">
                      <Button variant="contained" size="medium">
                        {ctaText}
                      </Button>
                    </MuiNextLink>
                </CardActions> */}
            </Card>
        </MuiNextLink>
    )
}

