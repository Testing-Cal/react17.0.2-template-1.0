import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Listing from '../listing';

describe("<Home />", () => {
  it("renders <Listing /> component in root", () => {
    render(<Listing />);
  });
});