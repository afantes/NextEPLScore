import { ReactNode } from "react";
import { StyledDateContainer } from "@/components/DateContainer/styles";

interface DateContainerProps {
  children: ReactNode;
}

export const DateContainer = ({
  children,
}: DateContainerProps): JSX.Element => (
  <StyledDateContainer>{children}</StyledDateContainer>
);
