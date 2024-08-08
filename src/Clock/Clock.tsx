import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState<Date>();

  // do not forget to do cleanup
  useEffect(() => {
    const timerID = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(timerID);
    };
  }, []);

  if (time === null) return null;

  return (
    <section>
      <h1>Current Time</h1>
      {/* use ! to tell TS this does exist */}
      <p>{time!.toLocaleString()}</p>
    </section>
  );
}
