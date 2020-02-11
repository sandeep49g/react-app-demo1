import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function UserDetails() {
    const [userDetails, updateUserDetails] = useState({});
    let {userId} = useParams();
    
    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        const userData = await fetch(`https://api.github.com/users/${userId}`);
        const userInfo = await userData.json();
        updateUserDetails(userInfo);
    }
    
    return (
        <div className='user-profile'>
            <img src={userDetails.avatar_url} />
            <div className="info">
                <div className="name">{userDetails.login}</div>
                <div className="company">{userDetails.url}</div>
            </div>
        </div>
    )
}
