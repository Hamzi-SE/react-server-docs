import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

type MarkdownProps = {
  children: string;
  src?: string;
};

export const Markdown = ({ children, src }: MarkdownProps) => {
  const [markdown, setMarkdown] = useState<string>(children || '');

  useEffect(() => {
    if (src) {
      fetch(src)
        .then((response) => response.text())
        .then((text) => {
          setMarkdown(text);
        });
    }
  }, []);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        pre: (props: any) => {
          return (
            <SyntaxHighlighter
              language={
                (props.children[0]?.props?.className || '-bash').split('-')[1]
              }
              style={a11yDark}
            >
              {props.children[0].props.children}
            </SyntaxHighlighter>
          );
        },
        a: (props) => {
          return (
            <Link to={props.href || '/'} component={RouterLink}>
              {props.children}
            </Link>
          );
        },
        blockquote: (args) => {
          return (
            <Box
              sx={{
                borderLeft: '4px solid',
                borderColor: 'primary.main',
              }}
            >
              <blockquote {...args} />
            </Box>
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
