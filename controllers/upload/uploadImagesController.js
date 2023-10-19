const asyncHandler = require("express-async-handler");

const multiparty = require("multiparty");
const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");
const fs = require("fs");
const mime = require("mime-types");

const bucketName = "chris27-next-ecommerce";

const uploadImages = asyncHandler(async (req, res) => {
  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  // console.log(files.file.length)

  const client = new S3Client({
    region: "ap-southeast-1",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });

  const links = [];

  for (const file of files.file) {
    const ext = file.originalFilename.split(".").pop();
    const newFilename = `${Date.now()}.${ext}`;
    await client.send(
      new PutObjectCommand({
        Bucket: bucketName, //name of bucket
        Key: newFilename, //name of the file
        Body: fs.readFileSync(file.path), //body of the file
        ACL: "public-read",
        ContentType: mime.lookup(file.path),
      })
    );
    const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;
    links.push(link);
  }

  return res.status(201).json({ message: "Thêm ảnh mới thành công.", links });
});

module.exports = { uploadImages };
