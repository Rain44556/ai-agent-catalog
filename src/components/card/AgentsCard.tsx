"use client";

import { Agent } from "@/lib/types";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";
import MotionDiv from "../animation/MotionDiv";

type Props = {
  agent: Agent;
};

const AgentsCard = ({ agent }: Props) => {
  const statusColor = {
    Active: "bg-yellow-500",
    Beta: "bg-blue-500",
    Archived: "bg-gray-500",
  };

  return (
    <>
      <MotionDiv
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 10, y: 10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        <Card className="w-full hover:bg-gradient-to-r from-green-800 border-green-700">
          <CardHeader>
            <Avatar>
              <AvatarImage className="object-cover" src={agent.image} />
            </Avatar>
            <div>
              <CardTitle className="text-xl">{agent.name}</CardTitle>
              <p className="text-sm text-muted-foreground mb-3">
                {agent.category}
              </p>
            </div>
            <CardDescription>{agent.description}</CardDescription>
            <CardAction>
              <Badge
                className={`${statusColor[agent.status]} ml-auto text-white`}
              >
                {agent.status}
              </Badge>
            </CardAction>
          </CardHeader>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              {agent.pricingModel}
            </Button>
          </CardFooter>
        </Card>
      </MotionDiv>
    </>
  );
};

export default AgentsCard;
