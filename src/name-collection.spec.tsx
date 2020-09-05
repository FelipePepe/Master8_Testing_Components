import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { NameCollection } from './name-collection';
import * as api from './name-api';

import { UserEdit } from './user-edit';

const renderWithRouter = (component) => {
  return {
    ...render(
      <HashRouter>
        <Switch>
          <Route path="/users/:name" component={UserEdit} />
        </Switch>
        {component}
      </HashRouter>
    ),
  };
};

describe('NameCollection component specs', () => {
  it('should display a list with one item when it mounts the component and it resolves the async call', async () => {
    // Arrange
    const getNameCollectionStub = jest
      .spyOn(api, 'getNameCollection')
      .mockResolvedValue(['John Doe', 'Jane Smith']);

    // Act
    // render(<NameCollection />);
    renderWithRouter(<NameCollection />);

    // Query se utiliza para testear un posible elemento que igual no existe.
    //const itemsBeforeWait = screen.queryAllByRole('listitem');

    // get no permite busqueda asincrona, para eso se utiliza el find.
    //const items = await screen.findAllByRole('listitem');

    // Assert
    // expect(items).toHaveLength(1);
    // expect(items[0].textContent).toEqual('John Doe');
    // expect(getNameCollectionStub).toHaveBeenCalled();

    //expect(itemsBeforeWait).toHaveLength(0);

    const selectedUserElement = await screen.findByRole('link', {
      name: 'Jane Smith',
    });

    userEvent.click(selectedUserElement);

    const userEditElement = screen.getByRole('heading', {
      //name: 'User name: Jane Doe',
      name: /Jane Doe/i,
    });

    expect(userEditElement).toBeInTheDocument();
  });
});
