import React from 'react';
import {render} from '@testing-library/react';
import Header from './index';
import { BrowserRouter } from 'react-router-dom';

test('should have Logo', () => {
    const{getByTestId}=render(<BrowserRouter><Header/></BrowserRouter>);

    const logo=getByTestId("logo-component");
    expect(logo).toBeInTheDocument();

})
