function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h5 className="text-lg font-semibold mb-2">Find A Flip</h5>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Nikita Kostin
          </p>
        </div>

        <div className="flex justify-center space-x-6">

          <a
            href="/terms"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
