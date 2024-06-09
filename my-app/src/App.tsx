import "./App.scss";
import { MemberCard } from "../src/components/memberCard";
import { useEffect, useState } from "react";
import { IUserProps } from "./components/memberCard/types";
import Form from "./components/form";
import { Tabs } from "./components/tabs";
import MemberCardList from "./components/memberCardList";
import { MemberProvider } from "./context/MembersContext";

export default function App() {
    const [addedUser, setAddedUser] = useState<IUserProps | null>(null);
    const [tabForm, setTabForm] = useState(true);



    const handleUserAddition = (user: IUserProps) => {
        setAddedUser(user);
    };

    return (
        <div className="App">
            <MemberProvider>
                <Tabs onChange={setTabForm} />
                {!tabForm && <MemberCardList />}
                {tabForm && <Form onUserAddition={handleUserAddition} />}
                {addedUser && (
                    <MemberCard
                        name={addedUser.name}
                        phone={addedUser.phone}
                        username={addedUser.username}
                        website={addedUser.website}
                    />
                )}
            </MemberProvider>
        </div>
    );
}
