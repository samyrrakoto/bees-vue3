import Bee from "@/models/Bee";

export default class HiveRepository {
    static getHiveState() {
        return localStorage.getItem('hive');
    }

    static updateHiveState(hive: Bee[]) {
        localStorage.setItem('hive', JSON.stringify(hive));
    }

    static clearHive() {
        localStorage.removeItem('hive');
    }
}