import React from "react";
import MainFooter from "../component/MainFooter";
import { useQuery } from "urql";
import styled from "styled-components";
import VideoDetailHeader from "../component/video/VideoDetailHeader";
import VideoDetailContent from "../component/video/VideoDetailContent";
import DetailLawyerInfo from "../component/common/DetailLawyerInfo";
import OtherVideos from "../component/video/OtherVideos";

const VIDEO_DETAIL_QUERY = (videoId) => ({
  query: `
  query{
    video(id:${videoId}){
      id
      videoType
      title
      content
      videoUrl
      reviewCount
      recommendationCount
      mongoLawyer{
          lawyerName
          companyName
          companyPhoneNumber
          lawyerProfileImageUrl
      }
      lawyer{
        videos{
          id
          title
        }
      }
      createdAt
    }
  }
  `,
});

const VideoDetailPage = (props) => {
  const { videoId } = props.match.params;
  const [{ fetching, data }] = useQuery(VIDEO_DETAIL_QUERY(videoId));

  let body;
  if (fetching) {
    body = <div>Data is loading..</div>;
  } else if (!data.video) {
    body = <div>Something went wrong</div>;
  } else {
    body = (
      <>
        <VideoDetailHeader />
        <VideoDetailContent {...data.video} />
        <DetailLawyerInfo
          lawyerName={data.video.mongoLawyer.lawyerName}
          companyName={data.video.mongoLawyer.companyName}
          companyPhoneNumber={data.video.mongoLawyer.companyPhoneNumber}
          lawyerProfileImageUrl={data.video.mongoLawyer.lawyerProfileImageUrl}
        />
        <OtherVideos
          lawyerName={data.video.mongoLawyer.lawyerName}
          videos={data.video.lawyer.videos}
        />
      </>
    );
  }

  return (
    <StyleContainer>
      {body}
      <MainFooter />
    </StyleContainer>
  );
};

const StyleContainer = styled.div``;

export default VideoDetailPage;
