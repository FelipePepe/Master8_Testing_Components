import * as React from 'react';
import { SayHello } from './say-hello';
import { NameEdit } from './name-edit';
import { NameCollection } from './name-collection';
import { Router } from './router';
import { CardComponent } from './card';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <SayHello person="John" />
      <NameEdit />
      <Router />
      <CardComponent
        title="Card title"
        body="Card body"
        onClick={console.log}
      />
    </>
  );
};
