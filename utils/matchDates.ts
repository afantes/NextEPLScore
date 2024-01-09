const currentDate = new Date();
const currentMonth = currentDate.getUTCMonth();

let matchDates: string[];

switch (currentMonth) {
    case 0:
        matchDates = [
            "2024-01-01",
            "2024-01-02",
            "2024-01-12",
            "2024-01-13",
            "2024-01-14",
            "2024-01-20",
            "2024-01-21",
            "2024-01-22",
            "2024-01-30",
            "2024-01-31",
        ];
        break;

    case 1:
        matchDates = [
            "2024-02-01",
            "2024-02-03",
            "2024-02-04",
            "2024-02-05",
            "2024-02-10",
            "2024-02-11",
            "2024-02-12",
            "2024-02-17",
            "2024-02-18",
            "2024-02-19",
            "2024-02-23",
            "2024-02-24",
            "2024-02-25",
            "2024-02-26",
        ];
        break;

    default:
        matchDates = [];
}

export { matchDates };
