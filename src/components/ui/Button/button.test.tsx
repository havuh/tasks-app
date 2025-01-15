import { render, screen, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    text: 'Click Me',
    loader: false,
    onClick: jest.fn(),
  };

  it('should render the button with the provided text', () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('should trigger onClick when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button {...defaultProps} onClick={onClickMock} />);
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should disable the button when loader is true', () => {
    render(<Button {...defaultProps} loader={true} />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeDisabled();
  });

  it('should show the Loader component when loader is true', () => {
    render(<Button {...defaultProps} loader={true} />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should apply additional props to the MuiButton', () => {
    render(<Button {...defaultProps} color="primary" />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('MuiButton-root');
  });

  it('should disable the button when disabled prop is true', () => {
    render(<Button {...defaultProps} disabled={true} />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeDisabled();
  });
});
