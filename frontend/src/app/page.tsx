import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="px-10 lg:px-20">
        <p>Hello World</p>
      </div>
      <Footer />
    </>
  );
}
