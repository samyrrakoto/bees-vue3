import Bee from "@/models/Bee";

export default class HiveRepository {
    static getHiveState(): string | null {
        return localStorage.getItem('hive');
    }

    static updateHiveState(hive: Bee[]): void {
        localStorage.setItem('hive', JSON.stringify(hive));
    }
}