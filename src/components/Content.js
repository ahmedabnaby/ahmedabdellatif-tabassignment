import React from 'react';

const Content = (props) =>{
    
    // Deconstructing these getters from props
    const { allTabs, tabIndex } = props

    return(
        <div className="results">
            { allTabs[tabIndex].content }
        </div>
    )
}

export default Content