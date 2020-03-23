import React from 'react';

export default (props) => {
    let className = 'tab-item';
    if (props.activeTab === props.label) {
        className += ' tab-item-active';
    }
    const onClick = () => props.onClick(props.label);

    return (
        <li className={className} onClick={onClick}>
            {props.label}
        </li>
    );
}