import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charset="UTF-8"/>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport"/>
        <title> &mdash; Globaltix</title>

      
        <link rel="stylesheet" href="https://demo.getstisla.com/assets/modules/bootstrap/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://demo.getstisla.com/assets/modules/fontawesome/css/all.min.css"/>

        <link rel="shortcut icon" href="https://getstisla.com/landing/stisla.png"/>
        <link rel="stylesheet" href="https://demo.getstisla.com/assets/css/style.css"/>
        <link rel="stylesheet" href="https://demo.getstisla.com/assets/css/components.css"/>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"/>
        </Head>
        <body>
          <Main />
          <NextScript />
            <script src="https://demo.getstisla.com/assets/modules/jquery.min.js"></script>
            <script src="https://demo.getstisla.com/assets/modules/popper.js"></script>
            <script src="https://demo.getstisla.com/assets/modules/tooltip.js"></script>
            <script src="https://demo.getstisla.com/assets/modules/bootstrap/js/bootstrap.min.js"></script>
            <script src="https://demo.getstisla.com/assets/modules/nicescroll/jquery.nicescroll.min.js"></script>
            <script src="https://demo.getstisla.com/assets/modules/moment.min.js"></script>
            <script src="https://demo.getstisla.com/assets/js/stisla.js"></script>
            <script src="https://demo.getstisla.com/assets/js/scripts.js"></script>
            <script src="https://demo.getstisla.com/assets/js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument