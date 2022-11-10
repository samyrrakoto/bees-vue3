import Bee from '@/models/Bee';
import BEE_CREATION_DETAILS from '@/utils/BeeCreationDetails';
import BeeRoles from '@/types/BeeRoles';

export default class BeeFactory{
    static createBee(type: BeeRoles, id: number){
        return new Bee(id, type, BEE_CREATION_DETAILS[type].hp, BEE_CREATION_DETAILS[type].hp, BEE_CREATION_DETAILS[type].lossPerHit)
    }
}