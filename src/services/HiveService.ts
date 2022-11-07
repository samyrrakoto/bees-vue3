import Bee from "@/models/Bee";
import HiveFactory from "./HiveFactory";

export default class HiveService {
    static createNewHive() {
        let hive = HiveFactory.createHive();
        hive = this.shuffleHive(hive);
        this.updateHive(hive);

        return hive;
    }

    static shuffleHive(hive: Bee[]) {
        for (let i = hive.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = hive[i];
            hive[i] = hive[j];
            hive[j] = temp;
        }

        return hive;
    }

    static updateHive(hive: Bee[]) {
        localStorage.setItem('hive', JSON.stringify(hive));
    }

    static getLiveBees(hive: Bee[]) {
        return hive.filter(bee => bee.lp > 0);
    }

    static hitRandomBee() {
        const jsonHive: string | null = localStorage.getItem('hive');
        const hive: [] = jsonHive ? JSON.parse(jsonHive) : [];

        const beeHive: Bee[] = HiveFactory.restoreBeeTypeArray(hive);
        const liveBees: Bee[] = beeHive ? this.getLiveBees(beeHive) : [];

        const randomIndex = Math.floor(Math.random() * liveBees.length);
        const randomBee: Bee = liveBees[randomIndex];

        randomBee.getHit();
        randomBee.lp = randomBee.lp <= 0 ? 0 : randomBee.lp;

        this.updateHive(beeHive);
    }
}
