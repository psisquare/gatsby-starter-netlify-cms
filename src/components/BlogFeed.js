import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogFeed extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <div className="column">
                <div className="card">
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="card-content" style={{padding: 20}}>
                    <div className="content">
                      <div className="has-text-weight-bold is-size-3" style={{ marginBottom: 20}}>
                        <span>{post.frontmatter.title}</span>
                      </div>

                      {/* excerpt */}
                      <div className="" style={{ marginBottom: 20}}>
                        <span>{post.excerpt}</span>
                      </div>

                      <div className="has-text-centered" style={{ marginBottom: 20}}>
                        <Link className="" to={post.fields.slug}>
                          <a class="button is-large">Read more</a>
                          {/* Read more */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

BlogFeed.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogFeedQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 350)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogFeed data={data} count={count} />}
  />
);
