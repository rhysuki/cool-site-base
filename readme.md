# nikki's cool site base

<figure align="center">
    <img src="/public/images/site_image.png">
</figure>

a little downloadable site layout to get webdev beginners up and running quick and easy.

it comes with some snazzy styling, automatically-updating blog page, and basic HTML examples - all lovingly commented.

> [!IMPORTANT]
> this base was made with [its companion blogpost](https://nikki.quest/blog/cool-site-base/) in mind. please go read it for more detailed info and further resources.

# usage
this is a ready-to-use [Astro](https://astro.build/) site. to set it up, download the entire repo and extract it into a folder. then `cd` to that folder and run `npm install` to install all dependencies (you might have to use `npm approve-scripts` if it complains about unallowed scripts).

to run in dev mode, use `npm run dev` and open `http://localhost:4321` in your browser.

to deploy, run `npm run build`, then copy the contents of the `/dist` folder to your website host (or use something like [Netlify](https://www.netlify.com/) to auto-deploy from GitHub).

# license
code and images are under the MIT license. the main font, [Fantasque Sans](https://github.com/belluzj/fantasque-sans), is licensed under OFL 1.1. see [LICENSE](/LICENSE.txt).