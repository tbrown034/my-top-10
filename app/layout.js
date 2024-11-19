import "./globals.css";
import Footer from "./UI/Footer";
import Header from "./UI/Header";

export const metadata = {
  title: "My Top 10",
  description: "Generated by Trevor Brown.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen text-white bg-teal-900">
        <Header />
        <main className="flex flex-col items-center justify-center flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
