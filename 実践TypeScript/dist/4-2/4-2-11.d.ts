declare type Answer = "mighty" | "lot" | "few" | "entirely";
declare type User2 = {
    name: string;
    enquete: {
        [k: string]: Answer;
    };
};
declare const userA2: User2;
declare const x2: Answer;
declare const y2: Answer;
