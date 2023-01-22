import GuranteeLogo from "./../logo/gurantee.png";
import SpeedLogo from "./../logo/speed.png";
import ReliablityLogo from "./../logo/Reliability.png";
import ExperienceLogo from "./../logo/Experience.png";
import {MdOutlineAgriculture, MdCastForEducation} from "react-icons/md";
import {GiReceiveMoney, GiPayMoney} from "react-icons/gi";
import {TbBusinessplan} from "react-icons/tb";
import {BiBuildingHouse} from "react-icons/bi";


export const TransparentProcess = [
    {
        id: 1,
        name: "Guarantee",
        img: GuranteeLogo,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        id: 2,
        name: "Speed",
        img: SpeedLogo,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        id: 3,
        name: "Reliability",
        img: ReliablityLogo,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        id: 4,
        name: "Experience",
        img: ExperienceLogo,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
]


export const LoanCategoryData = [
    {
        id: 1,
        name: "Agricultural loan",
        icon: <MdOutlineAgriculture/>
    },
    {
        id: 2,
        name: "Personal loan",
        icon: <GiReceiveMoney/>
    },
    {
        id: 3,
        name: "Business loan",
        icon: <TbBusinessplan/>
    },
    {
        id: 4,
        name: "Education loan",
        icon: <MdCastForEducation/>
    },
    {
        id: 5,
        name: "House loan",
        icon: <BiBuildingHouse/>
    },
    {
        id: 6,
        name: "Payday loan",
        icon: <GiPayMoney />
    },
]