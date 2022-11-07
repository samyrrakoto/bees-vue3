import Bee from "@/models/Bee";
import HiveFactory from "./HiveFactory";
import HiveRepository from "./HiveRepository";

export default class HiveService {
    static createNewHive() {
        let hive = HiveFactory.createHive();
        hive = this.shuffleHive(hive);
        HiveRepository.updateHiveState(hive);

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
        const hive: [] = JSON.parse(String( HiveRepository.getHiveState()));
        const beeHive: Bee[] = HiveFactory.restoreBeeTypeArray(hive);

        const livesBeesIndexes: number[] = this.getLiveBeesIndexes(beeHive);
        const randomIndex: number = Math.floor(Math.random() * livesBeesIndexes.length);
        const randomBee: Bee = beeHive[livesBeesIndexes[randomIndex]];

        randomBee.getHit();
        randomBee.setAsLastHit();
        randomBee.lp = randomBee.lp <= 0 ? 0 : randomBee.lp;
        this.checkQueenIsDead(randomBee);

        HiveRepository.updateHiveState(beeHive);
    }

    static getLiveBeesIndexes(bees: Bee[]) {
        const livesBeesIndexes: number[] = [];
        let i: number = 0;
        bees.forEach(bee => {
            if (bee.lp > 0){
                livesBeesIndexes.push(i);
            }
            i++;
        });

        return livesBeesIndexes;
    }

    static checkQueenIsDead(bee: Bee) {
        if (bee.role === "queen") {
            if (bee.lp === 0) {
                console.log("God save the queen !");
            }
        }
    }
}
