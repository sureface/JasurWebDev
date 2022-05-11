import Head from "next/head";
import {Navigation} from "./Navigation";
import {Footer} from "./Footer";

export function MainLayout({children, title = ''}) {
    return (
        <div>
            <Head>
                <title>{title} | SureFace</title>
                <meta name="keywords" content="ona tili,ingliz tili,rustili,matematika,fizika,kimyo,tarix,tarih"/>
                <meta name="description" content="talaba bo'l qabul boshlandi, qabul qlish, boshlangich talim, ielts 6, ielts 7, ielts 8, ielts 9"/>
                <meta charSet="utf-8" />
            </Head>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}