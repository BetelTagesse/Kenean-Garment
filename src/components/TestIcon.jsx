import React from "react";
import { Globe } from "lucide-react";

const TestIconPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center space-y-4">
        <Globe className="w-16 h-16 text-blue-600 dark:text-blue-400" />
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Globe icon (using lucide-react)
        </p>
        <div className="mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            If the globe icon above is not showing, there might be an issue with
            external CSS loading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestIconPage;
