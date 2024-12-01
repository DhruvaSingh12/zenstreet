import Header from "@/components/Header";
import SessionCard from "./components/SessionCard";

const sessions = [
  {
    title: "Group Therapy",
    type: "Group" as "Group",
    description: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow-up Plan",
    ],
  },
  {
    title: "Individual Therapy",
    type: "Individual" as "Individual",
    description: [
      "Personalized Evaluation",
      "Therapeutic Exercises",
      "Goal-oriented Sessions",
      "Stress Management",
      "Emotional Balance Techniques",
    ],
  },
  {
    title: "Couple Therapy",
    type: "Couple" as "Couple",
    description: [
      "Relationship Assessment",
      "Conflict Resolution",
      "Communication Skills",
      "Rebuilding Trust",
      "Setting Goals Together",
    ],
  },
];

export default function SessionPage() {
  return (
    <div>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Main Content */}
      <div className="pt-[100px] bg-gray-50">
        <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl mx-4 lg:mx-48 p-1 bg-blue-600 rounded-3xl mb-6 text-gray-100 text-center shadow-lg">
  Choose your therapy session
</h1>



          {/* Sessions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <SessionCard key={session.title} session={session} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
