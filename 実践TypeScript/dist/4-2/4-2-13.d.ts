declare type Question = "exercise_habits" | "time_of_sleeping";
declare type Answer13 = "mighty" | "lot" | "few" | "entirely";
declare type User13 = {
    name: string;
    enquete: {
        [K in Question]?: Answer13;
    };
};
declare const userA13: User13;
declare const x13: "mighty" | "lot" | "few" | "entirely" | undefined;
