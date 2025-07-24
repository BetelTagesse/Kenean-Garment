"use client";

const CommentForm = () => (
  <div className="bg-white p-6 mt-12 rounded-lg shadow">
    <h3 className="text-2xl font-bold mb-4">Leave a Reply</h3>
    <p className="text-gray-500 mb-4 text-sm">
      Your email address will not be published.
    </p>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="  p-2 rounded w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Website"
          className="border p-2 rounded w-full"
        />
      </div>
      <textarea
        placeholder="Comment"
        rows="5"
        className="w-full border p-3 rounded"
      ></textarea>
      <button
        type="submit"
        className="bg-green text-white px-6 py-2 rounded hover:bg-green-700"
      >
        POST COMMENT
      </button>
    </form>
  </div>
);

export default CommentForm;
