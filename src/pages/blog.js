import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Media from '../components/Media';

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
  font-family: 'Montserrat', sans-serif;
  color: white;
 
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
  border-radius: 0.5rem;
  background: white;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  > h3 {
    padding: 10px 0;
    color: black;
  }

`;
const IndexLink = styled(Link)`
  color: #ff5c31;
  text-decoration: none;
  // margin: 2rem 0;
  &:hover {
    color: #ffc331;
  }
`;

const EntryLink = styled(Link)`
  color:#FF5C31;
  text-decoration: none;
  &:hover {
    color: #FFC331;
  }
`;

const BlogEntries = styled.div`
  padding: 20px;
  width: 70%;
  color: black;
`;

const BlogEntry = styled.div`
  border-radius: 0.5rem;
  background: white;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  > p {
    padding: 0.7rem 0;
    font-style: italic;
    color: black;
  }
`;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background: #ffc331;
 
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
