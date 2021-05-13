import React, { useEffect, useState } from "react";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import styled from "styled-components";
import { useQuery } from "urql";
import Pagination from "../component/common/Pagination";
import PostContainer from "../component/post/PostContainer";
import Post from "../component/post/Post";

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
      {body}
      <MainFooter />
    </>
  );
};

const StyleContainer = styled.div``;

export default PostPage;
