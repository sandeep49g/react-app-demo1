import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, useParams, useLocation, useRouteMatch} from 'react-router-dom';
import {helperService} from './helpers';
import UserProfile from './UserProfile';

export default function UserDetails() {
    const [userDetails, updateUserDetails] = useState({});
    let {userId} = useParams();
    let {search} = useLocation();
    let queryParams = helperService.getQueryParams(search);
    let searchQuery = new URLSearchParams(search);
    let {path, url} = useRouteMatch();

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        const userData = await fetch(`https://api.github.com/users/${userId}`);
        const userInfo = await userData.json();
        updateUserDetails(userInfo);
    }
    
    return (
        <Router>
            <Link to={`${url}/${userDetails.id}/${userDetails.login}`}>
                <div className='user-profile'>
                    <img src={userDetails.avatar_url} />
                    <div className="info">
                        <div className="name">{userDetails.login}</div>
                        {/* <div className="profile-id">{queryParams.profileId}</div> */}
                        <div className="profile-id">{searchQuery.get("profileId")}:: ABCD</div>
                    </div>
                </div>
            </Link>
            <Switch>
                <Route path={path} exact>
                    <Link to={`${url}/${userDetails.id}/${userDetails.login}`}>
                        <div className='user-profile'>
                            <img src={userDetails.avatar_url} />
                            <div className="info">
                                <div className="name">{userDetails.login}</div>
                                {/* <div className="profile-id">{queryParams.profileId}</div> */}
                                <div className="profile-id">{searchQuery.get("profileId")}</div>
                            </div>
                        </div>
                    </Link>
                </Route>
                <Route path={`${path}/:profileId/:userName`}>
                    <UserProfile />
                </Route>
            </Switch>
        </Router>
    )
}
