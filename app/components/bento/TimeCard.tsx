"use client";

import { useSyncExternalStore } from "react";
import BentoCard from "./BentoCard";
import { MY_TIME_ZONE } from "@/lib/constants";

const subscribeToClock = (callback: () => void) => {
  const id = setInterval(callback, 30_000);
  return () => clearInterval(id);
};

const getTimestamp = () => Date.now();
const getServerTimestamp = () => 0;

const subscribeNoop = () => () => {};
const getVisitorTimeZone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;
const getServerVisitorTimeZone = () => null;

const formatTime = (date: Date, timeZone: string) =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone,
  }).format(date);

const getOffsetMinutes = (date: Date, timeZone: string) => {
  const part = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
  })
    .formatToParts(date)
    .find((p) => p.type === "timeZoneName")?.value;

  const match = part?.match(/GMT([+-]\d+)(?::(\d+))?/);
  if (!match) return 0;

  const hours = parseInt(match[1], 10);
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  return hours * 60 + Math.sign(hours || 1) * minutes;
};

const TimeCard = ({ className = "" }: { className?: string }) => {
  const timestamp = useSyncExternalStore(
    subscribeToClock,
    getTimestamp,
    getServerTimestamp,
  );
  const visitorTimeZone = useSyncExternalStore(
    subscribeNoop,
    getVisitorTimeZone,
    getServerVisitorTimeZone,
  );

  const now = timestamp ? new Date(timestamp) : null;

  return (
    <BentoCard className={className}>
      {now && visitorTimeZone ? (
        <>
          <div className="flex justify-between items-end gap-4">
            <div>
              <p className="text-xs text-faint mb-1 flex items-center gap-2">
                <span className="h-2 w-2 bg-green-500 rounded-full" />
                Wisconsin
              </p>
              <p className="text-2xl font-semibold tabular-nums">
                {formatTime(now, MY_TIME_ZONE)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-faint mb-1">You</p>
              <p className="text-2xl font-semibold tabular-nums">
                {formatTime(now, visitorTimeZone)}
              </p>
            </div>
          </div>
          <p className="text-xs text-faint mt-3">
            {(() => {
              const diff = Math.round(
                (getOffsetMinutes(now, MY_TIME_ZONE) -
                  getOffsetMinutes(now, visitorTimeZone)) /
                  60,
              );
              if (diff === 0) return "We're in the same timezone!";
              return `${Math.abs(diff)}h ${diff > 0 ? "ahead of" : "behind"} you`;
            })()}
          </p>
        </>
      ) : (
        <div className="h-10 animate-pulse bg-base-300 rounded" />
      )}
    </BentoCard>
  );
};

export default TimeCard;
