import { LucideIcon } from "lucide-react";
import React from "react";

type StatDetail = {
    title: string;
    amount: string;
    changePercentage: number;
    IconComponent: LucideIcon;
};

type StatCardProps = {
    title: string;
    primaryIcon: JSX.Element;
    details: StatDetail[];
    dateRange: string;
};

function StatCard({ title, primaryIcon, details, dateRange }: StatCardProps) {
    const formatePercentage = (value: number) => {
        const signal = value >= 0 ? "+" : "";
        return `${signal}${value.toFixed()}%`;
    };
    const getChangeColor = (value: number) =>
        value >= 0 ? "text-green-500" : "text-red-500";

    return (
        <div className="md:row-span-1 xl:row-span-2 col-span-1 rounded-2xl bg-white flex flex-col justify-between shadow-md">
            <div>
                <div className="flex justify-between items-center mb-2 px-5 pt-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                        {title}
                    </h2>
                    <span className="text-xs text-gray-400">{dateRange}</span>
                </div>
                <hr className="border-gray-200" />
            </div>

            {/* BODY */}
            <div className="flex mb-6 items-center justify-around gap-4 px-5">
                <div className="rounded-full p-5 bg-blue-50 border-sky-300 border-[1px]">
                    {primaryIcon}
                </div>
                <div className="flex-1">
                    {details.map((detail, i) => (
                        <React.Fragment key={i}>
                            <div className="flex items-center justify-between  my-4">
                                <span className="text-gray-500">
                                    {detail.title}
                                </span>
                                <span className="font-bold text-gray-800">
                                    {detail.amount}
                                </span>
                                <div className="flex items-center">
                                    <detail.IconComponent
                                        className={`w-4 h-4 ${getChangeColor(
                                            detail.changePercentage
                                        )}`}
                                    />
                                    <span
                                        className={`font-medium text-center ${getChangeColor(
                                            detail.changePercentage
                                        )}`}
                                    >
                                        {formatePercentage(
                                            detail.changePercentage
                                        )}
                                    </span>
                                </div>
                            </div>
                            {i < details.length - 1 && (
                                <hr className="border-gray-200" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StatCard;
