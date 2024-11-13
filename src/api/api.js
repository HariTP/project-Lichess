export const getUserDetails = async () => {
    const response = await fetch(`https://lichess.org/api/user/${username}`, {
      method: "GET",
    });
    return await response.json();
  };
  
  export const getProblemDescription = async (id) => {
    const response = await fetch(
      `https://lichess.org/player/top/10/bullet.`,
      {
        method: "GET",
      }
    );
    return await response.json();
  };
  
  export const getCode = async (id) => {
    const response = await fetch(`https://lichess.org/api/tournament`, {
      method: "GET",
    });
    return await response.json();
  };
  