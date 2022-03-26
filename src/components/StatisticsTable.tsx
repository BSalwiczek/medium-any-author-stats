import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Author } from '../types/Author';


interface StatisticsTableProps {
    author: Author
}

class Row {
  constructor(
    public readonly name: string,
    public readonly total: number,
    public readonly perPost: number,
    public readonly perFollower: number,
  ) {}
}



export function StatisticsTable({author}: StatisticsTableProps) {
  const rows = [
    new Row(
      'Claps 👏', 
      author.totalClaps, 
      author.clapsPerPost, 
      author.clapsPerFollower
    ),
    new Row(
      'Responses 💬', 
      author.totalResponses, 
      author.responsesPerPost, 
      author.responsesPerFollower
    ),
    new Row(
      'Clappers 👤', 
      author.totalClappers, 
      author.clappersPerPost, 
      author.clappersPerFollower
    ),
  ];


  return (
    <TableContainer>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Statistics</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Per post</TableCell>
            <TableCell align="right">Per follower</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.perPost}</TableCell>
              <TableCell align="right">{row.perFollower}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}