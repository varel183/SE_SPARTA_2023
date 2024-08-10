export default function Achievements() {
  const achievements = [
    {
      title: "3rd Place in BMEC 2021",
      description: "Successfully achieved 3rd place in the BMEC 2021 competition at the national level.",
    },
    {
      title: "1st Place in Champ 2022",
      description: "Received the 1st place award in the Chemistry Champ 2022 competition at the national level.",
    },
    {
      title: "4th Place in BMEC 2022",
      description: "Once again successfully achieved 4th place in the BMEC 2022 competition at the national level."
    },
    {
      title: "Finalist in MEDSPIN 2022",
      description: "Became one of the finalists in the MEDSPIN 2022 competition at the international level."
    }
  ];

  return (
    <section id="achievements" className="p-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-700">{index + 1}</span>
                <h3 className="text-2xl font-bold">. {achievement.title}</h3>
              </div>
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
