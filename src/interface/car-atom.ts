import {atom } from "recoil"

export const carTypes = atom({
    key: "carTypes",
    default:  [ "Model S", "Model 3", "Model X", "Model Y",  ]
})