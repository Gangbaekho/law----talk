import React, { useEffect, useState } from "react";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import styled from "styled-components";
import { useQuery } from "urql";
import Pagination from "../component/common/Pagination";
import PostContainer from "../component/post/PostContainer";
import Post from "../component/post/Post";
// import Carousel from "react-elastic-carousel";
// import Item from "../component/Item";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 1, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 1 },
//   { width: 1200, itemsToShow: 1 },
// ];

const POSTS_QUERY = (specificDomainId, page) => ({
  query: `
  query{
    getCurrentPagePosts(specificDomainId:${specificDomainId},page:${page}){
     posts{
       id
       postType
       title
       content
       postImageUrl
       mongoLawyer{
         lawyerName
         lawyerProfileImageUrl
         title
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

const PostPage = (props) => {
  const { specificDomainId } = props.match.params;
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [{ fetching, data }, getQuery] = useQuery(
    POSTS_QUERY(specificDomainId, currentPage)
  );

  useEffect(() => {
    getQuery();
  }, []);

  let body;
  if (fetching) {
    body = <div>Data is loading..</div>;
  } else if (!data.getCurrentPagePosts) {
    body = <div>Something went wrong</div>;
  } else {
    body = (
      <>
        {/* <div className="carousel-container">
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </Carousel>
        </div> */}
        <PostContainer>
          {data.getCurrentPagePosts.posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </PostContainer>
        <Pagination
          currentPage={currentPage}
          lastPage={data.getCurrentPagePosts.lastPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  }

  return (
    <>
      <MainHeader />
      <StyleContainer>
        <h2 className="title">해결사례 / 법률가이드</h2>
        {body}
      </StyleContainer>

      <MainFooter />
    </>
  );
};

const StyleContainer = styled.div`
  width: 1080px;
  margin: 0 auto;

  .carousel-container {
    width: 1080px;
    margin: 0 auto;
  }
  .title {
    margin: 2rem 0;
    padding: 1rem;
    border-bottom: 1px solid #555;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export default PostPage;
