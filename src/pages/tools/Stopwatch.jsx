import { useEffect, useState } from "react";
import { FaArrowRotateLeft, FaCaretRight, FaPause } from "react-icons/fa6";
import { Button } from "../../components/Buttons";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    } else clearInterval(interval);
    return () => clearInterval(interval);
  }, [start]);

  const toggleStart = () => setStart((prev) => !prev);
  const handleReset = () => setTime(0);

  const formatTime = (time) => {
    const miliseconds = `0${time}`.slice(-2);
    const seconds = `0${Math.floor((time / 100) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 100 / 60) % 60)}`.slice(-2);
    return `${minutes}:${seconds}:${miliseconds}`;
  };

  const formattedTime = formatTime(time);

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="border flex flex-col gap-3 rounded-xl p-5 bg-gray-50 bg-opacity-50">
        <div className="text-6xl">{formattedTime}</div>
        <div className="rounded flex gap-1 justify-center">
          <Button disabled={start} onClick={handleReset} className="text-xl">
            <FaArrowRotateLeft />
          </Button>
          <Button className="text-4xl" onClick={toggleStart}>
            {start ? <FaPause /> : <FaCaretRight />}
          </Button>
        </div>
      </div>
    </section>
  );
}
