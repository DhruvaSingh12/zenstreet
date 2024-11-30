import Header from "@/components/Header";
import SessionCard from "./components/SessionCard";

const sessions = [
  {
    title: "Group Therapy",
    price: 3200,
    duration: "60 min",
    description: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
  },
  {
    title: "Individual Therapy",
    price: 3200,
    duration: "60 min",
    description: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
  },
  {
    title: "Couple Therapy",
    price: 3200,
    duration: "60 min",
    description: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
  },
];

export default function App() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className="pt-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {sessions.map((session) => (
            <SessionCard key={session.title} session={session} />
          ))}
        </div>
      </div>
    </div>
  );
}
