const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const ROOT_PATH = ['autotest', 'ui', 'pages'];
const URL = 'http://localhost:3000';
const PAGES_PATH = ['pages'];

const readdirAsync = function (directoryPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, filenames = []) => {
            if (err) reject(err);
            //sort with filename
            else resolve(filenames.sort((a, b) => a - b));
        });
    });
};

const getPageNames = () => {
    return readdirAsync(...PAGES_PATH).then((pageNames) =>
        pageNames
            .filter(
                (pageName) =>
                    pageName.includes('.js') && pageName.slice(0, 1) !== '_'
            )
            .map((pageName) => pageName.replace('.js', '_'))
    );
};

const SNAPSHOTS_PATH = [...ROOT_PATH, 'snapshots'];
const PAGE_DIFF_PATH = [...ROOT_PATH, 'pagediff'];

const screenshotPage = async ({ url, pageName = 'Default' }) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({
        path: path.join(
            ...SNAPSHOTS_PATH,
            `${pageName}_${new Date().valueOf()}.png`
        ),
    });

    await browser.close();
};

const verifySnapshot = async ({ url, pageName = 'Default' }) => {
    await screenshotPage({ url, pageName });

    const fileNames = await readdirAsync(
        path.join(...SNAPSHOTS_PATH)
    ).then((fileNames) =>
        fileNames.filter((fileName) => fileName.includes(pageName))
    );

    if (fileNames.length < 2) {
        return;
    }

    const compareSnapshots = [];
    compareSnapshots.push(fileNames.pop());
    compareSnapshots.push(fileNames.pop());

    fileNames.forEach((fileName) => {
        fs.unlink(path.join(...SNAPSHOTS_PATH, fileName), (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });

    const [img1, img2] = compareSnapshots.map((fileName) =>
        PNG.sync.read(fs.readFileSync(path.join(...SNAPSHOTS_PATH, fileName)))
    );
    const { width, height } = img1;
    const diff = new PNG({ width, height });
    pixelmatch(img1.data, img2.data, diff.data, width, height, {
        threshold: 0.9,
    });

    fs.writeFileSync(
        path.join(...PAGE_DIFF_PATH, `${pageName}_diff.png`),
        PNG.sync.write(diff)
    );
};

getPageNames().then((pageNames = []) => {
    pageNames.forEach((pageName) => {
        verifySnapshot({ url: URL, pageName });
    });
});
