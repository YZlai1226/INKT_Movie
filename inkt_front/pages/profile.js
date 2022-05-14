import axios from 'lib/axios';
import { useState, useEffect } from 'react';
import { useAuth } from 'hooks/auth';
import { Box, Container, Paper, Typography } from '@mui/material';

export default function Profile() {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    /* const [auth, useAuth] = useAuth(); */
    const { user } = useAuth()

    useEffect(() => {
        console.log('fetching user info');
        axios.get('http://localhost:8000/api/admin/users/' + user?.id)
            .then(function (res) {
                console.log(res);
                setUserProfile(res.data.data)
            })
            .then(() => setLoading(false))
    }, []);

    const favorites = userProfile?.favorites?.map((movie) => <li key={movie?.id}>{movie?.title}</li>)
    console.log(userProfile);
    return (
        <div>
            <Container>
                <Paper>
                    {loading ?
                        'Loading your info...'
                        :
                        <Box>
                            <Typography variant="h4" gutterBottom>
                                My info
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Name: {userProfile?.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Email: {userProfile?.email}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Member since: {userProfile?.created_at}
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                My favorites
                            </Typography>
                            <ul>
                                {favorites}
                            </ul>
                        </Box>
                    }
                </Paper>
            </Container>
        </div>
    )
}