import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { FormError } from '../FormError';
import { Root, Select } from './styles';

export const Dropdown = props => {
  const { options, label, onChange, id, message, value } = props;

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <Root>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} value={value} onChange={handleChange}>
        {options &&
          options.map((option, ii) => {
            return (
              <option key={ii} value={option.value}>
                {option.name}
              </option>
            );
          })}
      </Select>
      <FormError>{message}</FormError>
    </Root>
  );
};

Dropdown.defaultProps = {
  onChange: Function.prototype,
  value: '',
  label: '',
  message: ''
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  message: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
