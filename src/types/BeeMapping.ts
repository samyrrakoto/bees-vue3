import BeeRoles from "./BeeRoles";
import BeeType from "./BeeType";

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

export default BEE_MAPPING;