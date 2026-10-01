import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* page content */}
      </main>
      <Footer />
    </div>
  );
}

export default App
