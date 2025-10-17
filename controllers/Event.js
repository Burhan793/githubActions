function isValidEvent(event) {
  // Check if all required fields are present
  if (!event.name || !event.date || !event.category) {
    return { valid: false, message: "Missing required event fields" };
  }

  // Convert date string to Date object
  const eventDate = new Date(event.date);
  const now = new Date();

  // Check for invalid date format
  if (isNaN(eventDate.getTime())) {
    return { valid: false, message: "Invalid date format" };
  }

  // Normalize both dates to midnight to ignore time-of-day differences
  now.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);

  // Disallow past dates
  if (eventDate < now) {
    return { valid: false, message: "Event date cannot be in the past" };
  }

  // All checks passed
  return { valid: true, message: "Event is valid" };
}

module.exports = { isValidEvent };
