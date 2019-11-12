import { useSelector, useDispatch } from 'react-redux';
import { getFieldValue } from '../../redux/selectors';
import {
  MESSAGE_TO_FIELD,
  MESSAGE_TEXT_FIELD,
  MESSAGE_FROM_FIELD
} from '../../constants/formFields';
import { sendMessage } from '../../redux/actions/message';

export const useSendMessageHook = () => {
  const dispatch = useDispatch();

  const messageFromValue = useSelector(getFieldValue(MESSAGE_FROM_FIELD));
  const messageToValue = useSelector(getFieldValue(MESSAGE_TO_FIELD));
  const messageTextValue = useSelector(getFieldValue(MESSAGE_TEXT_FIELD));

  const handleSendClick = () => {
    dispatch(sendMessage(messageFromValue, messageToValue, messageTextValue));
  };

  return { onSendClick: handleSendClick };
};
