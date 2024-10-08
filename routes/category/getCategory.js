const Category = require("../../models/category");
require("dotenv").config();

const getCategory = (router) => {
  router.post("/get-category", async (req, res) => {
    try {
      const category = await Category.find();

      if (category === []) {
        return res.json({
          success: true,
          msg: "success getting data",
          data: [],
        });
      } else {
        hasil = [];
        for (let i = 0; i < category.length; i++) {
          const categoryItem = category[i];

          const hasilItem = {
            _id: categoryItem._id,
            name: categoryItem.name,
            imageUrl: `https://server-hotelkita.koyeb.app/${categoryItem.imageUrl}`,
            hotelId: categoryItem.hotelId,
          };

          hasil.push(hasilItem);
        }

        return res.json({
          success: true,
          msg: "success getting data",
          data: hasil,
        });
      }
    } catch (e) {
      return res.json({ success: false, msg: e.message });
    }
  });
};

module.exports = getCategory;
