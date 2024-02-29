import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  function addMeetupHandler(enteredMeteredDate) {
    console.log(enteredMeteredDate);
  }
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
