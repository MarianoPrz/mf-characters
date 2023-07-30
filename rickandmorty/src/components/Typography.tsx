import React from 'react';

type ValidTag =
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "div"
    | "li"
    | "b"
    | "small"
    | "strong"
    | "cite"
    | "del";

const tagsMapping: Record<ValidTag, ValidTag> = {
    p: "p",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    span: "span",
    div: "div",
    li: "li",
    b: "b",
    small: "small",
    strong: "strong",
    cite: "cite",
    del: "del",
};

const Typography: React.FC<{
    tag?: ValidTag;
    className?: string;
    children?: React.ReactNode;
}> = ({ tag, className, children }) => {
    const Component = tag ? tagsMapping[tag] : "p";

    return (
        <Component className={className}>
            {children}
        </Component>
    );
};

export default Typography;