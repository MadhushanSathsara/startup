import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="py-20 px-6"
      style={{
        background: `linear-gradient(135deg, oklch(75%_0.08_210)_0%, oklch(80%_0.05_180)_50%, oklch(85%_0.05_160)_100%)`,
      }}
    >
      <h3 className="text-3xl text-gray-900 font-bold mb-12 text-center">
        Contact Us
      </h3>

      <form
        onSubmit={handleSubmit} // attached to fix ESLint
        className="max-w-xl mx-auto relative z-10 bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-300"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-400 px-4 py-3 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none bg-white text-gray-900 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-400 px-4 py-3 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none bg-white text-gray-900 transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-400 px-4 py-3 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none bg-white text-gray-900 transition"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-lg text-white font-semibold bg-blue-500 shadow-lg hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
