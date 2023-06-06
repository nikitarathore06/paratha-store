const MEALS = [
          {
            description: "4 Varity of Cone icecream",
            id: 1,
            image:
              "https://static.toiimg.com/photo/63785804.cms",
            name: "Cone Icecrem",
            price: 130,
          },
          {
            description: "Dry Fruit Choclate Cone icecream",
            id: 2,
            image:
              "https://stylesatlife.com/wp-content/uploads/2018/09/Ice-cream-Cones.jpg",
            name: "Choclate Cone",
            price: 149,
          },
        
          {
            description: "Multiple Types of Vanilla icecream ",
            id: 3,
            image:
              "https://c.ndtvimg.com/2019-05/hkheegvg_ice-cream_650x400_21_May_19.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
            name: "Vanilla icream",
            price: 189,
          },
        
          {
            description: "3 Types of vanilla icecream",
            id: 4,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7Vo85iMtUgYIgyu8u7aGfjFKreoT9Tn5_g&usqp=CAU",
            name: "Boul icecream",
            price: 119,
          },
        
          {
            description: "Veg Burger with Mayonnaise",
            id: 5,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWax6auvrF3mfxe84IWZ-eDOg2wCeb_LZktQ&usqp=CAU",
            name: "Burger",
            price: 109,
          },
          {
            description: "White Choclate Icecream",
            id: 6,
            image:
              "https://thumbs.dreamstime.com/z/variety-ice-cream-bowls-fresh-creams-sorbet-pink-background-chocolate-strawberry-lime-148571636.jpg",
            name: "white Icecream",
            price: 120,
          },
          {
            description: "Dark Choclate Icecream",
            id: 7,
            image:
              "https://www.willflyforfood.net/wp-content/uploads/2022/05/ice-cream-flavors-chocolate.jpg",
            name: "Dark Icecream",
            price: 89,
          },
          {
            description: "Matka Kulfi",
            id: 8,
            image:
              "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-kulfi.jpg?fit=728%2C524",
            name: "Matka Kulif",
            price: 30,
          },
          {
            description: "Biscuit with Icream",
            id: 9,
            image:
              "https://i5.walmartimages.com/asr/643177b7-6d6c-406b-bce1-f3cac056cd26.9247bf283826dca79ce502dbf153b80f.jpeg",
            name: "Bourbon Icecream",
            price: 40,
          },
          {
            description: "Realgood Icecream",
            id: 10,
            image:
              "https://m.media-amazon.com/images/I/61vqVCHLJQL.jpg",
            name: "Realgood Icecream",
            price: 55,
          },
          {
            description: "Choclate with Strawberry Icecream",
            id: 11,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm3Pm4j7nZtootLTOFqfG2I1DsjPhAXX68g&usqp=CAU",
            name: "Choclate & Strawberry",
            price: 60,
          },
          
          {
            description: "Dairy Flavors Icecream",
            id: 12,
            image:
              "https://www.dairyfoods.com/ext/resources/DF/2022/May/ing-tech-static.jpg?1652972838",
            name: "Dairy Flavors",
            price: 90,
          },
          {
            description: "Irresistible Flavors Icecream",
            id: 13,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNefwZphGVMjAm79LauhDf1cIphHE-co4nfg&usqp=CAU",
            name: "Irresistible Flavors",
            price: 70,
          },
          {
            description: "Strawberry Flavors Icecream",
            id: 14,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaq1DWHwp-L320G5kNwa4Wh6r8dAS5gH8YSCqZ6xhv-rBNQQ_8VlXPwtMlN3J6_FJCG6M&usqp=CAU",
            name: "Strawberry Flavors",
            price: 100,
          },
          {
            description: "Chocobar Icecream",
            id: 15,
            image:
              "https://www.yummytummyaarthi.com/wp-content/uploads/2015/04/1-24.jpg",
            name: "Chocobar Icecream",
            price: 80,
          },
          {
            description: " Rasgulla Icecream",
            id: 16,
            image:
              "https://www.mintsrecipes.com/wp-content/uploads/Corn-Rasgulla-FB.jpg",
            name: "Rasgulla Icecream",
            price: 50,
          },
          {
            description: " Cup Icecream",
            id: 17,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
            name: "Cup Icecream",
            price: 120,
          },
          {
            description: " Amul Icecream",
            id: 18,
            image:
              "https://tiimg.tistatic.com/fp/1/007/771/colour-yellow-ice-cream-fresh-sweet-delicious-and-tasty-with-flavour-dessert-031.jpg",
            name: "Amul Icecream",
            price: 150,
          },
          {
            description: " Orange Flavors Icecream",
            id: 19,
            image:
              "https://www.nithaskitchen.com/wp-content/uploads/2021/05/orange-ice-cream_L.jpg",
            name: "Orange Icecream",
            price:80,
          },
          {
            description: " Mango Flavors Icecream",
            id: 20,
            image:
              "https://www.whiskaffair.com/wp-content/uploads/2014/05/Mango-Ice-Cream-3.jpg",
            name: "Mango Icecream",
            price: 80,
          },
        ];
        
        export default MEALS;