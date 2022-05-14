import axios from 'lib/axios';
import { useState, useEffect } from 'react';
import { useAuth } from 'hooks/auth';

export default function Profile() {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    /* const [auth, useAuth] = useAuth(); */
    const { user } = useAuth({ middleware: 'guest' })

    useEffect(() => {
        axios.get('/api/user/' + user?.id)
        .then((res) => setUserProfile(res))
        .then (() => setLoading(false))
    }, []);

    return (
        <div>
            <p>
                {loading ?
                'Loading your info...'
                :
                /* user?.id */
                userProfile?.name
                /* user?.email user?.email_verified_at user?.created_at user?.updated_at */
                }
            </p>
        </div>
    )
}