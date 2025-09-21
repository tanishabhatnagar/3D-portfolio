export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-10 px-10 py-3 rounded-full 
                      bg-black/30 backdrop-blur-md shadow-lg border border-white/10">
        <a href="#home" className="text-blue-100 hover:text-cyan-300 transition">
          Home
        </a>
        <a href="#about" className="text-blue-100 hover:text-cyan-300 transition">
          About
        </a>
        <a href="#projects" className="text-blue-100 hover:text-cyan-300 transition">
          Projects
        </a>
        <a href="#contact" className="text-blue-100 hover:text-cyan-300 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
