// ExtractCVResultModal.jsx
export default function ExtractCVResultModal({ result, onClose }) {
  if (!result) return null;


  const paragraphs = result.split(/\n\s*\n/);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-5">
      <div className="bg-white p-6 rounded-xl w-full max-w-2xl shadow-lg relative overflow-y-auto max-h-[80vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 font-bold hover:text-gray-800"
        >
          X
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">CV Analysis Result</h2>

        <div className="bg-gray-50 p-6 rounded-lg shadow-inner font-sans text-gray-800 whitespace-pre-line">
          {paragraphs.map((para, i) => (
            <p key={i} className="mb-4 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
