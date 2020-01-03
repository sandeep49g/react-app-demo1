import React from 'react'

export default function UserDetails(userProfile) {
    return (
        <div className='user-profile'>
            <img src={userProfile.avatar_url} />
            <div className="info">
                <div className="name">{userProfile.login}</div>
                <div className="company">{userProfile.url}</div>
            </div>
        </div>
    )
}
