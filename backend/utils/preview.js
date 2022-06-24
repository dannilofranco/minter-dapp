const basePath = process.cwd();
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const buildDir = `${basePath}/build`;

const { preview } = require(`${basePath}/src/config.js`);

// read json data
const rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
const metadataList = JSON.parse(rawdata);

const numOfImgs = 20;
const widthMultipler = 10;
const overrideThumPerRow = 10;

const saveProjectPreviewImage = async (_data) => {
  // Extract from preview config
  const { thumbWidth, thumbPerRow, imageRatio, imageName } = preview;
  // Calculate height on the fly
  const thumbHeight = 400;//thumbWidth * imageRatio;
  // Prepare canvas
  const previewCanvasWidth = thumbWidth * widthMultipler  * thumbPerRow;
  const previewCanvasHeight =
    //thumbHeight * Math.ceil(_data.length / thumbPerRow);
    //thumbHeight * Math.ceil(numOfImgs  / thumbPerRow);
    thumbHeight * Math.ceil(numOfImgs  / overrideThumPerRow);
  // Shout from the mountain tops
  console.log(
    `Preparing a ${previewCanvasWidth}x${previewCanvasHeight} project preview with ${numOfImgs} thumbnails.`
  );

  // Initiate the canvas now that we have calculated everything
  const previewPath = `${buildDir}/${imageName}`;
  const previewCanvas = createCanvas(previewCanvasWidth, previewCanvasHeight);
  const previewCtx = previewCanvas.getContext("2d");

  // Iterate all NFTs and insert thumbnail into preview image
  // Don't want to rely on "edition" for assuming index
  //for (let index = 100; index < _data.length; index++) {
    for (let index = 0; index < numOfImgs; index++) {
    const nft = _data[index];
    //await loadImage(`${buildDir}/images/${nft.custom_fields.edition}.png`).then((image) => {
      await loadImage(`${buildDir}/images/${nft.edition}.png`).then((image) => {
      previewCtx.drawImage(
        image,
        //thumbWidth * widthMultipler * (index % thumbPerRow),
        thumbWidth * widthMultipler * (index % overrideThumPerRow),
        //thumbHeight * Math.trunc(index / thumbPerRow),
        thumbHeight * Math.trunc(index / overrideThumPerRow),
        thumbWidth * widthMultipler,
        thumbHeight
      );
    });
  }

  // Write Project Preview to file
  fs.writeFileSync(previewPath, previewCanvas.toBuffer("image/png"));
  console.log(`Project preview image located at: ${previewPath}`);
};

saveProjectPreviewImage(metadataList);
