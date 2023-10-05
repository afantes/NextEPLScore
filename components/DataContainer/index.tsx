import { ReactNode } from "react";
import { StyledDataContainer } from "@/components/DataContainer/styles";

interface DataContainerProps {
  children: ReactNode;
}

export const DataContainer = ({
  children,
}: DataContainerProps): JSX.Element => (
  <StyledDataContainer>{children}</StyledDataContainer>
);
