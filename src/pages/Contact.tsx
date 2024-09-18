function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-br from-gray-50 to-gray-200 px-6 py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 mb-6">
          We would love to hear from you. Whether you have a question, feedback, or need assistance, feel free to reach out.
        </p>

        <a
          href="mailto:contact@nikitakostin.com"
          className="text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300 font-semibold text-xl py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          contact@nikitakostin.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
