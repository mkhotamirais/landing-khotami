import { PiSpinner } from "react-icons/pi";

export function Loading() {
  return (
    <div className="mt-12 text-3xl flex justify-center">
      <PiSpinner className="animate-spin" />
    </div>
  );
}
