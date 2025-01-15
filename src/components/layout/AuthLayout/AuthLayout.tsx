import cn from 'clsx'
import s from './AuthLayout.module.scss';

type LayoutProps = React.PropsWithChildren<{
  className?: string;
}>;

/**
 * @description Wrapper for the auth pages
 */
export default function AuthLayout({ children, className }: LayoutProps) {
  return <main className={cn(s.auth, className)}>{children}</main>;
}
