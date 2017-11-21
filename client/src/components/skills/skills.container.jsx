import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSkills, fetchRatings } from '../../actions';
import { sortBy } from 'lodash';
import { Skills } from './skills';

class SkillsContainer extends Component {
  componentWillMount() {
    if (!this.props.skills.length) {
      this.props.fetchSkills();
    } else {
      this.setState({ visibleSkills: this.props.skills });
    }

    if (!this.props.ratings.length) {
      this.props.fetchRatings();
    }
  }

  render() {
    return <Skills skills={this.props.skills} />;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.skills.length !== this.props.skills.length) {
      this.setState({ visibleSkills: this.props.skills });
    }
  }
}

const sortSkills = skills =>
  sortBy(skills, [skill => -skill.rating.displayOrder, 'name']);

const mapStateToProps = ({ data }) => ({
  skills: sortSkills(data.skills),
  ratings: data.ratings,
});

const ConnectedSkillsContainer = connect(mapStateToProps, {
  fetchSkills,
  fetchRatings,
})(SkillsContainer);

export { ConnectedSkillsContainer as SkillsContainer };