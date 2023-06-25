import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/Header";
import EntryForm from "./components/Entry/EntryForm";
import Footer from "./components/Footer";
import EntriesSection from "./components/Entry/EntriesSection";

function App() {
  return (
    <>
      <Header />
      <EntryForm />
      <EntriesSection />
      <Footer />
    </>
  );
}

export default App;
