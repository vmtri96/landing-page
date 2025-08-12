declare module "@/components/Services" {
  import type { FC } from "react";

  export interface ServicesProps {
    onTabChange?: (index: number) => void;
  }

  const Services: FC<ServicesProps>;
  export default Services;
}
