export default class Bee{
    id: number;
    role: string;
    lp: number;
    hp: number
    lossPerHit: number;
    constructor(id: number, role: string, lp: number, hp: number, lossPerHit: number)
    {
        this.id = id;
        this.role = role;
        this.lp = lp;
        this.hp = hp
        this.lossPerHit = lossPerHit;
    }

    public getHit()
    {
        this.hp-= this.lossPerHit;
    }
}