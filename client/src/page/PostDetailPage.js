import React from "react";
import MainFooter from "../component/MainFooter";
import { useQuery } from "urql";
import styled from "styled-components";
import PostDetailHeader from "../component/post/PostDetailHeader";
import OtherPosts from "../component/post/OtherPosts";
import RelatedConsultingQuestions from "../component/post/RelatedConsultingQuestions";
import PostDetailLawyerInfo from "../component/post/PostDetailLawyerInfo";

const POST_DETAIL_QUERY = (postId) => ({
  query: `
  query{
    post(id:${postId}){
      id
      postType
      specificDomain{
        domainName
        consultingQuestions{
          id
          title
        }
      }
      title
      mongoLawyer{
        lawyerName
        companyName
        companyPhoneNumber
        lawyerProfileImageUrl
      }
      content
      lawyer{
        posts{
          id
          title
        }
      }
      
    }
  }
  `,
});

const PostDetailPage = (props) => {
  const { postId } = props.match.params;
  const [{ fetching, data }] = useQuery(POST_DETAIL_QUERY(postId));

  let body;
  if (fetching) {
    body = <div>Data is loading..</div>;
  } else if (!data.post) {
    body = <div>Something went wrong</div>;
  } else {
    body = (
      <>
        <PostDetailHeader
          postType={data.post.postType}
          domainName={data.post.specificDomain.domainName}
          lawyerName={data.post.mongoLawyer.lawyerName}
          title={data.post.title}
        />
        <PostDetailLawyerInfo
          lawyerName={data.post.mongoLawyer.lawyerName}
          companyName={data.post.mongoLawyer.companyName}
          companyPhoneNumber={data.post.mongoLawyer.companyPhoneNumber}
          lawyerProfileImageUrl={data.post.mongoLawyer.lawyerProfileImageUrl}
        />
        <OtherPosts
          lawyerName={data.post.mongoLawyer.lawyerName}
          posts={data.post.lawyer.posts}
        />
        <RelatedConsultingQuestions
          consultingQuestions={data.post.specificDomain.consultingQuestions}
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

export default PostDetailPage;
