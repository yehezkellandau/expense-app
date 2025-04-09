import { Timestamp } from "firebase/firestore"

export type Expense = {
    id?: string
    amount: number
    category: string
    method: string
    created_at: Timestamp
  }