// generate all the actions that pertain to the counter state (pie slice)

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionTypes"

export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
})

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
})
