import variables from "../sass/app.scss"
import Head from "next/head";
import Layout from "../modules/common/components/layout";
import {ColorSchemeContextProvider} from "../context/ColorSchemaContext";


function Application({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <title>BFSY 2022</title>
            </Head>
            <ColorSchemeContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ColorSchemeContextProvider>
        </>

    );
}

export default Application
