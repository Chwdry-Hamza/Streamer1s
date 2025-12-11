// src/app/contact/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);

    // Web3Forms access key
    formData.append("access_key", "620c6399-fbd8-4c95-8561-02dfef0b268e");
// 04fc7581-b10b-480a-8638-402d3bd29409
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult({ type: "success", message: "Thank you! Your message has been sent." });
        event.currentTarget.reset();
      } else {
        setResult({ type: "error", message: data.message || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setResult({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-dark_grey/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-800">
      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
            <input
              type="text"
              name="first_name"
              required
              className="w-full px-4 py-3 bg-darkmode border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition text-white placeholder-gray-500"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
            <input
              type="text"
              name="last_name"
              required
              className="w-full px-4 py-3 bg-darkmode border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition text-white placeholder-gray-500"
              placeholder="Doe"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-darkmode border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition text-white placeholder-gray-500"
            placeholder="john@example.com"
          />
        </div>

        {/* New Optional Phone Number Field */}
     {/* Phone Number – Numbers only (no alphabets) */}
<div>
  <label className="block text-sm font-medium text-gray-300 mb-2">
    Phone Number <span className="text-gray-500 font-normal">(optional)</span>
  </label>
  <input
    type="tel"
    name="phone"
    placeholder="+1 (555) 123-4567"
    className="w-full px-4 py-3 bg-darkmode border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition text-white placeholder-gray-500"
    // This pattern blocks letters completely
    pattern="[\d\s\-\+\(\)]*"
    // Optional: also prevent pasting letters
    onKeyDown={(e) => {
      // Allow: backspace, delete, tab, escape, enter, etc.
      if ([8, 9, 27, 13, 46].includes(e.keyCode) ||
          // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
          (e.ctrlKey || e.metaKey) && [65, 67, 86, 88].includes(e.keyCode)) {
        return;
      }
      // Block any key that is not a number or allowed symbol (+, -, space, (, ))
      if (!/[0-9+\-\s\(\)]/.test(e.key)) {
        e.preventDefault();
      }
    }}
    // Bonus: clean pasted value (remove letters if someone pastes text)
    onPaste={(e) => {
      const pasted = (e.clipboardData || (window as any).clipboardData).getData('text');
      const cleaned = pasted.replace(/[^0-9+\-\s\(\)]/g, '');
      if (cleaned !== pasted) {
        e.preventDefault();
        document.execCommand('insertText', false, cleaned);
      }
    }}
  />
</div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            rows={6}
            required
            className="w-full px-4 py-3 bg-darkmode border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition resize-none text-white placeholder-gray-500"
            placeholder="Write your message here..."
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-primary hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-darkmode font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* Success / Error Message */}
        {result && (
          <div className={`text-center mt-4 text-lg font-medium ${result.type === "success" ? "text-green-400" : "text-red-400"}`}>
            {result.message}
          </div>
        )}
      </form>
    </div>
  );
}