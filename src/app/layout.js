import Header from "@/components/Header";

import "./globals.css";
import { Inter, Miniver, Poppins } from "next/font/google";
import Footer from "@/components/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900" ],
});

const miniver = Miniver({
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--miniver",
  display: 'auto'

});

const poppins = Poppins({
  subsets: ["latin"], 
  weight: ["100", "300", "500", "400", "600", "700"],

  variable: "--poppins",
});


export const metadata = {
  title: "Resturant",
  description: "A resturant landing page created by Olawuni Emmanuel ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${miniver.variable} ${poppins.variable} pl-8 py-1 md:px-20 md:py-2 `}
      >
        <Header />
        
        {children}
      </body>
        <Footer />
      
    </html>
  );
}
