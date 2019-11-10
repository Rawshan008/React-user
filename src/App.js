import React, {Fragment} from 'react';
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import Courses from "./components/Courses/Courses";
import Video from "./components/Video/video";
import ClientReview from "./components/ClientReview/ClientReview";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";

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
      <ClientReview/>
      <Footer/>
      <FooterBottom/>
    </Fragment>
  );
}

export default App;
