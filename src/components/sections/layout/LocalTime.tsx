'use client';

import { useEffect, useState } from 'react';

const format = () =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Africa/Lagos',
  }).format(new Date());

// Peter's local time, so visitors in other time zones know when to expect a reply.
const LocalTime = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time ?? '--:--'}</span>;
};

export default LocalTime;
