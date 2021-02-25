declare function waitThenString(duration: number): Promise<string>;
declare function waitThenNumber(duration: number): Promise<number>;
declare function waitAll(): Promise<[string, number, string]>;
declare function waitRace(): Promise<string | number>;
declare function main(): Promise<void>;
