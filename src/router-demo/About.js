import React from 'react';
import Tabs from '../Tabs';
require('../styles.css');

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <div>
                <Tabs>
                <div tabKey="Gator fdd">
                    See ya later, <em>Alligator</em>!
                </div>
                <div tabKey="Croc, sdd" active>
                    After &apos;while, <em>Crocodile</em>!
                </div>
                <div tabKey="Sarcosuchus, dd">
                    Nothing to see here, this tab is <em>extinct</em>!
                </div>
                </Tabs>
            </div>
        </div>
    )
}
