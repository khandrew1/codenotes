import { GoogleGeminiEffect } from "./ui/Gemini-effect";

const Content = () => {
  return (
    <div className="w-full pt-20">
      <GoogleGeminiEffect
        pathLengths={[0.5, 0.6, 0.7, 0.8, 0.9]}
        title="Your Title"
        description="Your Description"
        className="YourClassName"
      />
    </div>
  );
};

export default Content;
