import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('./Editor'), { ssr: false });

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


export default function Home() {
  return (
    <>
     <DndProvider backend={HTML5Backend}>
     <Editor/>
     </DndProvider>
    {/* <BuilderPage/> */}

    </>
  );
}
