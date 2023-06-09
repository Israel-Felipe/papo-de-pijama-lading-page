/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* Início do código do pixel do Facebook */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '785607259813837');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Fim do código do pixel do Facebook */}

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W6C9W86');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* HotmartLauncherObject*/}
        <script
          id="hotmart_launcher_script"
          dangerouslySetInnerHTML={{
            __html: `
              (function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){
              (l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),
              e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)
              })(window,document,'script','//launcher.hotmart.com/launcher.js','hot');

              hot('account','7c5d0fc4-23ca-32a8-8683-e97ddd916a7e');
            `,
          }}
        />
        {/* End HotmartLauncherObject*/}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=785607259813837&ev=PageView&noscript=1"
          alt="logo"
        />

        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W6C9W86"
          height="0"
          width="0"
          style={{ display: 'none' }}
        ></iframe>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
