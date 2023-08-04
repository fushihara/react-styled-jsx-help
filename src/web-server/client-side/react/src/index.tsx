import {Pager} from "./sub";
import {createRoot} from "react-dom/client";

const root = createRoot(document.querySelector<HTMLDivElement>("#root")!);
root.render(<Pager />);
