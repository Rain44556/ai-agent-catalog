import { Agent } from '@/lib/types';
import React from 'react';


type Props = {
    agent: Agent;
}

const AgentsCard = ({agent} : Props) => {
    return (
        <div>
            <h1 className='font-bold'>{agent.name}</h1>
 <p>{agent.description}</p>

        </div>
    );
};

export default AgentsCard;