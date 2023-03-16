import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

type MarkdownProps = {
  children: string;
  src?: string;
};

export const Markdown = ({ children, src }: MarkdownProps) => {
  const cache = useRef({});
  const [markdown, setMarkdown] = useState<string>(
    cache[src || ''] || children || ''
  );

  useEffect(() => {
    if (src && !cache[src]) {
      fetch(src)
        .then((response) => response.text())
        .then((text) => {
          cache.current[src] = text;
          setMarkdown(text);
        });
    }
  });

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: (props) => {
          return (
            <Link to={props.href || '/'} component={RouterLink}>
              {props.children}
            </Link>
          );
        },
        table: (props: any) => {
          return (
            <Table>
              <TableHead>
                <TableRow>
                  {props.children[0].props.children[0].props.children?.map(
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
      {src ? markdown : children}
    </ReactMarkdown>
  );
};
