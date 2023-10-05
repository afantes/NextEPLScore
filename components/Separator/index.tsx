import { ReactNode } from "react";
import { SeparatorText } from "@/components/Separator/styles";

interface SeparatorProps {
  children: ReactNode;
}

export const Separator = ({ children }: SeparatorProps): JSX.Element => (
  <SeparatorText>{children}</SeparatorText>
);
