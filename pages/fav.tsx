// @ts-nocheck
import { FC } from "react";
import { useAtom } from "jotai";
import { favoritesAtom } from "@/store";
import { Container } from "@/components/Container";
import { DataContainer } from "@/components/DataContainer";
import { MatchBox } from "@/components/MatchBox";
import { UTCIndicator } from "@/styles/UTCIndicatorStyles";

interface Match {
  matchId: string;
  HomeTeamName: string;
  AwayTeamName: string;
  HomeTeamScore: number | null;
  AwayTeamScore: number | null;
  date: string;
  formattedDate: string;
}

type GroupedMatchesType = {
  [formattedDate: string]: Match[];
};

const FavPage: FC = () => {
  const [favorites] = useAtom(favoritesAtom);

  const groupedMatches: GroupedMatchesType = favorites.reduce((acc, match) => {
    if (!acc[match.formattedDate]) acc[match.formattedDate] = [];
    acc[match.formattedDate].push(match);
    return acc;
  }, {});

  for (let formattedDate in groupedMatches) {
    groupedMatches[formattedDate].sort((a, b) => {
      const [hourA, minA] = a.date.split(":").map(Number);
      const [hourB, minB] = b.date.split(":").map(Number);
      return hourA !== hourB ? hourA - hourB : minA - minB;
    });
  }

  const sortedDates = Object.keys(groupedMatches).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <Container>
      <h1>Favorites :</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        sortedDates.map((formattedDate) => (
          <DataContainer key={formattedDate}>
            <br />
            <h2>{formattedDate}</h2>
            {groupedMatches[formattedDate].map((match) => (
              <MatchBox key={match.matchId} {...match} />
            ))}
          </DataContainer>
        ))
      )}
      <UTCIndicator>All times are in UTC</UTCIndicator>
    </Container>
  );
};

export default FavPage;
