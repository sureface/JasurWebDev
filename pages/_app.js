import NextJsProgress from "nextjs-progressbar";
import '../styles/Globals.scss';
import '../styles/Main.scss';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return(
      <>
            <NextJsProgress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
          <Component {...pageProps} />
      </>
  )
}

export default MyApp
