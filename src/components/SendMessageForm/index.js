import React from 'react';
import { TextInput } from '../../ui-library/TextInput';
import { Form } from '../../ui-library/Form';
import { Button } from '../../ui-library/Button';
import { TextAreaField } from '../../ui-library/TextAreaField';
import { getFieldState } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import {
  MESSAGE_FROM_FIELD,
  MESSAGE_TEXT_FIELD,
  MESSAGE_TO_FIELD
} from '../../constants/formFields';
import { useSendMessageFormHook } from '../../hooks/SendMessageForm';
import { useSendMessageHook } from '../../hooks/SendMessage';

export const SendMessageForm = props => {
  const { onSendClick } = useSendMessageHook();

  const { handleChange: reduxChangeHandler } = useSendMessageFormHook();

  const handleValueChange = field => value => {
    reduxChangeHandler(field, value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSendClick();
  };

  const messageFromState = useSelector(getFieldState(MESSAGE_FROM_FIELD));
  const messageToState = useSelector(getFieldState(MESSAGE_TO_FIELD));
  const messageTextState = useSelector(getFieldState(MESSAGE_TEXT_FIELD));

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        id="message-from-input"
        label="From"
        onChange={handleValueChange(MESSAGE_FROM_FIELD)}
        value={messageFromState.value}
        message={messageFromState.message}
      />
      <TextInput
        id="message-to-input"
        label="To"
        type="number"
        onChange={handleValueChange(MESSAGE_TO_FIELD)}
        value={messageToState.value}
        message={messageToState.message}
      />
      <TextAreaField
        id="message-text-input"
        label="Message Text"
        onChange={handleValueChange(MESSAGE_TEXT_FIELD)}
        value={messageTextState.value}
        message={messageTextState.message}
      />
      <Button>Send</Button>
    </Form>
  );
};

SendMessageForm.propTypes = {};
