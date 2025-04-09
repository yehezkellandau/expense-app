import SearchBar from "./SearchBar";
import TableExpenses from "./TableExpenses";
import Totals from "./Totals";
import { Button } from "./ui/button";
import {
    collection,
    // addDoc,
    onSnapshot,
} from "firebase/firestore"
import { db } from "../firebase"
import { useState, useEffect } from "react";
import { Expense } from "@/types/ExpenseType";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddForm from "./AddForm";
const Main = () => {
    const [expenses, setExpenses] = useState<Expense[]>([])
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "expenses"), (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Expense[]
            setExpenses(data)
        })
        return () => unsubscribe()
    }, [])

    // const addExpense = async () => {
    //     await addDoc(collection(db, "expenses"), {
    //         amount: 50,
    //         category: "grocery",
    //         method: "cash",
    //         created_at: new Date(),
    //     })
    // }

    return (
        <div className="my-2">
            <Totals />
            <div className="flex justify-end items-center">
                <SearchBar />

                <Dialog>
                    <DialogTrigger><Button className="ml-2">Add +</Button></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add Expense</DialogTitle>
                            <DialogDescription>
                                <AddForm />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
            <TableExpenses expenses={expenses} />

        </div>
    );
};
export default Main;