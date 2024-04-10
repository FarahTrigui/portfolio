import React from "react";

const sizes = {
  xs: "text-xl font-normal",
  lg: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  s: "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  xl: "text-[50px] font-normal md:text-[46px] sm:text-[40px]",
  md: "text-3xl font-normal md:text-[28px] sm:text-[26px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
