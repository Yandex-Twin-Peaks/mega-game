import * as React from 'react';
import {
  CssBaseline,
  Typography, Container, TableRow,
  Table, TableBody, TableContainer,
  TableHead, Paper, Box, Avatar,
  TableCell, tableCellClasses, styled
} from '@mui/material';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
// import { sendAddDataLeaderboardRequest } from '../../../_store/services/leaderboard.services';
import { getLeaderboardPending, /*postLeaderboardPending*/ } from '../../../_store/actions/leaderboard.actions';

const emojiSet = [
  '🎉',
  '🎊',
  '🔥',
  '🚀',
  '👑',
  '🍾',
  '🎂',
  '🍷',
  '💃',
  '🥂'
];

export default function LeaderBoard() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: { fontSize: 14, },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover, },
    '&:last-child td, &:last-child th': { border: 0, },
  }));


  const dispatch = useDispatch();

  useEffect(() => {

    // const requestadd: any = {
    //   ratingFieldName: 'viselica',
    //   teamName: 'twinpeaks',
    //   data: {
    //     id: 1,
    //     userid: 'vasya',
    //     viselica: 'ratingtwinpeaks',
    //   },
    // };

    // dispatch(postLeaderboardPending(requestadd));



    const requesgett: any = {
      ratingFieldName: 'viselica',
      limit: 10,
      cursor: 0,
    };

    dispatch(getLeaderboardPending(requesgett));
  });

  function createData(
    avatarURL: string,
    name: string,
    score: number,
  ) {
    return {
      avatarURL,
      name,
      score,
    };
  }

  const rows = [
    createData('https://mui.com/static/images/avatar/', 'Frozen yoghurt', 159),
    createData('https://mui.com/static/images/avatar/', 'Ice cream sandwich', 237),
    createData('https://mui.com/static/images/avatar/', 'Eclair', 262),
    createData('https://mui.com/static/images/avatar/', 'Cupcake', 305),
    createData('https://mui.com/static/images/avatar/', 'Gingerbread', 356),
  ];

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth='lg'>
        <Typography variant='h2' component='h2' gutterBottom>
          Список победителей
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ width: 60 }}>
                  <Typography variant='h5' component='h5'>
                    Место
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align='left'>
                  <Typography variant='h5' component='h5'>
                    Имя игрока
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <Typography variant='h5' component='h5'>
                    Количество очков
                  </Typography>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component='th' scope='row' align='center'>
                    <Typography variant='h5'>
                      {i + 1}.
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    <Box sx={{
                      p: 1,
                      display: 'flex'
                    }} alignContent='center'>
                      <Avatar variant='rounded' alt={row.name} src={row.avatarURL + i + '.jpg'} sx={{
                        width: 56,
                        height: 56
                      }} aria-label='recipe'/>
                      <Typography paddingLeft={1} variant='h5' gutterBottom>{row.name}</Typography>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    <Typography variant='h5'>
                      {row.score} {emojiSet[row.score % 10]}
                    </Typography>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
}
