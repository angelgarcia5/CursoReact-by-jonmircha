import React from 'react'
import "./ProfileCard.css"

function ProfileCard({ nombre, edad, ciudad }) {
    return (
        <div className='div-container'>
            <h2 className='h2'>{nombre}</h2>
            <h2 className='h2'>{edad}</h2>
            <h2 className='h2'>{ciudad}</h2>
        </div>
    );
}

export default ProfileCard;