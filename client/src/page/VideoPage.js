import React, { useState, useEffect } from "react";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import { useQuery } from "urql";
import Pagination from "../component/common/Pagination";
import Video from "../component/video/Video";

const VIDEOS_QUERY = (specificDomainId, page) => ({
  query: `
  query{
    getCurrentPageVideos(specificDomainId:${specificDomainId},page:${page}){
      videos{
        id
        videoThumbNailUrl
        title
        mongoLawyer{
          lawyerName
        }
      }
      currentPage
      hasNextPage
      hasPreviousPage
      nextPage
      previousPage
      lastPage
    }
  }
  `,
});

const VideoPage = (props) => {
  const { specificDomainId } = props.match.params;

  const [currentPage, setCurrentPage] = useState(1);

  const [{ fetching, data }, getQuery] = useQuery(
    VIDEOS_QUERY(specificDomainId, currentPage)
  );

  useEffect(() => {
    getQuery();
  }, []);

  let body;
  if (fetching) {
    body = <div>Data is loading..</div>;
  } else if (!data.getCurrentPageVideos) {
    body = <div>Something went wrong</div>;
  } else {
    body = (
      <>
        {data.getCurrentPageVideos.videos.map((video) => (
          <Video key={video.id} {...video} />
        ))}
        <Pagination
          currentPage={currentPage}
          lastPage={data.getCurrentPageVideos.lastPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  }

  return (
    <>
      <MainHeader />
      {body}
      <MainFooter />
    </>
  );
};

export default VideoPage;
