import Image from 'next/image';
import Header from '@/components/Header';
import Board from '@/components/Board';

export default function Home() {
  return (
    <main>
      <div>
        {/* header */}

        <Header />

        {/* board */}
        <Board />
        <h1>Trello</h1>
      </div>
    </main>
  );
}
