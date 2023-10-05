import { FC } from "react";
import useSWR from "swr";
import { matchDates } from "@/utils/matchDates";
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
  DateTime: string;
}

interface HomePageProps {
  initialData: Match[];
}

const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error while fetching data");
  }
  return response.json();
};

const HomePage: FC<HomePageProps> = ({ initialData }) => {
  const { data: matchData = initialData, error } = useSWR(
    `/api/matches?date=${matchDates.map(encodeURIComponent).join("&date=")}`,
    fetcher,
    {
      initialData,
      revalidateOnMount: true,
    }
  );

  if (error) return <div>Error loading matches</div>;
  if (!matchData) return <div>Loading...</div>;

  return (
    <Container>
      <h1>Premier League - Schedule & Scores :</h1>
      <h2>
        //
        {new Date().toLocaleDateString("en-EN", {
          month: "long",
          year: "numeric",
        })}
        //
      </h2>
      <br />
      {matchData &&
        matchData.length > 0 &&
        matchDates.map((date) => (
          <DataContainer key={date}>
            <h2>
              {new Date(date).toLocaleDateString("en-EN", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h2>
            {matchData
              .filter((match) => match.DateTime.includes(date))
              .map((match) => (
                <MatchBox
                  key={match.matchId}
                  matchId={match.matchId}
                  team1={match.HomeTeamName}
                  team2={match.AwayTeamName}
                  score={`${match.HomeTeamScore} - ${match.AwayTeamScore}`}
                  date={`${match.DateTime.split("T")[1].substring(0, 5)}`}
                  formattedDate={new Date(date).toLocaleDateString("en-EN", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                />
              ))}
            <br />
          </DataContainer>
        ))}
      <UTCIndicator>All times are in UTC</UTCIndicator>
    </Container>
  );
};

export const getStaticProps = async () => {
  try {
    const allMatches = await Promise.all(
      matchDates.map(async (date) => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/api/matches?date=${date}`);
        const data = await response.json();
        return data;
      })
    );

    const matchData = allMatches.flat();

    return {
      props: {
        initialData: matchData,
      },
      revalidate: 60 * 60,
    };
  } catch (error) {
    console.error("Error when fetching EPL matches :", error);
    return {
      props: {
        initialData: [],
      },
    };
  }
};

export default HomePage;
