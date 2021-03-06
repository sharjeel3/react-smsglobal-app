import React, { useEffect } from 'react';
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
import { Text } from '../../ui-library/Text';
import { Errors } from '../Errors';

export const SendMessageForm = () => {
  const { onSendClick, hasSettings, isSent, sendError } = useSendMessageHook();

  const { handleChange: reduxChangeHandler, resetForm } = useSendMessageFormHook();

  useEffect(() => {
    if (isSent) {
      resetForm([MESSAGE_FROM_FIELD, MESSAGE_TO_FIELD, MESSAGE_TEXT_FIELD]);
    }
  }, [isSent, resetForm]);

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

  const remainingMessage =
    messageTextState.value.length <= 160
      ? `${160 - messageTextState.value.length} characters left`
      : `${messageTextState.value.length} characters. Message will be sent in ${Math.ceil(
          messageTextState.value.length / 160
        )} parts`;

  const textContentMessage = messageTextState.message ? messageTextState.message : remainingMessage;

  return (
    <Form onSubmit={handleSubmit}>
      <Text heading>Send Message</Text>
      {sendError ? <Errors errors={sendError.errors} /> : null}
      {hasSettings ? (
        <>
          <TextInput
            id="message-from-input"
            label="From - Alphabets only with 3 to 11 characters (optional)"
            pattern="[A-Za-z]{3,11}"
            onChange={handleValueChange(MESSAGE_FROM_FIELD)}
            value={messageFromState.value}
            message={messageFromState.message}
          />
          <TextInput
            id="message-to-input"
            label="To *"
            type="number"
            pattern=".{3,15}"
            required
            onChange={handleValueChange(MESSAGE_TO_FIELD)}
            value={messageToState.value}
            message={messageToState.message}
          />
          <TextAreaField
            id="message-text-input"
            label="Message Text *"
            required
            onChange={handleValueChange(MESSAGE_TEXT_FIELD)}
            value={messageTextState.value}
            message={textContentMessage}
          />
          <Button>Send</Button>
        </>
      ) : (
        <Text>Settings not found. Save your settings before you can send a message.</Text>
      )}
    </Form>
  );
};
