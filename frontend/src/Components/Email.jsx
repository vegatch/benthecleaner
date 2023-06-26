import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

export const Email = (props) => {
  const { url } = props;

  return (
    <Html lang="en">
      <Button href={url}>Send email</Button>
    </Html>
  );
}