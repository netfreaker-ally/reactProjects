import MeetupDetail from "@/components/meetups/MeetupDetails";
import { useRouter } from "next/router";
const MeetUpDetails = () => {
  return (
    <>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg"
        title="A first MeetUP"
        address="Hyderabad"
        description="Famous for Charmminar"
      ></MeetupDetail>
    </>
  );
};

export default MeetUpDetails;
