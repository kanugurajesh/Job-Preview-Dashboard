import List from "./components/List";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-screen">
      <Navbar />
      <List />
    </main>
  );
}