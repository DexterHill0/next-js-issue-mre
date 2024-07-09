"use client";

import Link from "next/link";

const Page: React.FC = () => {
    return (
        <section className="w-full flex flex-col h-full flex-auto">
            <Link href="/form/begin">Go To `/form/begin`</Link>
        </section>
    );
};

export default Page;
