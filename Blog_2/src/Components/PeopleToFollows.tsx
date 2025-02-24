import UserCard from "./UserCard";

const peopleToFollow = [
  { name: "Alena Gouse", following: false },
  { name: "Ruben Bator", following: true },
  { name: "Aspen Stanton", following: false },
  { name: "Madelyn George", following: false },
];

const PeopleToFollows = () => {
  return (
    <section className="border border-gray-200 p-4 rounded-md shadow flex gap-2 flex-col min-w-fit ">
      <h2 className="text-lg font-semibold">People To Follow</h2>
      <div className="flex flex-col gap-1">
        {peopleToFollow.map((person, index) => (
          <div key={index}>
            <UserCard name={person.name} following={person.following} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PeopleToFollows;
