function calculateClockAngle(time: string): number {
    const [hour, minute] = time.split(':').map(Number);
  
    // Calculate the angles for the hour and minute hands
    const hourAngle = (hour % 12) * 30 + minute * 0.5;
    const minuteAngle = minute * 6;
  
    // Calculate the absolute difference between the angles
    let angle = Math.abs(hourAngle - minuteAngle);
  
    // Consider the shorter angle (360 degrees - angle) if it's greater
    if (angle > 180) {
      angle = 360 - angle;
    }
  
    return angle;
  }
  
  // Example usage:
  const inputTime = "17:30";
  const angle = calculateClockAngle(inputTime);
  console.log(`Time: ${inputTime}`);
  console.log(angle);
  