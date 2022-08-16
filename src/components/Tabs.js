import React, { useState } from 'react';

const tabStyling = { margin: "auto", width: "85%", textAlign: "left"}

const Tabs = (props) =>{
    
    const { allTabs, tabIndex, setTabIndex } = props

    const tabStyle = (index) => {
        if(index === tabIndex){
            return "selectedTab"
        } else {
            return "nonselectedTab"
        }
    }

    const selectedTab = (index) => {
        setTabIndex(index)
    }

    return(
        <div style={tabStyling}>
            {
                allTabs.map((item, index) => (
                    <div
                        className={`tab ${ tabStyle(index) }`}
                        onClick={(e) => selectedTab(index)}
                        style={{cursor:'pointer'}}
                        >
                            {item.label}
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs