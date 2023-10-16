import { FC } from "react";

type HCFLayoutProps = {
  header: React.ReactNode;
  footer: React.ReactNode;
  children?: React.ReactNode;
  showGrid?: boolean;
};

export const HCFLayout: FC<HCFLayoutProps> = ({
  header,
  footer,
  children,
  showGrid,
}) => {
  return (
    <div
      className={`grid grid-flow-col grid-rows-[64px_1fr_48px] md:grid-rows-[80px_1fr_64px] w-full min-h-screen overflow-visible bg-lime-100/20`}
    >
      <div className={`${showGrid && "bg-red-200"}`}>{header}</div>

      <div className={`${showGrid && "bg-sky-200"}`}>{children}</div>
      <div className={`${showGrid && "bg-lime-100"}`}>{footer}</div>
    </div>
  );
};
