"use client";
import dynamic from "next/dynamic";
import { exportToBlob } from "@excalidraw/excalidraw";
import { useState } from "react";

const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);

export const readFileAsBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export default function Canvas() {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [data, setData] = useState("");

  const onRun = async () => {
    if (!excalidrawAPI) {
      return;
    }

    const elements = excalidrawAPI.getSceneElements();

    if (!elements || !elements.length) {
      return;
    }

    console.log(elements);

    const img = await exportToBlob({
      elements: excalidrawAPI.getSceneElements(),
      mimeType: "image/jpg",
      files: excalidrawAPI.getFiles(),
    });

    const image = await readFileAsBase64(img);

    console.log(image);

    const response = await fetch("/api/ocr", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image,
      }),
    });

    const data = await response.json();

    setData(data);
  };

  return (
    <div className="w-screen h-screen">
      <div className="h-[90vh] flex flex-col items-end gap-3">
        <Excalidraw
          theme="dark"
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
        />
      </div>
      <div className="w-screen h-[10vh] bg-[#121212] pr-4 flex items-center justify-end">
        <button
          onClick={onRun}
          className="h-1/2 w-24 bg-[#403E6A] text-white rounded"
        >
          Run
        </button>
      </div>
    </div>
  );
}
