import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { FormError } from '../FormError';
import { Root, Input } from './styles';

export const TextInput = ({ ...props }) => {
  const { onChange, type, value, label, id, message, hasError } = props;

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <Root>
      <Label htmlFor={id}>{label}</Label>
      <Input hasError={hasError} type={type} id={id} value={value} onChange={handleChange} />
      <FormError>{message}</FormError>
    </Root>
  );
};

TextInput.defaultProps = {
  onChange: Function.prototype,
  type: 'text',
  value: '',
  label: '',
  message: ''
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  message: PropTypes.string,
  hasError: PropTypes.bool
};
