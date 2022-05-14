import axios from 'lib/axios';
import useState from 'react';

export default function Profile() {
    /* const [user, setUser] = useState(null); */
    const [loading, setLoading] = useState(false);
    /* const [auth, useAuth] = useAuth(); */
    const { user } = useAuth({ middleware: 'guest' })

    /* useEffect(
        axios.get('/api/user/')
        .then((res) => setUser(res))
        .then (() => setLoading(false))
    ) */

    return (
        <div>
            <p>
                {loading ? 'Loading your info...' : user}
            </p>
        </div>
    )
}