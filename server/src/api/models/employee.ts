import { Equipment } from "./equipment";

export interface Employee {
    id: string;
    name: string;
    department: string;
    email: string;
    status: string;
    equipments: Equipment[];
}