import Bee from "@/models/Bee";
import HiveFactory from "./HiveFactory";

export default class HiveService {
    static createNewHive() {
        let hive = HiveFactory.createHive();
        hive = this.shuffleHive(hive);
        localStorage.setItem('hive', JSON.stringify(hive));

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

    static getLiveBees(hive: Bee[]) {
        return hive.filter(bee => bee.lp > 0);
    }

    static hitRandomBee() {
        const jsonHive = localStorage.getItem('hive');
        const hive = jsonHive ? JSON.parse(jsonHive) : [];
        console.log(hive);
        const liveBees = jsonHive ? this.getLiveBees(hive) : [];
        console.log(liveBees);
        const randomLiveBee = function (min: number, max: number) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        };
        const bee: Bee = hive[randomLiveBee(0, liveBees.length)];
        localStorage.setItem('hive', JSON.stringify(hive));
        console.log(bee);
        console.log(bee instanceof Bee);
    }
}
