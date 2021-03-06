import React from 'react';
import { TextInput } from '../../../ui-library/TextInput';
import { Form } from '../../../ui-library/Form';
import { Button } from '../../../ui-library/Button';
import { useSaveAPIFormHook } from '../../../hooks/SaveAPI';
import { getFieldState } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import {
  API_KEY_FIELD,
  API_DISPLAY_NAME_FIELD,
  API_SECRET_FIELD
} from '../../../constants/formFields';
import PropTypes from 'prop-types';
import { Text } from '../../../ui-library/Text';
import { Warning } from './styles';
import { FormModule } from '../../../lib/Form';

export const SaveAPIForm = props => {
  const { onSaveClick, hasSettings } = props;

  const { handleChange: reduxChangeHandler, resetForm, updateFields } = useSaveAPIFormHook();

  const handleValueChange = field => value => {
    reduxChangeHandler(field, value);
  };

  const apiKeyState = useSelector(getFieldState(API_KEY_FIELD));
  const apiSecretState = useSelector(getFieldState(API_SECRET_FIELD));
  const apiDisplayNameState = useSelector(getFieldState(API_DISPLAY_NAME_FIELD));

  const handleSubmit = event => {
    event.preventDefault();
    const keyValidation = FormModule.validate(API_KEY_FIELD, apiKeyState.value);
    const secretValidation = FormModule.validate(API_SECRET_FIELD, apiKeyState.value);
    const displayNameValidation = FormModule.validate(API_DISPLAY_NAME_FIELD, apiKeyState.value);
    if (keyValidation.error || secretValidation.error || displayNameValidation.error) {
      updateFields([
        { field: API_KEY_FIELD, data: { ...keyValidation } },
        { field: API_SECRET_FIELD, data: { ...secretValidation } },
        { field: API_DISPLAY_NAME_FIELD, data: { ...displayNameValidation } }
      ])
      return;
    }
    const saveStatus = onSaveClick();
    if (saveStatus === true) {
      resetForm([API_KEY_FIELD, API_SECRET_FIELD, API_DISPLAY_NAME_FIELD]);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text heading>Add a new API key</Text>
      {hasSettings ? <Warning>Note: It will override existing settings</Warning> : null}
      <TextInput
        id="api-key-input"
        label="API key *"
        onChange={handleValueChange(API_KEY_FIELD)}
        value={apiKeyState.value}
        message={apiKeyState.message}
      />
      <TextInput
        id="api-secret-input"
        label="API secret *"
        onChange={handleValueChange(API_SECRET_FIELD)}
        value={apiSecretState.value}
        message={apiSecretState.message}
      />
      <TextInput
        id="display-name-input"
        label="Display name *"
        onChange={handleValueChange(API_DISPLAY_NAME_FIELD)}
        value={apiDisplayNameState.value}
        message={apiDisplayNameState.message}
      />
      <Button>Save</Button>
    </Form>
  );
};

SaveAPIForm.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  hasSettings: PropTypes.bool.isRequired
};
