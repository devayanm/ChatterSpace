import React, { useState } from "react";

export default function FaqWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const faqList = [
    {
      question: "What is ChatterSpace?",
      answer:
        "ChatterSpace is a real-time chat application where users can communicate, collaborate, and share messages instantly.",
    },
    {
      question: "Do I need an account to use ChatterSpace?",
      answer:
        "Yes, you need to sign up before you can access chat features. Once signed up, you can log in and start chatting.",
    },
    {
      question: "Is my data safe on ChatterSpace?",
      answer:
        "Yes, we prioritize security. All messages are stored securely and user data is encrypted.",
    },
    {
      question: "Can I reset my password?",
      answer:
        "Absolutely. Just click on 'Forgot Password' on the login page to reset your password.",
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          <i className="fa-solid fa-message"></i>
        </button>
      </div>

      {/* FAQ Box */}
      {isOpen && (
        <div
          className="
            fixed bottom-20 z-50 w-[480px] max-w-[90vw] max-h-[70vh] overflow-y-auto 
            bg-white border border-gray-300 shadow-xl rounded-lg p-4
            left-6 
            max-[400px]:left-1/2 max-[400px]:-translate-x-1/2
          "
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-indigo-600">FAQs</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
          </div>
          <div className="space-y-4">
            {faqList.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-3 rounded-lg border border-gray-200"
              >
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.question}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
