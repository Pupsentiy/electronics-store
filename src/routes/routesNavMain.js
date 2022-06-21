import IPhone from "../pages/nav__Main/iPhone/IPhone"
import IPad from "../pages/nav__Main/iPad/IPad"
import Accessories from "../pages/nav__Main/accessories/Accessories"
import Watch from "../pages/nav__Main/watch/Watch"
import HeadphonesAndAcoustics from "../pages/nav__Main/headphonesAndAcoustics/HeadphonesAndAcoustics"
import Gadjets from "../pages/nav__Main/gadjets/Gadjets"
import GiftСertificate from "../pages/nav__Main/giftСertificate/GiftСertificate"
import Mac from "../pages/nav__Main/mac/Mac"
import Main from "../components/Main"



const routesNavMain = [
    {
        path: '/',
        element: <Main/>
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
        path: '/accessories',
        element: <Accessories />
    },
    {
        path: '/apple-watch',
        element: <Watch />
    },
    {
        path: '/headphones',
        element: <HeadphonesAndAcoustics />
    },
    {
        path: '/gadjets',
        element: <Gadjets />
    },
    {
        path: '/gift',
        element: <GiftСertificate />
    },
]

export default routesNavMain