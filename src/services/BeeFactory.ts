import Bee from '@/models/Bee';
import BeeMapping from '@/types/BeeMapping';
import BeeRoles from '@/types/BeeRoles';

export default class BeeFactory{
    static createBee(type: BeeRoles, id: number){
        return new Bee(id, type, BeeMapping[type].hp, BeeMapping[type].hp, BeeMapping[type].lossPerHit)
    }
}