// import Excalidraw from "@/components/canvas";

import dynamic from "next/dynamic";

const Excalidraw = dynamic(() => import("@/components/canvas"), {
  ssr: false,
});

const Canvas = () => {
  return (
    <div>
      <Excalidraw />
    </div>
  );
};

export default Canvas;
