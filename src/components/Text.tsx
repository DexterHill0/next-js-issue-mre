import clsx from "clsx";
import { AriaRole } from "react";

interface Props {
    children?: React.ReactNode;
    className?: string;
    role?: AriaRole;
    // ....
}

interface Text extends React.FC<Props> {
    // other text types
}

const rawText = ({
    children,
    className,
    /* non user specified props */
    Comp,
    ...props
}: Props & {
    Comp: "p";
}): React.ReactNode => {
    return (
        <Comp className={clsx(className)} {...props}>
            {children}
        </Comp>
    );
};

const Text: Text = (props: Props) => {
    return rawText({ ...props, Comp: "p" });
};

export default Text;
