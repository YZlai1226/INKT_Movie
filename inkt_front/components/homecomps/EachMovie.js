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

import axios from "lib/axios";
import { useAuth } from "hooks/auth";


export default function EachMovie (props) {
    const image = "https://image.tmdb.org/t/p/original" + props.movie.poster_path
    const ctaText = "CHECK OUT"
    const { user } = useAuth()


    async function addToFavorites(movie_id) {
        const res = await axios.post('http://localhost:8000/api/admin/favorites', {
          "user_id": user?.id,
          "movie_id" : movie_id
        });
        console.log(res);
      }

    return (
        <MuiNextLink href="/movie" underline="none">
            <Card sx={{ maxWidth: 270, height: 550 }}>
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
                                color: "orange",
                            }}
                            fontSize="small"
                        />
                    <span>{props.movie.vote_average}</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {props.movie.genre_ids}
                    </Typography>
                    <button onClick={() => addToFavorites(props.movie.id)}>
                        Fav
                    </button>
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

