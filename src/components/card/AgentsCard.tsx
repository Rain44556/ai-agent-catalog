import { Agent } from '@/lib/types';
import React from 'react';


type Props = {
    agent: Agent;
}

const AgentsCard = ({agent} : Props) => {
    return (
        <div>
            <h1>{agent.name}</h1>
        </div>
    );
};

export default AgentsCard;