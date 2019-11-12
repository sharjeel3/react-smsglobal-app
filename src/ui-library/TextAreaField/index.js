import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { FormError } from '../FormError';
import { Root, TextArea } from './styles';

export const TextAreaField = ({ ...props }) => {
  const { onChange, type, value, label, id, message, hasError, required } = props;

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <Root>
      <Label htmlFor={id}>{label}</Label>
      <TextArea
        required={required}
        hasError={hasError}
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
      />
      <FormError>{message}</FormError>
    </Root>
  );
};

TextAreaField.defaultProps = {
  onChange: Function.prototype,
  type: 'text',
  value: '',
  label: '',
  message: ''
};

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  message: PropTypes.string,
  hasError: PropTypes.bool,
  required: PropTypes.bool
};
