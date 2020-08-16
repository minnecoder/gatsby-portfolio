import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ node, imgSrc }) => (
  <div>
    <div>
      <img src={imgSrc} alt="Project" style={{ maxWidth: '100%' }} />
    </div>
    <div>
      <h3>{node.name}</h3>
      <p>{node.description}</p>
      <p>
        <strong>Technologies Used: </strong>
        {node.tech}
      </p>
      <div>
        <a href={node.website}>Website</a>
        <a href={node.github}>GitHub</a>
      </div>
    </div>
  </div>
);
export default ProjectItem;

ProjectItem.propTypes = {
  node: PropTypes.objectOf(PropTypes.string).isRequired,
  imgSrc: PropTypes.string.isRequired,
};
