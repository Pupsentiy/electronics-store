import NavMain from "../components/navMain/NavMain"
import IPad from "../container/IPad/IPad"
import IPhone from "../container/IPhone/IPhone"
import Mac from '../container/Mac/Mac'
import Watch from "../container/Watch/Watch"

const routesNavMain = [
    {
        path: '/',
        element: <NavMain />
    },
    {
        path: '/apple-iphone',
        element: <IPhone />
    },
    {
        path: '/apple-ipad',
        element: <IPad />
    },
    {
        path: '/apple-mac',
        element: <Mac />
    },
    {
        path: '/apple-watch',
        element: <Watch/>
    }
]

export default routesNavMain