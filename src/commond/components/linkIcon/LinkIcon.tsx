import React from "react";
import {SvgSelector} from "../svgSelector/svgSelector";

type PropsStyle = {
    url?: string
    title: string
}

export const LincIcon = ({title, url}: PropsStyle) => {

    return (
        <a href={url}>
            <div>
                <SvgSelector id={title} width={'68'} height={'68'}/>
            </div>
        </a>
    )
}