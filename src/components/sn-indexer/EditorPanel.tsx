"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ExecuteQueryResponse } from "@/models/app.model";
import { isNil } from "lodash";
import DataViewManager from "./DataViewmanager";

const EditorPanel = () => {
  const [query, setQuery] = useState<string>(
    "SELECT * FROM table_name LIMIT 10"
  );
  const [result, setResult] = useState<ExecuteQueryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const executeQuery = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/indexers/query",
        { query },
        {
          headers: {
            Authorization: `Bearer YOUR_AUTH_TOKEN`,
          },
        }
      );

      setResult(response?.data?.data || null);
    } catch (error) {
      console.error("Error executing query:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">SQL Editor</h2>
      <Editor
        height="40%"
        defaultLanguage="sql"
        value={query}
        onChange={(value) => setQuery(value || "")}
        theme="vs-dark"
      />
      <Button
        onClick={executeQuery}
        className="mt-4 self-start"
        disabled={isLoading}
      >
        {isLoading ? "Executing..." : "Run Query"}
      </Button>
      <div className="mt-4 flex-1 overflow-auto border-t border-gray-700">
        {isNil(result) ? (
          <div>No results found.</div>
        ) : (
          <DataViewManager responseQuery={result} />
        )}
      </div>
    </div>
  );
};

export default EditorPanel;
