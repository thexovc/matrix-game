// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import {
//   MDBTable,
//   MDBTableHead,
//   MDBTableBody,
//   MDBRow,
//   MDBCol,
//   MDBContainer,
//   MDBBtn,
//   MDBBtnGroup,
//   MDBPagination,
//   MDBPaginationItem,
//   MDBPaginationLink,
// } from "mdb-react-ui-kit";

// const URL =
//   "https://gateway.pinata.cloud/ipfs/QmXka5bUMJw2bk8M5A89C7NiX5oVrbWYQiEsvSdJJtMiKc";

// const SellersTable = () => {
//   const [data, setData] = useState([]);
//   const [value, setValue] = useState("");
//   const [sortValue, setSortValue] = useState("");
//   const [currentPage, setCurrentPage] = useState(0);
//   const [sortFilterValue, setSortFilterValue] = useState("");
//   const [operation, setOperation] = useState("");
//   const [pageLimit] = useState(4);

//   const sortOptions = ["name", "email", "address", "status", "phone"];

//   useEffect(() => {
//     loadUsersData(0, 4, 0);
//     const test = async (cid) => {
//       try {
//         const resFile = await axios({
//           method: "get",
//           url: "https://api.jsonbin.io/v3/b/63bf401615ab31599e33f91c",

//           headers: {
//             Authorization: `Bearer $2b$10$QzLk5ZAJ2GGEf1RpyE1IwuDavjV.inobLgRG09DQRlmazXBTEpsHa`,
//           },
//         });

//         console.log(resFile);
//       } catch (error) {
//         console.log("Error sending File to IPFS: ");

//         console.log(error);
//       }
//     };

//     test();
//   }, []);

//   const loadUsersData = async (
//     start,
//     end,
//     increase,
//     optType = null,
//     filterOrSortValue
//   ) => {
//     switch (optType) {
//       case "search":
//         setOperation(optType);
//         setSortValue("");
//         return await axios
//           .get(
//             `http://localhost:5000/users?q=${value}&_start=${start}&_end=${end}`
//           )
//           .then((response) => {
//             setData(response.data);
//             setCurrentPage(currentPage + increase);
//           })
//           .catch((err) => console.log(err));
//       case "sort":
//         setOperation(optType);
//         setSortFilterValue(filterOrSortValue);
//         return await axios
//           .get(
//             `http://localhost:5000/users?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
//           )
//           .then((response) => {
//             setData(response.data);
//             setCurrentPage(currentPage + increase);
//           })
//           .catch((err) => console.log(err));
//       default:
//         return await axios
//           .get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
//           .then((response) => {
//             setData(response.data);
//             setCurrentPage(currentPage + increase);
//           })
//           .catch((err) => console.log(err));
//     }
//   };

//   const handleReset = () => {
//     setOperation("");
//     setValue("");
//     setSortFilterValue("");
//     setSortValue("");
//     loadUsersData(0, 4, 0);
//   };
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     loadUsersData(0, 4, 0, "search");
//     // return await axios
//     //   .get(`http://localhost:5000/users?q=${value}`)
//     //   .then((response) => {
//     //     setData(response.data);
//     //     setValue("");
//     //   })
//     //   .catch((err) => console.log(err));
//   };

//   const handleSort = async (e) => {
//     let value = e.target.value;
//     setSortValue(value);
//     loadUsersData(0, 4, 0, "sort", value);
//     // return await axios
//     //   .get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
//     //   .then((response) => {
//     //     setData(response.data);
//     //   })
//     //   .catch((err) => console.log(err));
//   };

//   const renderPagination = () => {
//     if (data.length < 4 && currentPage === 0) return null;
//     if (currentPage === 0) {
//       return (
//         <MDBPagination>
//           <MDBPaginationItem>
//             <MDBPaginationLink>1</MDBPaginationLink>
//           </MDBPaginationItem>
//           <MDBPaginationItem>
//             <MDBBtn
//               onClick={() => loadUsersData(4, 8, 1, operation, sortFilterValue)}
//             >
//               Next
//             </MDBBtn>
//           </MDBPaginationItem>
//         </MDBPagination>
//       );
//     } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
//       return (
//         <MDBPagination>
//           <MDBPaginationItem>
//             <MDBBtn
//               onClick={() =>
//                 loadUsersData(
//                   (currentPage - 1) * 4,
//                   currentPage * 4,
//                   -1,
//                   operation,
//                   sortFilterValue
//                 )
//               }
//             >
//               Previous
//             </MDBBtn>
//           </MDBPaginationItem>
//           <MDBPaginationItem>
//             <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
//           </MDBPaginationItem>

//           <MDBPaginationItem>
//             <MDBBtn
//               onClick={() =>
//                 loadUsersData(
//                   (currentPage + 1) * 4,
//                   (currentPage + 2) * 4,
//                   1,
//                   operation,
//                   sortFilterValue
//                 )
//               }
//             >
//               Next
//             </MDBBtn>
//           </MDBPaginationItem>
//         </MDBPagination>
//       );
//     } else {
//       return (
//         <MDBPagination>
//           <MDBPaginationItem>
//             <MDBBtn
//               onClick={() =>
//                 loadUsersData(
//                   (currentPage - 1) * 4,
//                   currentPage * 4,
//                   -1,
//                   operation,
//                   sortFilterValue
//                 )
//               }
//             >
//               Prev
//             </MDBBtn>
//           </MDBPaginationItem>
//           <MDBPaginationItem>
//             <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
//           </MDBPaginationItem>
//         </MDBPagination>
//       );
//     }
//   };

//   return (
//     <MDBContainer>
//       <form
//         style={{
//           margin: "auto",
//           padding: "15px",
//           maxWidth: "400px",
//           alignContent: "center",
//         }}
//         className="d-flex input-group w-auto"
//         onSubmit={handleSearch}
//       >
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search Name"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />

//         <MDBBtn type="submit" color="dark">
//           Search
//         </MDBBtn>
//         <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>
//           Reset
//         </MDBBtn>
//       </form>
//       <div style={{ marginTop: "100px" }}>
//         <h2 className="text-center">
//           Search, Filter, Sort and Pagination using Json
//         </h2>
//         <MDBRow>
//           <MDBCol size="12">
//             <MDBTable>
//               <MDBTableHead dark>
//                 <tr>
//                   <th scope="col">No</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Email</th>
//                   <th scope="col">Phone</th>
//                   <th scope="col">Address</th>
//                   <th scope="col">Status</th>
//                 </tr>
//               </MDBTableHead>
//               {data.length === 0 ? (
//                 <MDBTableBody className="align-center mb-0">
//                   <tr>
//                     <td colSpan={0} className="text-center mb-0">
//                       No Data Found
//                     </td>
//                   </tr>
//                 </MDBTableBody>
//               ) : (
//                 data.map((item, index) => (
//                   <MDBTableBody key={index}>
//                     <tr>
//                       <th scope="row">{index + 1}</th>
//                       <th scope="row">{item.name}</th>
//                       <th scope="row">{item.email}</th>
//                       <th scope="row">{item.phone}</th>
//                       <th scope="row">{item.address}</th>
//                       <th scope="row">{item.status}</th>
//                     </tr>
//                   </MDBTableBody>
//                 ))
//               )}
//             </MDBTable>
//           </MDBCol>
//         </MDBRow>
//         <div
//           style={{
//             margin: "auto",
//             padding: "15px",
//             maxWidth: "350px",
//             alignContent: "center",
//           }}
//         >
//           {renderPagination()}
//         </div>
//       </div>
//       {data.length > 0 && (
//         <MDBRow>
//           <MDBCol size="8">
//             <h5>Sort By :</h5>
//             <select
//               style={{ width: "50%", borderRadius: "2px", height: "35px" }}
//               onChange={handleSort}
//               value={sortValue}
//             >
//               <option value="">Please Select Value</option>
//               {sortOptions.map((item, index) => (
//                 <option key={index} value={item}>
//                   {item}
//                 </option>
//               ))}
//             </select>
//           </MDBCol>
//           <MDBCol size="4">
//             <h5>Filter By Status:</h5>
//           </MDBCol>
//         </MDBRow>
//       )}
//     </MDBContainer>
//   );
// };

// export default SellersTable;
