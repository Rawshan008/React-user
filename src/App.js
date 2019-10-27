import React, {Fragment} from 'react';
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import Courses from "./components/Courses/Courses";
import Video from "./components/Video/video";

function App() {
  return (
    <Fragment>
        <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Analysis/>
      <Summary/>
      <RecentProjects/>
      <Courses/>
      <Video/>
    </Fragment>
  );
}

export default App;
