import BeeCreationType from "@/types/BeeCreationType";

const BEE_CREATION_DETAILS: BeeCreationType = {
    queen: {
        amount: 1,
        hp: 100,
        lossPerHit: 15,
    },
    worker: {
        amount: 5,
        hp: 50,
        lossPerHit: 20,
    },
    scout: {
        amount: 8,
        hp: 30,
        lossPerHit: 15,
    },
    useless: {
        amount: 2,
        hp: 10,
        lossPerHit: 10,
    },
};

export default BEE_CREATION_DETAILS;
