import Image from 'next/image';   
import Header from '@/components/Header';

export default function Home() {
  return (
    <main>
      <div>
        {/* header */}

        <Header/>

        {/* board */}
        <h1>Trello</h1>
      </div>
    </main>
  );
}
