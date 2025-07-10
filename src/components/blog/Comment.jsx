import { MessageSquare } from "lucide-react";

const Comment = ({ author, avatar, text }) => (
  <div className="flex items-start space-x-4 mb-6">
    <img
      src={avatar}
      alt={author}
      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
    />
    <div className="flex-grow bg-gray-50 p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold text-gray-800">{author}</h4>
      <p className="text-gray-600 text-sm mt-1">{text}</p>
      <button className="text-green-600 text-sm mt-2 flex items-center hover:underline">
        <MessageSquare size={14} className="mr-1" /> Reply
      </button>
    </div>
  </div>
);

export default Comment;
