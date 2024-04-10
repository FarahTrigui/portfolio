import React from "react";

const sizes = {
  s: "text-[64px] font-bold md:text-5xl",
  md: "text-[95px] font-semibold md:text-5xl",
  xs: "text-[47px] font-bold md:text-[43px] sm:text-[37px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-urbanist ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
