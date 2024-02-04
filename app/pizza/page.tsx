"use client"
import Image from "next/image";
import './styles.css';
import Pizza from "./Components/pizza";
// import Pizzaa from "./Components/Pizzaa";

export default function Home() {
  return (
    <div className=" flex flex-col gap-y-48 items-center h-screen w-screen">
      <h1 className=" font-bold text-lg h-20 w-screen flex justify-center items-center">PIZZA TIME</h1>
      <Pizza/>
    </div>
  );
}
