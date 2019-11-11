import React from 'react';
import { SendMessageForm } from '../../components/SendMessageForm';
import { Container } from '../../ui-library/Container';

const SendMessageView = () => {
  return (
    <Container>
      <SendMessageForm />
    </Container>
  );
};

// React lazy requires default export
export default SendMessageView;
