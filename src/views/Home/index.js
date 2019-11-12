import React  from 'react';
import { Text } from '../../ui-library/Text';
import { useSelector } from 'react-redux';
import { getApiConfig } from '../../redux/selectors';
import { ContentLoader } from '../../ui-library/ContentLoader';
import { Container } from '../../ui-library/Container';

const HomeView = () => {
  const { isConfigReady, hasValidSettings } = useSelector(getApiConfig);

  if (typeof isConfigReady === 'undefined') return <ContentLoader />;

  const message =
    isConfigReady && hasValidSettings
      ? `We already have your settings saved here. Start by sending a message.`
      : 'Start by saving your settings first.';

  return (
    <Container>
      <Text heading>Welcome to SMSGlobal</Text>
      <Text>{message}</Text>
    </Container>
  );
};

// React lazy requires default export
export default HomeView;
