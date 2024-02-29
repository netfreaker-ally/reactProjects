export async function fetchMeals() {
  const resp = await fetch("https://tthdnz-3000.csb.app/meals");
  const respData = await resp.json();
  if (!resp.ok) {
    console.log("error occured while fetching");
    throw new Error("error occured while fetching");
  }
  return respData;
}
