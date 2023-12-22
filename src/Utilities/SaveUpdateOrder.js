// const DB_FILE_PATH = "../../db.json";

// const readDbFile = async () => {
//   try {
//     const response = await fetch(DB_FILE_PATH);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error reading db.json:", error);
//     return null;
//   }
// };

// const writeDbFile = async (data) => {
//   try {
//     await fetch(DB_FILE_PATH, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//   } catch (error) {
//     console.error("Error writing to db.json:", error);
//   }
// };

// export { readDbFile, writeDbFile };
// *
// const DB_FILE_PATH = "../../db.json";

// const readDbFile = async () => {
//   try {
//     const response = await fetch(DB_FILE_PATH);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error reading db.json:", error);
//     return null;
//   }
// };

// const writeDbFile = async (data) => {
//   try {
//     await fetch(DB_FILE_PATH, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//   } catch (error) {
//     console.error("Error writing to db.json:", error);
//   }
// };

// const updateBoardData = (updatedBoard) => {
//   const dbData = readDbFile();
//   const boardIndex = dbData.boards.findIndex((b) => b.id === updatedBoard.id);
//   console.log("Board Index:", boardIndex);
//   if (boardIndex !== -1) {
//     dbData.boards[boardIndex] = updatedBoard;
//     return dbData.boards;
//   } else {
//     console.error("Board not found in dbData");
//     return dbData.boards; // Return the existing boards array unchanged
//   }
// };

// export { readDbFile, writeDbFile, updateBoardData };
