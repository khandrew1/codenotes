"use client";
import dynamic from "next/dynamic";
import { exportToBlob } from "@excalidraw/excalidraw";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { gruvboxDark } from "@uiw/codemirror-theme-gruvbox-dark";
import { cpp } from "@codemirror/lang-cpp";
import { MdOutlineCancel } from "react-icons/md";

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
  const [code, setCode] = useState("");

  const onRun = async () => {
    if (!excalidrawAPI) {
      return;
    }

    const elements = excalidrawAPI.getSceneElements();

    if (!elements || !elements.length) {
      return;
    }

    const img = await exportToBlob({
      elements: excalidrawAPI.getSceneElements(),
      mimeType: "image/jpg",
      files: excalidrawAPI.getFiles(),
    });

    const image = await readFileAsBase64(img);

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
    <div className="w-screen h-screen overflow-y-scroll">
      <div className="w-full flex">
        <div className="w-1/2 h-[80vh] flex flex-col items-end gap-3">
          <Excalidraw
            theme="dark"
            excalidrawAPI={(api) => setExcalidrawAPI(api)}
          />
        </div>
        <div className="w-1/2 flex flex-col flex-1 overflow-auto bg-[#292929]">
          <CodeMirror
            extensions={[cpp()]}
            value={code}
            onChange={(value) => setCode(value)}
            theme={gruvboxDark}
          />
        </div>
      </div>
      <div className="w-screen h-[20vh] bg-[#121212] flex items-center justify-between">
        <div className="flex">
          <button
            onClick={onRun}
            className="h-12 w-24 bg-[#403E6A] text-white rounded mx-5"
          >
            Convert
          </button>
          <button
            onClick={onRun}
            className="h-12 w-24 bg-[#403E6A] text-white rounded"
          >
            Run
          </button>
        </div>
        <div className="w-1/2 h-[15vh] bg-[#292929] rounded-md !mr-0 flex justify-between items-center">
          <div className="">
            <p className="p-5 text-white">console</p>

            <p className="text-gray-400 px-5">{data}</p>
          </div>

          <MdOutlineCancel
            className="text-gray-400 text-3xl mx-5 hover:text-red-500 hover:cursor-pointer"
            onClick={() => setData("")}
          />
        </div>
      </div>
    </div>
  );
}
