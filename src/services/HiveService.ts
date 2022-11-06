import HiveFactory from "./HiveFactory";

export default class HiveService {
    static createNewHive() {
        const hive = HiveFactory.createHive();
        localStorage.setItem('hive', JSON.stringify(hive));

        return hive;
    }

}
