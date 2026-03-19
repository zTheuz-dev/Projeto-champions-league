import { ClubModel } from "../models/clubs-models";
import fs from "fs/promises";

const dataBase = [
    { id: 1, name: "Real Madrid" },
    { id: 2, name: "Barcelona" },
    { id: 3, name: "Manchester United" },
    { id: 4, name: "Bayern Munich" },
    { id: 5, name: "Juventus" },

]


export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFile("src/data/clubs.json", "utf-8");
    const clubs: ClubModel[] = JSON.parse(data);
    return  clubs;
}