import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import MoreMenu from "./MoreMenu";
import { Expense } from "@/types/ExpenseType";

const TableExpenses = ({ expenses }: { expenses: Expense[] }) => {    console.log("table " + expenses)
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[55%]">Category</TableHead>
                    <TableHead className="w-[20%]">Amount</TableHead>
                    <TableHead className="w-[20%]">Method</TableHead>
                    <TableHead className="text-right w-[5%]"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    expenses.map((expense) => (
                <TableRow>
                    <TableCell className="font-medium">{expense.category}</TableCell>
                    <TableCell>${expense.amount}</TableCell>
                    <TableCell>{expense.method}</TableCell>
                    <TableCell className="text-right"><MoreMenu/></TableCell>
                </TableRow>
                    ))
                }
                
            </TableBody>
        </Table>

    );
};
export default TableExpenses;