import { NextApiRequest, NextApiResponse } from 'next';
import { EPL_API_KEY } from '@/config';

interface MatchData {
    AwayTeamName: string;
    HomeTeamName: string;
    AwayTeamScore: number;
    HomeTeamScore: number;
    DateTime: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const dates = req.query.date instanceof Array ? req.query.date : [req.query.date as string];

    const allMatchData: MatchData[] = [];

    for (const date of dates) {
        const EPL_API_URL = `https://api.sportsdata.io/v4/soccer/scores/json/ScoresBasic/EPL/${date}?key=${EPL_API_KEY}`;

        try {
            const response = await fetch(EPL_API_URL);
            if (!response.ok) {
                throw new Error("Error while fetching data");
            }
            const externalData = await response.json();

            const formattedData: MatchData[] = externalData.map((match) => ({
                AwayTeamName: match.AwayTeamName,
                HomeTeamName: match.HomeTeamName,
                AwayTeamScore: match.AwayTeamScore,
                HomeTeamScore: match.HomeTeamScore,
                DateTime: match.DateTime,
            }));

            const dataWithIds = formattedData.map(match => ({
                ...match,
                matchId: `${match.HomeTeamName}-${match.AwayTeamName}-${match.DateTime}`,
            }));
            allMatchData.push(...dataWithIds);

        } catch (error) {
            console.error("Error while fetching data for date " + date, error);
        }
    }

    if (allMatchData.length === 0) {
        return res.status(500).json({ error: "Failed to fetch data for all dates" });
    }

    return res.status(200).json(allMatchData);
}
