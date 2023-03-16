import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export const Markdown = ({ children }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: (props) => {
          console.log('LINK', props);
          return (
            <Link to={props.href} component={RouterLink}>
              {props.children}
            </Link>
          );
        },
        table: (props) => {
          return (
            <Table>
              <TableHead>
                <TableRow>
                  {props.children[0].props.children[0].props.children.map(
                    (e) => {
                      return <TableCell>{e}</TableCell>;
                    }
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.children[1].props.children.map((row) => {
                  return (
                    <TableRow>
                      {row.props.children.map((e) => {
                        return <TableCell>{e}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
