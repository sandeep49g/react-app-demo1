import React from 'react'
import {useParams} from 'react-router-dom';

export default function UserProfile() {
   let {userName, profileId} = useParams();
    return (
        <div className="user-info">
            <h3>{userName} :: {profileId}</h3>
        </div>
    )
}
