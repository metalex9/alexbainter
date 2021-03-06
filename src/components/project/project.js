import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import projectStyles from './project.module.css';

const imageQuery = graphql`
  query {
    blossomIcon: file(relativePath: { eq: "blossom-icon.png" }) {
      ...iconImage
    }

    blossomScreenshot: file(relativePath: { eq: "blossom-screenshot.png" }) {
      ...screenshotImage
    }

    generativeFmIcon: file(relativePath: { eq: "generative-fm-icon.png" }) {
      ...iconImage
    }

    generativeFmScreenshot: file(
      relativePath: { eq: "generative-fm-screenshot.png" }
    ) {
      ...screenshotImage
    }

    corruptionLoopsIcon: file(
      relativePath: { eq: "corruption-loops-icon.png" }
    ) {
      ...iconImage
    }

    corruptionLoopsScreenshot: file(
      relativePath: { eq: "corruption-loops-screenshot.png" }
    ) {
      ...screenshotImage
    }
  }
`;

const Project = ({ id, title, tagLine, siteUrl, sourceUrl, description }) => (
  <div className={projectStyles.container}>
    <StaticQuery
      query={imageQuery}
      render={data => (
        <div className={projectStyles.innerContainer}>
          <div className={projectStyles.screenshot}>
            <a href={siteUrl}>
              <Img fluid={data[`${id}Screenshot`].childImageSharp.fluid} />
            </a>
          </div>
          <div className={projectStyles.text}>
            <h1 className={projectStyles.title}>
              <span className={projectStyles.icon}>
                <Img fluid={data[`${id}Icon`].childImageSharp.fluid} />
              </span>
              {title}
            </h1>
            <h2 className={projectStyles.tagLine}>{tagLine}</h2>
            <p>{description}</p>
            <p>
              <a href={siteUrl}>Site</a> | <a href={sourceUrl}>Source Code</a>
            </p>
          </div>
        </div>
      )}
    />
  </div>
);

export default Project;
