  export function formatHtml(html) {
    if (!html) return '';
    
    const tab = '  ';
    let formatted = '';
    let indent = '';
    
    html.split(/>\s*</).forEach((node) => {
      if (node.match(/^\/\w/)) {
        indent = indent.substring(0, indent.length - tab.length); // closing tag
      }
      
      formatted += indent + '<' + node + '>\n';
      
      if (node.match(/^<?\w[^>]*[^/]$/) && !node.match(/^<(br|hr|img|input|link|meta|area|base|col|command|embed|keygen|param|source|track|wbr)/)) {
        indent += tab; // opening tag
      }
    });
    
    return formatted.trim();
  }
  