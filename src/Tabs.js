import React, { useState, useEffect } from 'react';
import Tab from './Tab';

export default (props) => {
    const defaultActiveTab = props.children[0].props.tabKey;
    let [activeTab, setActiveTab] = useState(defaultActiveTab);
    const getActiveTab = (tabItems) => {
        tabItems.forEach((tabItem) => {
            if (tabItem.props.active) {
                setActiveTab(tabItem.props.tabKey);
            }
        });
    }
    useEffect(() => {
        getActiveTab(props.children);
    }, [props.children]);

    return (
        <div className="tabs">
            <ul className="tab-list">
                {props.children.map((child, tabIndex) => {
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={tabIndex}
                            tabKey={child.props.tabKey}
                            onClickHandler={setActiveTab}
                        />
                    );
                })}
            </ul>
            <div className="tab-content">
                {props.children.map((child) => {
                    if (child.props.tabKey !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
      </div>
    );
}