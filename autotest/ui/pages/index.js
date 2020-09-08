const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const { rejects } = require('assert');

const ROOT_PATH = ['autotest', 'ui', 'pages'];

const SNAPSHOTS_PATH = [...ROOT_PATH, 'home', 'snapshots'];
const PAGE_DIFF_PATH = [...ROOT_PATH, 'home', 'pagediff'];

const screenshotPage = async ({ url, name = 'Default' }) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const screenshotPath = await page.goto(url);
    await page.screenshot({
        path: path.join(
            ...SNAPSHOTS_PATH,
            `${name}_${new Date().valueOf()}.png`
        ),
    });

    await browser.close();
};

const readdirAsync = function (directoryPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, filenames = []) => {
            if (err) reject(err);
            else resolve(filenames);
        });
    });
};

const verifySnapshot = async ({ url, name = 'Default' }) => {
    await screenshotPage({ url, name });

    const filenames = await readdirAsync(path.join(...SNAPSHOTS_PATH));
    console.log(filenames);

    // fs.readdir(path.join(...SNAPSHOTS_PATH), (err, filenames = []) => {
    //     // control images amounts

    //     filenames.slice(0, 2).forEach((fileName) => {
    //             fs.unlink(path.join(...SNAPSHOTS_PATH, fileName), (err) => {
    //                 if (err) {
    //                     console.log(err);
    //                     return;
    //                 }
    //             });
    //         });
    //     }
    //     // compare last two screenshots
    //     const [img1, img2] = filenames
    //         .slice(filenames.length - 2, filenames.length)
    //         .map((filename) =>
    //             PNG.sync.read(
    //                 fs.readFileSync(path.join(...SNAPSHOTS_PATH, filename))
    //             )
    //         );
    //     const { width, height } = img1;
    //     const diff = new PNG({ width, height });

    //     pixelmatch(img1.data, img2.data, diff.data, width, height, {
    //         threshold: 0.9,
    //     });

    //     fs.writeFileSync(
    //         path.join(...PAGE_DIFF_PATH, `${NAME}diff.png`),
    //         PNG.sync.write(diff)
    //     );
    //     console.log(filenames);
    // });
};

module.exports = verifySnapshot;
