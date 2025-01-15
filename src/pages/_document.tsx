import {
  type DocumentContext,
  type DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v14-pagesRouter'
import { documentGetInitialProps, DocumentHeadTags } from '@mui/material-nextjs/v14-pagesRouter'

type Props = DocumentProps & DocumentHeadTagsProps

export default function MyDocument({ locale, emotionStyleTags }: Props) {
  return (
    <Html lang={locale ?? 'es'}>
      <Head>
        <DocumentHeadTags emotionStyleTags={emotionStyleTags} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx)

  return finalProps
}
