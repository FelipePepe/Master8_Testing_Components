import React from 'react';
import { render, screen } from '@testing-library/react';
import { SayHello } from './say-hello';

describe('SayHello component specs', () => {
  // it('should display the person name', () => {
  //   // Arrange
  //   const person = 'John';

  //   // Act
  //   //const { getByText } = render(<SayHello person={person} />);
  //   render(<SayHello person={person} />);

  //   // Assert
  //   //const element = getByText('Hello John');
  //   const element = screen.getByText('Hello John');
  //   expect(element).not.toBeNull();
  //   expect(element.tagName).toEqual('H1');
  // });

  it('should display the person name using snapshot testing', () => {
    // Arrange
    const person = 'John';

    // Act
    const { asFragment } = render(<SayHello person={person} />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  // it('should display the person name using jest-dom', () => {
  //   // Arrange
  //   const person = 'John';

  //   // Act
  //   //const { getByText } = render(<SayHello person={person} />);
  //   render(<SayHello person={person} />);

  //   //const element = getByText('Hello John');
  //   const element = screen.getByText('Hello John');

  //   // Assert
  //   expect(element).toBeInTheDocument();
  // });

  it('should display the person name using getByRole', () => {
    // Arrange
    const person = 'John';

    // Act
    //const { getByText } = render(<SayHello person={person} />);
    render(<SayHello person={person} />);

    //const element = getByText('Hello John');
    const element = screen.getByRole('heading', { name: 'Hello John' });

    // Assert
    expect(element).toBeInTheDocument();
  });
});
