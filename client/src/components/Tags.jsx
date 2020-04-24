// import React, { useContext, useEffect, useState } from "react";
// import PropertyContext from "../context/PropertyContext";
// import tw from "twin.macro";

// const CardTags = tw.div`flex flex-row w-full justify-center px-2 py-4`;
// const TagContainer = tw.div`flex text-xs font-semibold mx-2 py-2`;
// const TagSpan = tw.span`bg-gray-200 rounded-full shadow-md mx-2 px-3 py-2 text-gray-700 truncate`;

// const Tags = () => {
//   return (
//     <>
//       <CardTags>
//         <TagContainer>
//           <GetTags />
//         </TagContainer>
//       </CardTags>
//     </>
//   );
// };

// export default Tags;

// export const GetTags = ({ children }) => {
//   const propertyData = useContext(PropertyContext);

//   // console.log(propertyData);
//   const arr = propertyData.map((tags) =>
//     tags._embedded["wp:term"][0]
//       .map((tag) => tag.name)
//       .map((result) => result)
//       .map((result) => result)
//   );

//   // const arr = propertyData.map((results) => results);

//   console.log(arr);

//   // console.log(nestedData);

//   return (
//     <>
//       {arr.map((data, index) => (
//         <TagSpan key={index}>#{data}</TagSpan>
//       ))}
//     </>
//   );
// };
