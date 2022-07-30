import * as React from 'react';
import {
  CssBaseline,
  Typography, Container, TableRow,
  Table, TableBody, TableContainer,
  TableHead, Paper, Box, Avatar,
  TableCell, tableCellClasses, styled
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLeaderboardPending } from '../../../_store/actions/leaderboard.actions';
import { IStore } from '../../../_store';
import { IleaderBoardState } from '../../../_store/reducers/leaderboard.reducer';

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

  const { rating } = useSelector<IStore, IleaderBoardState>( state => state.leaderBoard );

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

    const getLeaderBoardRequest: any = {
      ratingFieldName: 'viselicatwin',
      limit: 10,
      cursor: 0,
    };

    dispatch(getLeaderboardPending(getLeaderBoardRequest));
  }, []);

  const AVATAR_PATH = 'https://ya-praktikum.tech/api/v2/resources/';

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
              {rating[0] && rating[0].map((row:any, i:number) => (
                <StyledTableRow key={row.data.userName}>
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
                      <Avatar variant='rounded' alt={row.data.userName}
                        src={row.data.avatar ?
                          AVATAR_PATH + row.data.avatar :
                          'https://ichef.bbci.co.uk/news/800/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg.webp'}
                        sx={{
                          width: 56,
                          height: 56
                        }} aria-label='recipe'/>
                      <Typography paddingLeft={1} variant='h5' gutterBottom>{row.data.userName}</Typography>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    <Typography variant='h5'>
                      {row.data.rating} {emojiSet[row.data.rating % 10]}
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
