import {MainLayout} from "../components/MainLayout";
import { useRouter } from 'next/router'

export default function Home() {

    const router = useRouter();

    return(
        <MainLayout title={router.query.id}>
            <h1>Somewhere is here {router.query.id}</h1>
        </MainLayout>
    )
}