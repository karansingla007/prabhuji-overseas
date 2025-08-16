import React from "react";

function Card({
  icon,
  title,
  customClasses,
  children,
}: {
  icon: React.ReactElement;
  title: string;
  customClasses: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`p-4 rounded-lg shadow-md ${customClasses}`}>
      <div className="flex flex-col items-center">
        <div className="block p-2">{icon}</div>
        <div className="text-xl text-black font-black">{title}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Card;
