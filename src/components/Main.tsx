import SearchBar from "./SearchBar";
import TableExpenses from "./TableExpenses";
import Totals from "./Totals";
import { Button } from "./ui/button";

const Main = () => {
    return (
        <div className="my-2">
            <Totals/>
            <div className="flex justify-end items-center">
                <SearchBar/>
                <Button className="ml-2">Add +</Button>
            </div>
            <TableExpenses/>

        </div>
    );
};
export default Main;