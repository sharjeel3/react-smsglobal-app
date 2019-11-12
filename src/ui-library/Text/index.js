import React from 'react';
import PropTypes from 'prop-types';
import { CardText, NormalText, Heading } from './styles';

const getTextComponent = props => {
  const { cardText, heading } = props;
  switch (true) {
    case cardText:
      return CardText;
    case heading:
      return Heading;
    default:
      return NormalText;
  }
};

export const Text = props => {
  const { children, cardText, bold, heading, className, error } = props;

  const C = getTextComponent({ cardText, heading });

  const textProps = {
    bold,
    error,
    ...(className && { className })
  };

  return <C {...textProps}>{children}</C>;
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  cardText: PropTypes.bool,
  heading: PropTypes.bool,
  bold: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string
};
