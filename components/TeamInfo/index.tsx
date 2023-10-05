import { ReactNode } from "react";
import { Container } from "@/components/TeamInfo/styles";

interface TeamInfoProps {
  children: ReactNode;
}

export const TeamInfo = ({ children }: TeamInfoProps): JSX.Element => (
  <Container>{children}</Container>
);
