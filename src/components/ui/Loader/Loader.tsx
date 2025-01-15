import s from './Loader.module.scss'

const Loader: React.FC = () => {
  return <span data-testid="loader" className={s.loader}></span>;
}

export default Loader
