import { useState, useEffect } from "react";
export default function Excalidraw(props) {
  const [Comp, setComp] = useState(null);
  useEffect(() => {
    import("@excalidraw/excalidraw").then((comp) => setComp(comp.Excalidraw));
  }, []);

  return (
    <>
      <div className="excalidraw-component">{Comp && <Comp />}</div>
    </>
  );
}
