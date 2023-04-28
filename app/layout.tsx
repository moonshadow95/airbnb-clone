import {Nunito} from "next/font/google";
import './globals.css'
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/ClientOnly";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={font.className}>
    <ClientOnly>
      <ToasterProvider/>
      <RegisterModal/>
      <Navbar/>
    </ClientOnly>
    <div className='pb-20 pt-28'>
      {children}
    </div>
    </body>
    </html>
  );
}
