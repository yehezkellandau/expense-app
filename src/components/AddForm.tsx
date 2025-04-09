import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const AddForm = () => {
    return (
        <form>
            <div>
                <label>Category</label>
                <Input />
            </div>
            <div>
                <label>Amount</label>
                <Input type="number" />
            </div>
            <div>
                <label>Method</label>
                <Select>
                    <SelectTrigger className="w-[100%]">
                        <SelectValue placeholder="method" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="credit_card">Credit Card</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <label>Date</label>
                <Input type="date" defaultValue={Date()}/>
            </div>

        </form>
    );
};
export default AddForm;