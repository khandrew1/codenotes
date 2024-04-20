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

export default function Canvas() {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);

  const onRun = async () => {
    if (!excalidrawAPI) {
      return;
    }

    const elements = excalidrawAPI.getSceneElements();

    if (!elements || !elements.length) {
      return;
    }

    const image = await exportToBlob({
      opts: {
        elements,
        appState: {
          exportWithDarkMode: false,
        },
        files: excalidrawAPI.getFiles(),
        getDimensions: () => {
          return { width: 350, height: 350 };
        },
      },
    });

    console.log(image);
  };

  return (
    <div className="w-screen h-[90vh] flex flex-col items-end gap-3">
      <Excalidraw theme="dark" excalidrawAPI={(api) => setExcalidrawAPI(api)} />
      <button onClick={onRun} className="px-8 py-2 bg-green-500 rounded">
        Run
      </button>
    </div>
  );
}
