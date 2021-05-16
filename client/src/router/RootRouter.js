import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "../page/MainPage";
import NotExistPage from "../page/NotExistPage";
import ConsultingPage from "../page/ConsultingPage";
import ConsultingWritePage from "../page/ConsultingWritePage";
import IntegratePage from "../page/IntegratePage";
import LawyerDetailPage from "../page/LawyerDetailPage";
import LawyerPage from "../page/LawyerPage";
import LoginPage from "../page/LoginPage";
import NoticePage from "../page/NoticePage";
import PostPage from "../page/PostPage";
import SchedulePage from "../page/SchedulePage";
import SpecificDomainPage from "../page/SpecificDomainPage";
import SpecificRegionPage from "../page/SpecificRegionPage";
import VideoPage from "../page/VideoPage";
import PostDetailPage from "../page/PostDetailPage";
import VideoDetailPage from "../page/VideoDetailPage";
import SignupPage from "../page/SignupPage";
import ConsultingDetailPage from "../page/ConsultingDetailPage";
import TestPage from "../page/TestPage";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route
          path="/consulting/specificDomainIds/:specificDomainId"
          component={ConsultingPage}
          exact
        />
        <Route
          path="/consulting/consultingQuestionIds/:consultingQuestionId"
          component={ConsultingDetailPage}
          exact
        />
        <Route path="/consulting-write" component={ConsultingWritePage} exact />
        <Route path="/integrate" component={IntegratePage} exact />
        <Route
          path="/lawyer/specificDomainIds/:specificDomainId"
          component={LawyerPage}
          exact
        />
        <Route
          path="/lawyer/lawyerIds/:lawyerId"
          component={LawyerDetailPage}
          exact
        />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/notice" component={NoticePage} exact />
        <Route
          path="/post/specificDomainIds/:specificDomainId"
          component={PostPage}
          exact
        />
        <Route path="/post/postIds/:postId" component={PostDetailPage} exact />
        <Route path="/schedule" component={SchedulePage} exact />
        <Route path="/specific-domain" component={SpecificDomainPage} exact />
        <Route path="/specific-region" component={SpecificRegionPage} exact />
        <Route
          path="/video/specificDomainIds/:specificDomainId"
          component={VideoPage}
          exact
        />
        <Route
          path="/video/videoIds/:videoId"
          component={VideoDetailPage}
          exact
        />
        <Route path="/notice" component={NoticePage} exact />
        <Route path="/test" component={TestPage} exact />
        <Route path="/signup" component={SignupPage} exact />

        <Route component={NotExistPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
