import { getAgents } from '@/lib/agentsData';
import React from 'react';
import { Agent } from '@/lib/types';
import AgentsCard from '@/components/card/AgentsCard';

const HomePage = async () => {
    const agents: Agent[] = await getAgents();
    
    return (
        <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">AI Agents</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {agents.map( (agent) => (
            <AgentsCard 
            key={agent.id}
            agent={agent}
            ></AgentsCard>
            ))}
      </div>
    </div>
    );
};


export default HomePage;