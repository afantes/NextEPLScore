import { ReactNode } from "react";
import { Name } from "@/components/TeamName/styles";

interface TeamNameProps {
  children: ReactNode;
}

export const TeamName = ({ children }: TeamNameProps): JSX.Element => (
  <Name>{children}</Name>
);
