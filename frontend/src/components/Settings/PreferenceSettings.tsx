import React, { useState } from "react";
import Switch from "../ui/switch";
// import { Switch } from "../ui/switch";

const PreferenceSettings = () => {
  const [requireApproval, setRequireApproval] = useState<boolean>(false);
  const [trackLoginActivity, setTrackLoginActivity] = useState<boolean>(false);
  return (
    <div className=" flex flex-col space-y-3">
      <div className="flex">
        <div>
          <p className="font-semibold text-lg">Approval request</p>
          <div className="text-gray-400 text-xs">
            Manage pending approval for your projects.
          </div>
        </div>

        <div className="ml-auto mt-auto">
          <Switch
            isEnabled={requireApproval}
            setIsEnabled={setRequireApproval}
            size="small"
          />
        </div>
      </div>

      <div className="flex">
        <div>
          <p className="font-semibold text-lg">Login activity.</p>
          <div className="text-gray-400 text-xs">
            Track and review recent login attempts.
          </div>
        </div>

        <div className="ml-auto mt-auto">
          <Switch
            isEnabled={trackLoginActivity}
            setIsEnabled={setTrackLoginActivity}
            size="small"
          />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 md:justify-end py-3">
        <button
          type="button"
          className="max-[480px]:w-full w-[20%] px-4 md:px-6 py-2 border border-pri rounded-xl text-gray-700 text-center"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="max-[480px]:w-full w-[20%] px-4 md:px-6 py-2 bg-acc text-white rounded-xl hover:bg-orange-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PreferenceSettings;
