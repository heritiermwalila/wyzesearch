import AppProvider from '../src/app/context/AppProvider'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
}

export default App
