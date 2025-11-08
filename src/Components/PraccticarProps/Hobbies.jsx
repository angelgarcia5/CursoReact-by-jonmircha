import React from 'react'

function Hobbies({ hobbies }) {
    return (
        <ul>
            {hobbies.map((hobbi, index) => {
                return (
                    <li key={index}>{hobbi}</li>
                )
            })}
        </ul>
    );
}

export default Hobbies;