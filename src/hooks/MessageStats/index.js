import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getSentMessagesList } from '../../redux/selectors';

export const useMessageStatsHook = () => {
  const [period, setPeriod] = useState(24);
  const messages = useSelector(getSentMessagesList);

  const count = {
    sent: 0,
    delivered: 0,
    undelivered: 0,
    failed: 0
  };

  const filteredMessages = messages.filter(message => {
    const messageTimestamp = Math.round(new Date(message.dateTime).getTime() / 1000);
    const currentTimestamp = Math.round(new Date().getTime() / 1000);
    const timeDifference = currentTimestamp - messageTimestamp;
    const periodSeconds = period * 3600;
    const filtered = timeDifference < periodSeconds;
    if (filtered) count[message.status]++;
    return filtered;
  });

  const handlePeriodChange = value => {
    setPeriod(Number(value));
  };

  return {
    onPeriodChange: handlePeriodChange,
    filteredMessages,
    count,
    period
  };
};
