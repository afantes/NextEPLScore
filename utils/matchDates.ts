const currentDate = new Date();
const currentMonth = currentDate.getUTCMonth();

let matchDates: string[];

switch (currentMonth) {
    case 2:
        matchDates = [
            "2024-03-02",
            "2024-03-03",
            "2024-03-04",
            "2024-03-09",
            "2024-03-10",
            "2024-03-11",
            "2024-03-13",
            "2024-03-16",
            "2024-03-17",
            "2024-03-30",
            "2024-03-31",
        ];
        break;

    case 3:
        matchDates = [
            "2024-04-02",
            "2024-04-03",
            "2024-04-04",
            "2024-04-06",
            "2024-04-07",
            "2024-04-08",
            "2024-04-13",
            "2024-04-14",
            "2024-04-15",
            "2024-04-20",
            "2024-04-21",
            "2024-04-23",
            "2024-04-24",
            "2024-04-25",
            "2024-04-27",
            "2024-04-28",
        ];
        break;

    default:
        matchDates = [];
}

export { matchDates };
