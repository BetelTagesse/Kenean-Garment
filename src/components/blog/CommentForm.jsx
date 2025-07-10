const CommentForm = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Leave a Reply</h3>
    <p className="text-gray-600 mb-6">
      Your email address will not be published.
    </p>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Website"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <textarea
        placeholder="Comment"
        rows="6"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      ></textarea>
      <button
        type="submit"
        className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
      >
        POST COMMENT
      </button>
    </form>
  </div>
);

export default CommentForm;
