import { memo, useCallback } from "react";
import { useAtom } from "jotai";
import { favoritesAtom } from "@/store";
import { MatchContainer } from "@/components/MatchBox/styles";
import { TeamInfo } from "@/components/TeamInfo";
import { TeamName } from "@/components/TeamName";
import { DateContainer } from "@/components/DateContainer";
import { ScoreContainer } from "@/components/ScoreContainer";
import { Score } from "@/components/Score";
import { Separator } from "@/components/Separator";
import { FavoriteIcon } from "@/components/FavoriteIcon";

interface MatchBoxProps {
  matchId: string;
  team1: string;
  team2: string;
  score: string | null;
  date: string;
  formattedDate: string;
}

export const MatchBox = memo(
  ({
    matchId,
    team1,
    team2,
    score,
    date,
    formattedDate,
  }: MatchBoxProps): JSX.Element => {
    const [favorites, setFavorites] = useAtom(favoritesAtom);

    const isMatchNotPlayed = !score || score === "null - null";
    const isFavorite = favorites.some(
      (favorite) => favorite.matchId === matchId
    );

    const handleFavoriteClick = useCallback(() => {
      setFavorites((prevFavorites) => {
        const newFavorites = isFavorite
          ? prevFavorites.filter((fav) => fav.matchId !== matchId)
          : [
              ...prevFavorites,
              { matchId, team1, team2, score, date, formattedDate },
            ];

        localStorage.setItem("favorites", JSON.stringify(newFavorites));

        return newFavorites;
      });
    }, [
      matchId,
      team1,
      team2,
      score,
      date,
      formattedDate,
      isFavorite,
      setFavorites,
    ]);

    return (
      <MatchContainer>
        <TeamInfo>
          <TeamName>{team1}</TeamName>
        </TeamInfo>
        {isMatchNotPlayed ? (
          <DateContainer>{date}</DateContainer>
        ) : (
          <ScoreContainer>
            <Score>{score ? score.split("-")[0] : null}</Score>
            <Separator>-</Separator>
            <Score>{score ? score.split("-")[1] : null}</Score>
          </ScoreContainer>
        )}
        <TeamInfo>
          <TeamName>{team2}</TeamName>
        </TeamInfo>
        <FavoriteIcon onClick={handleFavoriteClick} isFavorite={isFavorite} />
      </MatchContainer>
    );
  }
);
