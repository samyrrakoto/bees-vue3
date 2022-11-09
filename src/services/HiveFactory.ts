import Bee from '@/models/Bee';
import BeeFactory from '@/services/BeeFactory';
import BeeRoles from '@/types/BeeRoles';

const BEE_NUMBERS: Record<BeeRoles, number> = {
    queen: 1,
    worker: 5,
    scout: 8,
};

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
        for (let i = 1; i <= BEE_NUMBERS[Beetype]; i++){
            bees.push(BeeFactory.createBee(Beetype, this.beeCounter));
            this.beeCounter++;
        }

        return bees;
    }

    static restoreBeeTypeArray(bees: Bee[]) {
        const restoredBees : Bee[] = []
        bees.forEach(bee => {
                const restoredBee = new Bee(bee.id, bee.role, bee.lp, bee.hp, bee.lossPerHit);
                restoredBee.isLastHit = bee.isLastHit;
                restoredBees.push(restoredBee);
            }
        )

        return restoredBees;
    }
}