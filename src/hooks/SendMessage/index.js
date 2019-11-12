import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfig, getFieldValue, getIsMessageSent } from '../../redux/selectors';
import {
  MESSAGE_TO_FIELD,
  MESSAGE_TEXT_FIELD,
  MESSAGE_FROM_FIELD
} from '../../constants/formFields';
import { sendMessage } from '../../redux/actions/message';
import { useNotifyHook } from '../Notify';

export const useSendMessageHook = () => {
  const dispatch = useDispatch();

  const { notifyUser } = useNotifyHook();

  const isSent = useSelector(getIsMessageSent);

  useEffect(() => {
    if (isSent) {
      notifyUser('Message sent');
    }
  }, [isSent]);

  const messageFromValue = useSelector(getFieldValue(MESSAGE_FROM_FIELD));
  const messageToValue = useSelector(getFieldValue(MESSAGE_TO_FIELD));
  const messageTextValue = useSelector(getFieldValue(MESSAGE_TEXT_FIELD));

  const { isConfigReady, hasValidSettings } = useSelector(getApiConfig);

  const handleSendClick = () => {
    dispatch(sendMessage(messageFromValue, messageToValue, messageTextValue));
  };

  return { onSendClick: handleSendClick, hasSettings: isConfigReady && hasValidSettings };
};
