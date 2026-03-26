interface Window {
  Calendly?: {
    initInlineWidget: (opts: {
      url: string;
      parentElement: HTMLElement;
    }) => void;
    initBadgeWidget: (opts: {
      url: string;
      text: string;
      color: string;
      textColor: string;
    }) => void;
  };
}
