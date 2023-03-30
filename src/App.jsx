import { MoralisProvider } from "react-moralis"
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import Home, { loader as homeLoader } from "./pages/home/Home"
import Transactions from "./pages/transactions/Transactions"
import Dashboard from "./pages/dashboard/Dashboard"
import Layout from "./components/Layout"
import { Web3ContextProvider } from "./Web3Context"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} loader={homeLoader} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Route>
    )
)

function App() {
    return (
        <MoralisProvider initializeOnMount={false}>
            <Web3ContextProvider>
                <RouterProvider router={router} />
            </Web3ContextProvider>
        </MoralisProvider>
    )
}

export default App
