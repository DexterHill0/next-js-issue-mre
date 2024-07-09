"use client";

import clsx from "clsx";
import Image from "next/image";

import styles from "@/css/base_header.module.css";

export interface BaseHeaderProps {
    logoSrc?: string;
    children?: React.ReactNode;
}

const BaseHeader: React.FC<BaseHeaderProps> = (props) => {
    return (
        <header
            className={clsx(
                styles.header,
                props.logoSrc
                    ? "grid-cols-[min-content_1fr_min-content]"
                    : "grid-cols-[1fr_min-content]"
            )}
        >
            {props.logoSrc ? (
                <Image
                    src={props.logoSrc}
                    alt="Logo"
                    className="logo"
                    width={50}
                    height={50}
                ></Image>
            ) : (
                <></>
            )}
            <span
                className={clsx(
                    "flex items-center justify-center justify-self-center w-full overflow-hidden",
                    props.logoSrc ? "col-start-2" : "col-start-1"
                )}
            >
                {props.children}
            </span>
            <div
                className={clsx(
                    "flex items-center justify-center h-full justify-self-end",
                    props.logoSrc ? "col-start-3" : "col-start-2"
                )}
            >
                EN
            </div>
        </header>
    );
};

export default BaseHeader;
