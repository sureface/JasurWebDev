import Link from "next/link"

export default function errorPage() {
    return (
        <>
            <h1>Error 404</h1>

            <p>Please <Link href={'/'}><a>go</a></Link> back safety</p>
        </>
    )
}