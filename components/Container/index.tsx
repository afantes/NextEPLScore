import { ReactNode } from "react";
import { StyledContainer } from "@/components/Container/styles";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps): JSX.Element => (
  <StyledContainer>{children}</StyledContainer>
);
