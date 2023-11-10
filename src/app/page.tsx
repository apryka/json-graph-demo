import Link from 'next/link';
import CustomGraph from './CustomGraph';

export default async function Home() {
  const res = await fetch('https://swapi.dev/api/species/');
  const data = (await res.json());
  const json = JSON.stringify(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/test'}>go to test</Link>
      <CustomGraph data={data} />
    </main>
  )
}
