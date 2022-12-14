import BeeRoles from '@/types/BeeRoles';

export default class Bee {
    id: number;
    role: BeeRoles;
    lp: number;
    hp: number
    lossPerHit: number;
    isLastHit: boolean = false;

    constructor(id: number, role: BeeRoles, lp: number, hp: number, lossPerHit: number){
        this.id = id;
        this.role = role;
        this.lp = lp;
        this.hp = hp
        this.lossPerHit = lossPerHit;
    }

    getHit(): void{
        this.lp-= this.lossPerHit;
    }

    setAsLastHit(): void {
        this.isLastHit = true;
    }
}