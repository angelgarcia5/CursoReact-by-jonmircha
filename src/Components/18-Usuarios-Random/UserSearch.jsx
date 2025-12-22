import React, { useState } from 'react'
import UserCard from './UserCard';



function UserSearch() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        setUser(null);
        setLoading(true);
        try {
            let res = await fetch("https://randomuser.me/api/");
            let data = await res.json();
            setUser(data.results[0]);
            setLoading(false);

        } catch (error) {
            console.log("Error no se pudieron obtener los usuarios")
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Api para generar Usuario aleatorio</h1>
            <button onClick={getUser}>Da click Aqui para obtener Usuario</button>
            {loading && <p>Cargando...</p>}

            {!loading && user && <UserCard user={user} />}
        </div>
    )
}

export default UserSearch