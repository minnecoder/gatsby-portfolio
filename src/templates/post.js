import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <PostContainer>
      <GlobalStyle />
      <Header />
      <Helmet title={`Sean Parkin - ${post.frontmatter.title}`} />
      <BlogPost>
        <ReturnLink to="/blog">Back to Blogs</ReturnLink>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <BlogPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPost>
      <Footer />
    </PostContainer>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
`;

const BlogPost = styled.div`
  flex: 1;
  width: 80%;
  margin: 0 auto;
  padding: 12vh 8vh;
  font-family: 'Montserrat', sans-serif;
  border-radius: 10px;
  > h1 {
    margin-top: 2rem;
  }
  > h3 {
    padding: 10px 0;
    font-style: italic;
  }
  
`;

const ReturnLink = styled(Link)`
text-decoration: none;
background: #FF5C31;
padding: .75rem 1rem;
color: black;
`;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background: #ffc331;
  ${'' /* background: white; */}
 
}
`;

const BlogPostContent = styled.div``;
