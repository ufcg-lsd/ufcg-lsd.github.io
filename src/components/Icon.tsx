import React from "react";

export const Icon = ({
  id,
  size,
  width,
  height,
  onClick,
  ...props
}: {
  id: string;
  size?: number;
  width?: number;
  height?: number;
  "aria-label"?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  className?: string;
}) => {
  return (
    <svg
      {...props}
      onClick={onClick}
      width={size ?? width}
      height={size ?? height}
    >
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};
