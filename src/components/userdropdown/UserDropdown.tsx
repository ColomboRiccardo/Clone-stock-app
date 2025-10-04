"use client"

import React from 'react'

import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

const UserDropdown = () => {
    const router = useRouter()
    const handleSignout = () => {
        router.push('/sign-in')
    }

    const user = {name: "John", email: "john.stuart@example.com"}

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500">

                    <div className={"hidden md:flex flex-col items-start"}>
                        <span className={"text-base font-medium text-gray-400"}>
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"text-gray-400"}>
                <div className={"flex relative items-center gap-3 py-2"}>
                    <Avatar className={"h-8 w-8"}>
                        <AvatarImage src=""/>
                        <AvatarFallback
                            className={"bg-yellow-500 text-yellow-900 text-sm font-bold"}>JS</AvatarFallback>
                    </Avatar>
                    <div className={"flex flex-col"}>
                        <span className={"text-base font-medium text-gray-400"}>
                            {user.name}
                        </span>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
