'use client'
import Image from "next/image";
import { NavBar } from "@/components/organisms/navbar/NavBar";
import { MainLayout as Layout } from "@/components/templates/layout";

export default function Home() {
  return (
    <Layout>
      <NavBar/>
      <div>ola</div>
    </Layout>
  );
}
