import React from 'react';

export default (props) => {
    let className = 'tab-item';
    if (props.activeTab.toLowerCase() === props.tabKey.toLowerCase()) {
        className += ' tab-item-active';
    }
    const onClickHandler = () => props.onClickHandler(props.tabKey);

    return (
        <li className={className} onClick={onClickHandler}>
            {props.tabKey}
        </li>
    );
}