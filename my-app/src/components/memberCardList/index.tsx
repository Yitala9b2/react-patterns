
import { useState, useEffect, useContext } from "react";
import { MemberCard } from "../memberCard";
import { IUserProps } from "../memberCard/types";
import { ButtonWithLabel } from "../buttonWithLabel";
import { MemberContext } from "../../context/MembersContext";

const MemberCardList = () => {
    const { members, setMembers } = useContext(MemberContext);


    useEffect(() => {
        if (members.length === 0) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((res) => setMembers(res));
        }

    }, []);

    const onButtonClick = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((res) => setMembers(val => [...val, ...res]));
    };

    return (
        <>
            {members.map((user, i) => <MemberCard key={i} name={user.name} phone={user.phone} username={user.username} website={user.website} />)}
            <ButtonWithLabel onClick={onButtonClick}>more users</ButtonWithLabel>
        </>
    );
};

export default MemberCardList;
