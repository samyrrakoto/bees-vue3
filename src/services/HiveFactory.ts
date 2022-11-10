import Bee from '@/models/Bee';
import BEE_CREATION_DETAILS from '@/utils/BeeCreationDetails';
import BeeFactory from '@/services/BeeFactory';
import BeeRoles from '@/types/BeeRoles';

export default class HiveFactory {
    static beeCounter: number = 0;

    static createHive() {
        return this.createBees();
    }

    static createBees() {
        const bees: Bee[] = [];

        Object.entries(BEE_CREATION_DETAILS).forEach(([beeType, beeTypeObject]) =>{
            const amount: number = Object.entries(beeTypeObject)[0][1];
            for (let i = 1; i <= amount; i++) {
                bees.push(BeeFactory.createBee(beeType as BeeRoles, this.beeCounter));
                this.beeCounter++;
            }
        });

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