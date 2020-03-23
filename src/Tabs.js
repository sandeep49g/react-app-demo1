import React, { useState } from 'react';
import Tab from './Tab';

export default (props) => {
    const [activeTab, onClickTabItem] = useState(props.children[0].props.label);
    return (
        <div className="tabs">
            <ul className="tab-list">
                {props.children.map((child) => {
                    const { label } = child.props;
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClick={onClickTabItem}
                        />
                    );
                })}
            </ul>
            <div className="tab-content">
                {props.children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
      </div>
    );
}