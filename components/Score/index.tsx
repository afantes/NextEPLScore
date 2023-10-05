import { ReactNode } from "react";
import { ScoreText } from "@/components/Score/styles";

interface ScoreProps {
  children: ReactNode;
}

export const Score = ({ children }: ScoreProps): JSX.Element => (
  <ScoreText>{children}</ScoreText>
);
