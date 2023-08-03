export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0NDRlODAwNi1jMDI1LTQzMWEtYWExNC1jZjhiMTM1ZTFlZjIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5MDk3MDM3MywiZXhwIjoxNjkxNTc1MTczfQ.G1yHB4XVRqV4fngP8pN4QzuuTX4CPTsPzI7iqo2xaJM"; // token should be in String format

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const { roomId } = await res.json();
  console.log("room id", roomId);
  return roomId;
};
