import './App.css';
import Tabs from './components/Tabs'
import Content from './components/Content'
import { useState } from 'react';

function App() {
  // An Array containing the (1)tab label and (2) its content
  const tabsArray = [ 
    { label: "Tab 1", content: "Tab 1 content" },
    { label: "Tab 2", content: "Tab 2 content" },
    { label: "Tab 3", content: "Tab 3 content" },
    { label: "Tab 4", content: "Tab 4 content" }
  ];
  
  // State so we can access the tabsArray
  const [allTabs, setAllTabs] = useState(tabsArray);

  // State so we can update which tab is clicked
  const [tabIndex, setTabIndex] = useState(0)

  //allTabs, tabIndex, setTabIndex
  return (
    <div className="App">
      <Tabs 
        allTabs={allTabs} 
        tabIndex={tabIndex} 
        setTabIndex={setTabIndex}
      />
      <Content 
        allTabs={allTabs} 
        tabIndex={tabIndex} 
      />
    </div>
  );
}

export default App;
