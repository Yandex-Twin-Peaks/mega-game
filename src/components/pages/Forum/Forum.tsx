import React, {
  useState, ChangeEvent, useEffect
} from 'react';

import { useSelector } from 'react-redux';
import './Forum.pcss';


import AddTopic from '../../molecules/AddTopic';
import axios from 'axios';
import TopicCard from '../../molecules/TopicCard';


const Forum = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [topics, setTopics] = useState([]);
  const userId = useSelector<any>((state: { auth: { user: { id: any; }; }; }) => state.auth.user.id);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleAddTopicSubmit(event:any) {
    event.preventDefault();
    axios.post('/topic', {
      title: event.target[0].value,
      userId
    }).then(() =>
      getTopics());
  }


  function getTopics() {
    // @ts-ignore
    axios.get('/topic').then((data):any => setTopics(data));
  }

  useEffect(() => {
    getTopics();
  }, []);


  function handleDeleteOneTopic(event:any) {
    console.log(event.target.dataset.topicId);
    axios.delete(`/topic/${event.target.dataset.topicId}`).then(() => getTopics());

  }

  console.log(topics, 'final topics');

  // @ts-ignore
  const topicArr: any = topics.data;


  return (
    <>
      <div className='ForumTopics'>
        {topicArr && topicArr.map((el:any) => (
          <TopicCard id={el.id} title={el.title} ownerId={el.userId} handleDelete={handleDeleteOneTopic} />
        ))}
      </div>

      <AddTopic handleAddTopic={handleAddTopicSubmit} />
    </>
  );
};

export default Forum;

// {/* <Paper sx={{
//   width: '100%',
//   overflow: 'hidden'
// }}>
//   <TableContainer sx={{ maxHeight: 440 }}>
//     <Table stickyHeader aria-label='sticky table'>
//       <TableHead>
//         <TableRow>
//           {columns.map((column) => (
//             <TableCell
//               key={column.id}
//               align={column.align}
//               style={{ minWidth: column.minWidth }}
//             >
//               {column.label}
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows
//           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//           .map((row) => {
//             return (
//               <TableRow hover role='checkbox' tabIndex={-1} key={row.replies}>
//                 {/* {columns.map((column) => {
//                   const value = row[column.id];
//                   return (
//                     <TableCell key={column.id} align={column.align}>
//                       { value }
//                     </TableCell>
//                   );
//                 })} */}

//                 </TableRow>
//                 );
//               })}


//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component='div'
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper> */}
