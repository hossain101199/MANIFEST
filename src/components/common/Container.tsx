import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

const Container = <T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: ContainerProps<T>) => {
  const Component = as || "div";

  return (
    <Component className={cn("container px-4 mx-auto", className)} {...props}>
      {children}
    </Component>
  );
};

export default Container;
