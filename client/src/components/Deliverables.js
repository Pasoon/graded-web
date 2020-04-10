import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import colors from '../styles/colors';
import styled from 'styled-components';
import Button from '../components/Button';
import DeliverableCard from '../components/DeliverableCard';
import { getDeliverables } from '../actions/deliverable';

const Deliverables = ({
  getDeliverables,
  deliverable: { deliverables, loading }
}) => {
  useEffect(() => {
    getDeliverables();
  }, [getDeliverables]);
  return <div></div>;
};

Deliverables.propTypes = {
  getDeliverables: PropTypes.func.isRequired,
  deliverable: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  deliverable: state.deliverable
});
export default connect(mapStateToProps, { getDeliverables })(Deliverables);
