import React from "react";

export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
<div className={className}>
      <div className="inline-block">
        <h1 className="text-3xl font-bold hover:text-teal-600 transition-all">
          {text}
        </h1>
      </div>
    </div>
  );
}
