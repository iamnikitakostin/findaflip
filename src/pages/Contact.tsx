function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">Feel free to reach out to us at:</p>
      <a 
        href="mailto:contact@nikitakostin.com"
        className="text-indigo-600 font-semibold text-xl hover:underline"
      >
        contact@nikitakostin.com
      </a>
    </div>
  );
}

export default Contact;
