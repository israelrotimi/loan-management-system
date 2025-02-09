import {
	briefcase,
	home,
	handshake,
	handHoldingMoneySack,
	coins,
	clipboard,
	chart,
	cagedHeart,
	twoUsers,
	transactions,
	sliders,
	services,
	scroll,
	piggyBank,
	moneySack,
	mathPanel,
	userSettings,
	userGroup,
	userCheck,
	userCancel
} from "../assets/icons";

const sideNavItems: {id: number, text: string, icon: string}[] = [
    {
        id: 1,
        text: "Switch Organization",
        icon: briefcase,
    },
    {
        id: 2,
        text: "Dashboard",
        icon: home,
    },
    {
        id: 3,
        text: "Customers",
        icon: "",
    },
    {
        id: 4,
        text: "Users",
        icon: twoUsers,
    },
    {
        id: 5,
        text: "Guarantors",
        icon: userGroup,
    },
    {
        id: 6,
        text: "Loans",
        icon: moneySack,
    },
    {
        id: 7,
        text: "Decision Models",
        icon: handshake,
    },
    {
        id: 8,
        text: "Savings",
        icon: piggyBank,
    },
    {
        id: 9,
        text: "Loan Requests",
        icon: handHoldingMoneySack,
    },
    {
        id: 10,
        text: "Whitelist",
        icon: userCheck,
    },
    {
        id: 11,
        text: "Karma",
        icon: userCancel
    },
    {
        id: 12,
        text: "Businesses",
        icon: "",
    },
    {
        id: 13,
        text: "Organization",
        icon: briefcase,
    },
    {
        id: 14,
        text: "Loan Products",
        icon: handHoldingMoneySack,
    },
    {
        id: 15,
        text: "Savings Products",
        icon: cagedHeart,
    },
    {
        id: 16,
        text: "Fees and Charges",
        icon: coins,
    },
    {
        id: 17,
        text: "Transactions",
        icon: transactions,
    },
    {
        id: 18,
        text: "Services",
        icon: services,
    },
    {
        id: 19,
        text: "Service Account",
        icon: userSettings,
    },
    {
        id: 20,
        text: "Settlements",
        icon: scroll,
    },
    {
        id: 21,
        text: "Reports",
        icon: chart,
    },
    {
        id: 22,
        text: "Settings",
        icon: "",
    },
    {
        id: 23,
        text: "Preferences",
        icon: sliders,
    },
    {
        id: 24,
        text: "Fees and Pricing",
        icon: mathPanel,
    },
    {
        id: 25,
        text: "Audit Logs",
        icon: clipboard,
    },
];

export { sideNavItems };