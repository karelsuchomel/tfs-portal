<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php bloginfo('name');?></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Windows tile graphics and RSS feed -->
    <?php $templateURL = get_bloginfo('template_url'); ?>
    <meta name="application-name" content="www.zshroznova.cz"/>
    <meta name="msapplication-square70x70logo" content="<?php echo $templateURL; ?>/assets/images/ms-windows-tiles/small.jpg"/>
    <meta name="msapplication-square150x150logo" content="<?php echo $templateURL; ?>/assets/images/ms-windows-tiles/medium.jpg"/>
    <meta name="msapplication-wide310x150logo" content="<?php echo $templateURL; ?>/assets/images/ms-windows-tiles/wide.jpg"/>
    <meta name="msapplication-square310x310logo" content="<?php echo $templateURL; ?>/assets/images/ms-windows-tiles/large.jpg"/>
    <meta name="msapplication-TileColor" content="#00b04c"/>
    <meta name="msapplication-notification" content="frequency=30;polling-uri=http://notifications.buildmypinnedsite.com/?feed=https://www.zshroznova.cz/feed/&amp;id=1;polling-uri2=http://notifications.buildmypinnedsite.com/?feed=https://www.zshroznova.cz/feed/&amp;id=2;polling-uri3=http://notifications.buildmypinnedsite.com/?feed=https://www.zshroznova.cz/feed/&amp;id=3;polling-uri4=http://notifications.buildmypinnedsite.com/?feed=https://www.zshroznova.cz/feed/&amp;id=4;polling-uri5=http://notifications.buildmypinnedsite.com/?feed=https://www.zshroznova.cz/feed/&amp;id=5; cycle=1"/>
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <?php wp_head(); ?>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  <?php wp_footer(); ?>
  </body>
</html>






