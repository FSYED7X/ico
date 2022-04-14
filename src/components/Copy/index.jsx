import { IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopiedIcon, CopyIcon } from "../../assets/Icons";
import { useAppContext } from "./../../hooks/index";

export default function Copy({ value, title }) {
  const [copied, setCopied] = useState(false);
  const { isSmall } = useAppContext();
  return (
    <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
      <Tooltip
        title={copied ? "Copied" : `Copy ${title}`}
        placement="top"
        disableInteractive
        arrow
      >
        <IconButton
          size="small"
          sx={{ py: 0 }}
          onBlur={(event) =>
            isSmall &&
            setTimeout(() => {
              setCopied(false);
            }, 1000)
          }
          onMouseLeave={(event) =>
            !isSmall &&
            setTimeout(() => {
              setCopied(false);
            }, 1000)
          }
        >
          {copied ? (
            <CopiedIcon height={18} width={18} />
          ) : (
            <CopyIcon height={18} width={18} />
          )}
        </IconButton>
      </Tooltip>
    </CopyToClipboard>
  );
}
