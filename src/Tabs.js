import React, { useState, useEffect } from 'react';
import Tab from './Tab';

export default (props) => {
    if (props.children) {
        let tabItems = [];
        if (Array.isArray(props.children)) {
            tabItems = props.children;
        } else {
            tabItems.push(props.children);
        }
        const defaultActiveTab = tabItems[0].props.tabKey;
        const [activeTab, setActiveTab] = useState(defaultActiveTab);
        const getActiveTab = () => {
            tabItems.forEach((tabItem) => {
                if (tabItem.props.active) {
                    setActiveTab(tabItem.props.tabKey);
                }
            });
        };
        useEffect(() => {
            getActiveTab();
        }, [tabItems]);

        return (
            <div className="tabs">
                <ul className="tab-list">
                    {tabItems.map((child, tabIndex) => {
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
                    {tabItems.map((child) => {
                        if (child.props.tabKey !== activeTab) {
                            return undefined;
                        }
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
    return <div></div>;
};
