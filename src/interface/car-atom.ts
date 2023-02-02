import { atom } from "recoil"

export const carTypes = atom({
    key: "carTypes",
    default: [
        {
            name: 'Model S',
            path: '/modelS'
        },
        {
            name: 'Model 3',
            path: '/model3'
        },
        {
            name: 'Model X',
            path: '/modelX'
        },
        {
            name: 'Model Y',
            path: '/modelY'
        },
        {
            name: 'Cybertruck',
            path: '/cybertruck'
        },
        {
            name: 'Roadster',
            path: '/roadster'
        },
    ]
})