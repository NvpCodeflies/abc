import React from 'react';

export default function Button({
  buttonUrl,
  buttonText,
  openLinkInNewTab,
  type,
}: {
  buttonUrl?: string;
  buttonText?: string;
  openLinkInNewTab?: boolean;
  type?: string;
}) {
  return (
    <>
      {buttonUrl && (
        <a
          href={buttonUrl}
          className={'theme_btn ' + (type ? 'theme_btn-seoncdary' : 'theme_btn-primary ')}
          target={openLinkInNewTab ? '_blank' : '_self'}
        >
          {buttonText}
        </a>
      )}
      {!buttonUrl && (
        <button className={'theme_btn ' + (type ? 'theme_btn-seoncdary' : 'theme_btn-primary ')}>{buttonText}</button>
      )}
    </>
  );
}
