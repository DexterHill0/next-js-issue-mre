"use client";

import Link from "next/link";

const Page: React.FC = () => {
    return (
        <section className="w-full flex flex-col h-full flex-auto">
            <Link href="/form/fgdfgfdgdfg">Go To 404</Link>
            <Link href="/form/active">Go To `/form/active`</Link>
        </section>
    );
};

export default Page;
