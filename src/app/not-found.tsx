import Text from "@/components/Text";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found",
};

const NotFoundPage = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            <div className="flex flex-row items-center justify-center gap-6">
                <Text>Not Found</Text>
            </div>
            <Text>
                <Link href="/form/begin" className="underline">
                    Return to `/form/begin`
                </Link>
            </Text>
        </div>
    );
};

export default NotFoundPage;
