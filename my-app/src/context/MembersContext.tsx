import React, { createContext, SetStateAction, useState, ReactNode, FC, Dispatch, useEffect } from "react";
import { IUserProps } from "../components/memberCard/types";


interface IMemberProviderProps {
    children: ReactNode;
}

interface IMemberContext {
    members: IUserProps[];
    setMembers: Dispatch<SetStateAction<IUserProps[]>>;
}

export const MemberContext = createContext<IMemberContext>({ members: [], setMembers: () => [] });


export const MemberProvider: FC<IMemberProviderProps> = ({ children }) => {
    const [members, setMembers] = useState<IUserProps[]>([])



    return <MemberContext.Provider value={{ members, setMembers }}>
        {children}
    </MemberContext.Provider>
}

