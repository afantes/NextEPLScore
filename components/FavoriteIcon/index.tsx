import { FaStar } from "react-icons/fa";
import { IconContainer } from "@/components/FavoriteIcon/styles";

interface FavoriteIconProps {
  isFavorite: boolean;
  onClick: () => void;
}

export const FavoriteIcon = ({
  isFavorite,
  onClick,
}: FavoriteIconProps): JSX.Element => (
  <IconContainer isFavorite={isFavorite} onClick={onClick}>
    <FaStar />
  </IconContainer>
);
