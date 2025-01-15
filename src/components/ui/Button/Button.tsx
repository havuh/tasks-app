import Loader from '../Loader';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import s from './Button.module.scss';

export interface ButtonProps extends MuiButtonProps {
  id?: string;
  loader?: boolean;
  text: string;
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
}

const Button: React.FC<ButtonProps> = ({
  id,
  text,
  loader = false,
  onClick = () => null,
  disabled = false,
  ...muiButtonProps
}) => {
  return (
    <MuiButton
      id={id}
      onClick={onClick}
      disabled={loader || disabled}
      data-loading={loader}
      className={s.btn}
      {...muiButtonProps}
    >
      {loader && <Loader />}
      {text}
    </MuiButton>
  );
};

export default Button;
