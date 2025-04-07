import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import MoreMenu from "./MoreMenu";

const TableExpenses = () => {
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
                <TableRow>
                    <TableCell className="font-medium">gas</TableCell>
                    <TableCell>$32.00</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right"><MoreMenu/></TableCell>
                </TableRow>
            </TableBody>
        </Table>

    );
};
export default TableExpenses;