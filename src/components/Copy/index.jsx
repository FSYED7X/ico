import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopiedIcon, CopyIcon } from "../../assets/Icons";

export default function Copy({ value }) {
  const [copied, setCopied] = useState(false);
  return (
    <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
      <IconButton size="small" sx={{ py: 0 }}>
        {copied ? (
          <CopiedIcon height={18} width={18} />
        ) : (
          <CopyIcon height={18} width={18} />
        )}
      </IconButton>
    </CopyToClipboard>
  );
}
