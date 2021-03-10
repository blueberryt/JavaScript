declare type Answer = "mighty" | "lot" | "few" | "entirely";
declare type User2 = {
    name: string;
    enquete: {
        [k: string]: Answer | undefined;
    };
};
declare const userA2: User2;
declare const x2: "mighty" | "lot" | "few" | "entirely" | undefined;
declare const y2: "mighty" | "lot" | "few" | "entirely" | undefined;
