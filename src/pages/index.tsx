import { createServerSideProps } from '@/lib/data-fetching/ssr'

export const getServerSideProps = createServerSideProps()

export default function HomePage() {
  return <div>Bienvenido</div>
}
