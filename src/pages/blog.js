import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import media from '../components/media';

const BlogPage = ({ data }) => (
  <Main>
    <GlobalStyle />
    <Header />
    <Blog id="blog-page">
      <BlogIndex>
        <h3>Index</h3>
        {data.allMarkdownRemark.edges.map((list) => (
          <div key={list.node.id}>
            <IndexLink to={list.node.frontmatter.path}>{list.node.frontmatter.title}</IndexLink>
          </div>
        ))}
      </BlogIndex>

      <BlogEntries>
        {data.allMarkdownRemark.edges.map((blog) => (
          <BlogEntry key={blog.node.id} id={blog.node.frontmatter.title}>
            <h3>
              <EntryLink to={blog.node.frontmatter.path}>{blog.node.frontmatter.title}</EntryLink>
            </h3>

            <p>
              {' '}
              Date:
              {' '}
              {blog.node.frontmatter.date}
            </p>

            <div dangerouslySetInnerHTML={{ __html: blog.node.excerpt }} />
          </BlogEntry>
        ))}
      </BlogEntries>
    </Blog>
    <Footer />
  </Main>
);

BlogPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  color: #38384f;
 
`;

const Blog = styled.div`
  height: 100vh;
  display: flex;
  flex: auto;
  flex-direction: row-reverse;
  justify-content: space-around;
  flex: 1 100%;
  margin-top: 12vh;

`;

const BlogIndex = styled.div`
  width: 15%;
  height: 40%;
  border-style: solid;
  border-color: #d4d4d4;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  > h3 {
    padding: 10px 0;
  }

`;
const IndexLink = styled(Link)`
  color: #18a4e0;
  text-decoration: none;
  // margin: 2rem 0;
  &:hover {
    color: #0253b3;
  }
`;

const EntryLink = styled(Link)`
  color: #18a4e0;
  text-decoration: none;
  &:hover {
    color: #0253b3;
  }
`;

const BlogEntries = styled.div`
  padding: 20px;
  width: 70%;
  
`;

const BlogEntry = styled.div`
  border-style: solid;
  border-color: #d4d4d4;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  > p {
    padding: 0.7rem 0;
    font-style: italic;
  }
`;

const GlobalStyle = createGlobalStyle`
${'' /* @import url('https://fonts.googleapis.com/css2?family=Red+Rose&display=swap');
font-family: "Red Rose", sans-serif; */}
body {
  margin: 0;
  // background: red;
 
}
`;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          html
          id
          excerpt(pruneLength: 500)
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`;

export default BlogPage;
