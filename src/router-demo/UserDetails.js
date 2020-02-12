import React, {useState, useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {helperService} from './helpers';

export default function UserDetails() {
    const [userDetails, updateUserDetails] = useState({});
    let {userId} = useParams();
    let {search} = useLocation();
    let queryParams = helperService.getQueryParams(search);

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
                <div className="profile-id">{queryParams.profileId}</div>
            </div>
        </div>
    )
}
