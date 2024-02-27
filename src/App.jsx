import Navbar from "./components/Navbar";

export default function App(){
    return (
      <section className="h-screen bg-cover bg-Hero bg-center relative before:absolute before:inset-0 before:bg-black/35 z-10 before:z-20">
          <div className="relative z-30">
            <Navbar />
          </div>
        </section>
    );
}