// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document'
import i18nextConfig from '../../next-i18next.config'

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale

    return (
      <Html lang={currentLocale as string}>
        <Head />
        <body className="h-full">
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${currentLocale === 'pt' ? 'GTM-5RF75FJ' : 'GTM-P93MLMX'}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html >
    )
  }
}

export default MyDocument
