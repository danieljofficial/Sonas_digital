import QuickActions from "@/components/cards/QuickActions";
import { actionStore } from "@/localStore/db";
import React from "react";

function Dashboard() {
  return (
    <div>
      <nav></nav>
      <div className="bg-bg border border-sec p-4">
        <h2 className="font-bold">Good morning negrow.</h2>
        <p className="text-sec">
          Here is everythig you need to stay up-to-date
        </p>
        <div className="w-full">
          <img src="/mobileHoodie.png" alt="" />
        </div>

        <div>
          <p>Quick actions</p>
          {actionStore.map((action) => {
            return (
              <QuickActions
                header={action.header}
                description={action.description}
                imageArr={action.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
