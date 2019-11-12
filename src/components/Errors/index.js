import React from 'react';
import PropTypes from 'prop-types';
import { List } from './styles';
import { Text } from '../../ui-library/Text';

export const Errors = props => {
  const { errors } = props;

  const allErrors = Object.keys(errors).map(errorType => {
    return errors[errorType].errors.map(e => e);
  });

  const flatErrors = [].concat(...allErrors);

  return (
    <List>
      {flatErrors.map((err, ii) => {
        return (
          <li key={ii}>
            <Text error>{err}</Text>
          </li>
        );
      })}
    </List>
  );
};

Errors.propTypes = {
  errors: PropTypes.any
};
