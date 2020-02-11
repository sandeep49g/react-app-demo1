import React from 'react'
import {Link} from 'react-router-dom';

export default function UserInfo(userProfile) {
    return (
        <Link to={`/users/${userProfile.login}`}>
            <div className='user-profile'>
                <img src={userProfile.avatar_url} />
                <div className="info">
                    <div className="name">{userProfile.login}</div>
                    <div className="company">{userProfile.url}</div>
                </div>
            </div>
        </Link>
    )
}
