export function ThemeInitScript() {
  const script = `(function(){try{var k='keploy-docs-theme';var s=localStorage.getItem(k);var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;if(d){r.classList.add('dark');r.style.colorScheme='dark';}else{r.classList.remove('dark');r.style.colorScheme='light';}}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
