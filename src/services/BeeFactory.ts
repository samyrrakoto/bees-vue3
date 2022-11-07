import Bee from '@/models/Bee';
import BeeRoles from '@/types/BeeRoles';
import BeeType from '@/types/BeeType';

const BEE_MAPPING: Record<BeeRoles, BeeType> = {
    queen: {
        hp: 100,
        lossPerHit: 15,
    },
    worker: {
        hp: 50,
        lossPerHit: 20,
    },
    scout:  {
        hp: 30,
        lossPerHit: 15,
    },
};

export default class BeeFactory{
    static createBee(type: BeeRoles, id: number){
        return new Bee(id, type, BEE_MAPPING[type].hp, BEE_MAPPING[type].hp, BEE_MAPPING[type].lossPerHit)
    }
}