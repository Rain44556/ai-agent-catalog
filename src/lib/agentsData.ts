export const getAgents = async () => {
await new Promise(resolve => setTimeout(resolve, 1000));
  const response =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mock-agents.json`);
  return response.json();
  }