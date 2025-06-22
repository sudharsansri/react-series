import { render, screen } from '@testing-library/react';
import Contact from '../main/Contact';   
import React from 'react';
import '@testing-library/jest-dom';

test('Contact component', () => {

    render(<Contact />);
   const heading= screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
});

