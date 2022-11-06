import Bee from '@/models/Bee';
import BeeFactory from '@/services/BeeFactory';
import BeeRoles from '@/types/BeeRoles';
import BeeNumbers from '@/types/BeeNumbers';

export default class HiveFactory {
    static beeCounter: number = 0;

    static createHive() {
        const queens = this.createBees('queen');
        const workers = this.createBees('worker');
        const scouts = this.createBees('scout');
        const bees = [...queens, ...workers, ...scouts];

        return bees;
    }

    static createBees(Beetype: BeeRoles) {
        const bees : Bee[] = [];
        for (let i = 1; i <= BeeNumbers[Beetype]; i++){
            bees.push(BeeFactory.createBee(Beetype, this.beeCounter));
            this.beeCounter++;
        }

        return bees;
    }

    static restoreBeeTypeArray(bees: Bee[]) {
        const restoredBees : Bee[] = []
        bees.forEach(bee => restoredBees.push(new Bee(bee.id, bee.role, bee.lp, bee.hp, bee.lossPerHit)))

        return restoredBees;
    }
}