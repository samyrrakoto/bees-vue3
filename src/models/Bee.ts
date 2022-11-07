export default class Bee {
    id: number;
    role: string;
    lp: number;
    hp: number
    lossPerHit: number;
    isLastHit: boolean = false;

    constructor(id: number, role: string, lp: number, hp: number, lossPerHit: number){
        this.id = id;
        this.role = role;
        this.lp = lp;
        this.hp = hp
        this.lossPerHit = lossPerHit;
    }

    getHit(){
        this.lp-= this.lossPerHit;
    }

    setAsLastHit() {
        this.isLastHit = true;
    }
}