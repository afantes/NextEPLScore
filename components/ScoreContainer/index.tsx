import { ReactNode } from "react";
import { Container } from "@/components/ScoreContainer/styles";

interface ScoreContainerProps {
  children: ReactNode;
}

export const ScoreContainer = ({
  children,
}: ScoreContainerProps): JSX.Element => <Container>{children}</Container>;
