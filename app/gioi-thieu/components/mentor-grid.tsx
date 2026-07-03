import { mentors } from "./data";
import { MentorCard } from "./mentor-card";

export function MentorGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mentors.map((mentor, index) => (
        <MentorCard key={mentor.id} mentor={mentor} index={index} />
      ))}
    </div>
  );
}
