interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition"
              open={index === 0}
            >
              <summary className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center font-semibold text-gray-800 cursor-pointer">
                <span>{item.question}</span>
                <span className="text-blue-600 transition-transform duration-200 group-open:rotate-180">v</span>
              </summary>

              <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
