import React from 'react'

function UserCard({ user }) {
    return (
        <div>
            <img src={user.picture.medium} alt="" />
            <p>{user.name.first}</p>
            <p>{user.location.country}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default UserCard