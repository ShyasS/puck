import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Editor from "./Editor";
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
