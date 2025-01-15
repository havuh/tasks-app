import Navbar from '../Navbar';
import cn from 'clsx';
import s from './Layout.module.scss';

type LayoutProps = React.PropsWithChildren<{
  className?: string;
}>;

/**
 * @description Wrapper for the main content of the app. It includes the Navbar component
 */
export default function Layout({ children, className }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={cn(s.root, className)}>{children}</main>
    </>
  );
}
