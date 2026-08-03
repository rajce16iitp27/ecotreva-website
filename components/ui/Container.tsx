import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 lg:px-6 ${className}`}
    >
      {children}
    </Tag>
  );
}
