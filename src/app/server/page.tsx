import { getAgents } from '@/lib/agentsData';
import React from 'react';

const AgentsPage = async () => {
    const agents = await getAgents();
    return (
        <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">AI Agents</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {agents.map( (agent) => (
            <li key={agent.id}>{agent.name}</li>
            ))}
      </div>
    </div>
    );
};


export default AgentsPage;