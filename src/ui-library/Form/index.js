import React from 'react';
import PropTypes from 'prop-types';

export const Form = ({ ...props }) => {
  const { children, onSubmit, ...restProps } = props;

  return (
    <form method="POST" {...restProps} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onSubmit: PropTypes.func
};
