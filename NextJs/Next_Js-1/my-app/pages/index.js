import MeetupList from "@/components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
    adddress: "Address1",
    description: "This is Description",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
    adddress: "Address2",
    description: "This is Description2",
  },
];
const HomePage = () => {
  return (
    <>
 <h1>HomePage</h1>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
};

export default HomePage;
