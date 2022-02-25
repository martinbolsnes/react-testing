import { render, screen, fireEvent } from '@testing-library/react';
import App, { hello } from './App';
import Header from './Header';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const testElement = screen.getByText(/save to reload./i);
  expect(testElement).toBeInTheDocument();
});

test('Checking if hello function works', () => {
  render(<App />);
  expect(hello()).toBe('Hello');
});

describe('header', () => {
  it('Check if H1 works', () => {
    render(<Header />);

    const h1Elm = screen.getByText(/Hello World/i);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1Elm).toBeInTheDocument();
    expect(h1).toBeInTheDocument();

    console.log(h1Elm);
  });

  it('Check the button', () => {
    render(<Header />);
    const BtnElm = screen.getByText('Not open');
    expect(BtnElm).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/Open is true/i)).toBeInTheDocument();
  });
});
