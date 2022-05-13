import {MainLayout} from "../components/MainLayout";
import {Countries} from "../components/Countries";

export default function Home() {
  return (
    <MainLayout title={'Home'}>
        <section>
            <Countries />
        </section>
    </MainLayout>
  )
}
