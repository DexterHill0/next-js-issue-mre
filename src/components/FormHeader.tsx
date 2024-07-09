"use client";

import clsx from "clsx";
import BaseHeader from "./BaseHeader";

interface Props {
    state: "loading" | "loaded";
}

const Header: React.FC<Props> = ({ state }) => {
    return <BaseHeader>{`FormHeader state: ${state}`}</BaseHeader>;
};

export default Header;
