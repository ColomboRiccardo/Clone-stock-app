"use client"
// TradingViewWidget.jsx
import useTradingViewWidget from "@/hooks/UseTradingViewWidget";
import React, {memo} from 'react';
import {cn} from "@/lib/utils";

const TradingViewWidget = ({title, scriptUrl, config, height = 600, className}: any) => {
    const containerRef = useTradingViewWidget(scriptUrl, config, height)

    return (
        <div className={"w-full"}>
            {!!title && <h3 className={"font-semibold text-2xl text-gray-100 mb-5"}>{title}</h3>}
            <div className={cn("tradingview-widget-container", className)} ref={containerRef}
                 style={{height: "100%", width: "100%"}}>
                <div className="tradingview-widget-container__widget"
                     style={{height: height, width: "100%"}}></div>
            </div>
        </div>
    );
}

export default memo(TradingViewWidget);
