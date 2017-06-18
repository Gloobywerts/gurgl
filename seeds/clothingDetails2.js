exports.seed = function (knex, Promise) {
      return knex('clothing').insert([
         {
           id: 140,
           size_id: 33,
           style_id: 7,
           brand_id: 2,
           condition_id: 22,
           status_id: 51,
           title: 'Cloud nine',
           description: 'Featuring a simple repeating cloud pattern, this cute sleepbag will keep your little one warm and comfy as they slip away into sweet slumber. Cotton and elastine, long sleeved with front zipper opening.',
           photo1: 'http://www.kmart.co.nz/wcsstore/Kmart/images/ncatalog/f/4/67387854-1-f.jpg',
           photo2: '/images/photo_2.svg'
         },
         {
           id: 141,
           size_id: 33,
           style_id: 7,
           brand_id: 2,
           condition_id: 21,
           status_id: 51,
           title: 'Milk & Cookies',
           description: 'Featuring adorable prints and a comfortable fit, this sleepsuit is a great pick for sleep time for your little one.  Cotton and elastine, long sleeved with front zipper opening and folded cuffs',
           photo1: 'http://www.kmart.co.nz/wcsstore/Kmart/images/ncatalog/f/8/67246168-1-f.jpg',
           photo2: '/images/photo_2.svg'
         },
         {
           id: 142,
           size_id: 34,
           style_id: 7,
           brand_id: 1,
           condition_id: 22,
           status_id: 51,
           title: 'Hello World',
           description: 'Hippo + Friends Baby Infant Envelope All-in-One. Hard wearing and warm, this cotton all-in-one is a stunning gender-neutral navy blue and available in a variety of sizes (see our other listings)',
           photo1: 'http://demandware.edgesuite.net/aawo_prd/on/demandware.static/-/Sites-twl-master-catalog/default/dw8479dc2b/99/a7/R2181368_00.jpg',
           photo2: '/images/photo_2.svg'
         },
         {
           id: 143,
           size_id: 35,
           style_id: 7,
           brand_id: 1,
           condition_id: 21,
           status_id: 51,
           title: 'Teepee Pyjama Onesie',
           description: 'Hippo + Friends Baby Boy All Over Print All-in-One. Warm wearing fleece, ideal for keeping your little one toasty warm on long winter nights. Cotton with zipper front, opening all the way to the toes.',
           photo1: 'http://demandware.edgesuite.net/aawo_prd/on/demandware.static/-/Sites-twl-master-catalog/default/dwf3f0aec4/1e/e2/R2160595_00.jpg',
           photo2: '/images/photo_2.svg'
         },
         {
            id: 144,
            size_id: 34,
            style_id: 8,
            brand_id: 2,
            condition_id: 23,
            status_id: 51,
            title: 'Hi-top canvas shoes',
            description: 'Featuring a hip high top design, these canvas shoes are a smart pick for your little one to team with a pair of cargo pants and a casual tee. Velco is a little tired but still works',
            photo1: 'http://www.kmart.co.nz/wcsstore/Kmart/images/ncatalog/f/1/67339501-1-f.jpg',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 145,
            size_id: 34,
            style_id: 8,
            brand_id: 2,
            condition_id: 21,
            status_id: 51,
            title: 'Pull-on boots',
            description: 'Designed with a soft footbed and classic polyurethane uppers, these pull on boots are a comfy and stylish pick for your little one to sport on outings. Synthetic with elastic gussets',
            photo1: 'http://www.kmart.co.nz/wcsstore/Kmart/images/ncatalog/f/6/67423996-1-f.jpg',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 146,
            size_id: 32,
            style_id: 8,
            brand_id: 2,
            condition_id: 21,
            status_id: 51,
            title: 'Soft Sole Novelty Slippers',
            description: 'Styled with cute prints on the upper and a soft sole, these slippers will look adorable on your baby and offer a comfy fit. In great near-new condition',
            photo1: 'http://www.kmart.co.nz/wcsstore/Kmart/images/ncatalog/f/2/67292912-1-f.jpg',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 147,
            size_id: 35,
            style_id: 8,
            brand_id: 9,
            condition_id: 21,
            status_id: 51,
            title: 'Ariel Baby Shoes',
            description: 'With natural butter-soft, breathable leather, and flexible soled shoes, each step for your baby is as comfortable as the first. The flexible soles have traction inserts, which help to provide grip and confidence for new walkers.',
            photo1: 'https://cdn.shopify.com/s/files/1/1995/1429/products/ariel_1024x1024@2x.png?v=1495003312',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 148,
            size_id: 37,
            style_id: 8,
            brand_id: 9,
            condition_id: 22,
            status_id: 51,
            title: 'Sprinter Baby Shoes',
            description: 'No matter what adventure your little guy is on, these baby shoes are sure to keep up! With natural butter-soft, breathable leather, and flexible soled shoes, each step for your baby is as comfortable as the first. The flexible soles have traction inserts, which help to provide grip and confidence for new walkers.',
            photo1: 'https://cdn.shopify.com/s/files/1/1995/1429/products/sprinter_1024x1024@2x.jpg?v=1495320505',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 149,
            size_id: 34,
            style_id: 8,
            brand_id: 9,
            condition_id: 21,
            status_id: 51,
            title: 'Two Little Feet Sandals',
            description: 'These Silver cross over baby sandals by Two Little Feet are gorgeous. This summer have others look on in pure delight! Made from the softest of leathers, not only are these baby shoes designed for comfort and fit, but they look downright stylish on her feet!',
            photo1: 'https://cdn.shopify.com/s/files/1/1995/1429/products/18_clipped_rev_1_1024x1024@2x.png?v=1495775825',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 150,
            size_id: 35,
            style_id: 8,
            brand_id: 9,
            condition_id: 22,
            status_id: 51,
            title: 'Rosie Baby Shoes',
            description: 'These delicious baby girls soft pink boots will be the envy of everyone on the cooler days ahead! 100% leather upper featuring a soft touch velcro closure on the side. Traction inserts to provide grip on those slippery surfaces',
            photo1: 'https://cdn.shopify.com/s/files/1/1995/1429/products/rosie_1024x1024@2x.png?v=1495319717',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 151,
            size_id: 33,
            style_id: 8,
            brand_id: 7,
            condition_id: 21,
            status_id: 51,
            title: 'Pre-walker Mini Rainboot',
            description: 'These nylon rain booties will keep little baby feet warm and dry. Super easy to get on and off, with a soft sole perfect for babies who are not walking yet.',
            photo1: 'http://cottonon.com/on/demandware.static/-/Sites-cog-kids-master/default/dwb1fa7e04/760346/760346-01-3.jpg',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 152,
            size_id: 34,
            style_id: 8,
            brand_id: 7,
            condition_id: 23,
            status_id: 51,
            title: 'Pre-walker Moccasins',
            description: 'Our mini take on a classic driving moccasin is too cute we have added a pop of fun colour on the sole for extra fun. Sole is wearing slightly, but as these are pre-walker shoes, this should not affect their use.',
            photo1: 'http://cottonon.com/on/demandware.static/-/Sites-cog-kids-master/default/dwe933877e/760360/760360-01-2.jpg',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 153,
            size_id: 32,
            style_id: 8,
            brand_id: 2,
            condition_id: 21,
            status_id: 51,
            title: 'Furry booties',
            description: 'Your little ones tiny feet will stay warm and look adorable in these fur bootees that feature 3D bunny ears and embroidery face details. As-new condition',
            photo1: 'http://www.kmart.co.nz/wcsstore/Kmart/images/ncatalog/f/5/67401215-1-f.jpg',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 154,
            size_id: 35,
            style_id: 9,
            brand_id: 9,
            condition_id: 22,
            status_id: 51,
            title: 'Woolen Mittens',
            description: 'These merino wool mittens are best washed by hand washing in an approved wool detergent. Just squeeze lightly in the water and then rinse. Do not spin dry - lie flat to dry on a towel is best.',
            photo1: 'https://www.cosytoes.co.nz/ic/2016134785/merino%20wool%20mittens.1.1.JPG',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 155,
            size_id: 31,
            style_id: 9,
            brand_id: 2,
            condition_id: 21,
            status_id: 51,
            title: 'My First Baby Blanket',
            description: 'Your little one is precious! Keep them snug, and cuddly in this light blanket that features a super soft feel for their comfort. Cotton, size: 70cm x 90cm',
            photo1: 'http://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/6/42448266-1-f.jpg',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 156,
            size_id: 32,
            style_id: 9,
            brand_id: 2,
            condition_id: 22,
            status_id: 51,
            title: 'Thumbless mittens',
            description: 'Keep those tiny little hands all warm and toasty in these cute, soft mittens. Made from cotten, safe to machine wash according to instructions on the care label',
            photo1: 'http://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/5/67624065-1-f.jpg',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 157,
            size_id: 33,
            style_id: 9,
            brand_id: 2,
            condition_id: 22,
            status_id: 51,
            title: 'Pink baby hat',
            description: 'Designed from soft and stretchy fabric, these hats will keep your little one warm and cosy all day. Made from cotton and elastine, easy care, hard wearing and great for those cold winter days.',
            photo1: 'http://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/8/67623938-1-f.jpg',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 158,
            size_id: 35,
            style_id: 9,
            brand_id: 6,
            condition_id: 24,
            status_id: 51,
            title: 'Puppy Dog Mittens',
            description: 'These super cute puppy dog mittens will keep those little hands toasty warm in the depths of winter. Stitching holding thumb on has slightly pulled, but should still work nicely.',
            photo1: 'https://www.kidrepublic.co.nz/images/300/388/aw17-m018.jpg?h=6442fbb8',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 159,
            size_id: 36,
            style_id: 9,
            brand_id: 6,
            condition_id: 22,
            status_id: 51,
            title: 'Acorn Panda Beanie',
            description: 'Gorgeous panda beanie gives your baby the cutest look for winter. Made from merino wool, this is sure to keep them toasty warm in style during the cooler months of the year.',
            photo1: 'https://www.kidrepublic.co.nz/images/300/388/aw17-h016.jpg?h=babebf34',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 160,
            size_id: 38,
            style_id: 9,
            brand_id: 6,
            condition_id: 21,
            status_id: 51,
            title: 'Toshi Butternut Beanie',
            description: 'Super cute beanie with ears. Your little one will look ultra stylish during winter this year. Made from 100% merino wool and in pristine condition.',
            photo1: 'https://www.kidrepublic.co.nz/images/300/388/w17-be-but-cre.jpg?h=2fe02d48',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 161,
            size_id: 32,
            style_id: 9,
            brand_id: 3,
            condition_id: 21-24,
            status_id: 51,
            title: 'Hooded towel',
            description: 'Comfy, super soft and absorbent this 100% cotton hooded towel is designed to keep baby warm, dry and happy at bath time. This hoodedtowel is the perfect gift for a newborn baby.',
            photo1: 'http://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/product/61/44/345/2/6144345_00_W460_H600.jpg?lastmodified=201610062200031',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 162,
            size_id: 31,
            style_id: 9,
            brand_id: 3,
            condition_id: 22,
            status_id: 51,
            title: 'Have a Whale of a Bathtime',
            description: 'The Babyhood Bath Support will bring the fun back into bathing your baby for you. No bending over the bath hurting your back and no more slippery fingers trying to hold and wash your baby at the same time.',
            photo1: 'http://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/product/61/38/213/1/6138213_00_W460_H600.jpg?lastmodified=201607082213022',
            photo2: '/images/photo_2.svg'
         },
         {
            id: 163,
            size_id: 31,
            style_id: 9,
            brand_id: 3,
            condition_id: 21,
            status_id: 51,
            title: 'Jolly Jumper Baby Bath',
            description: 'Enjoy bathing your baby with ease, with this medium-sized white baby bath. Hard wearing plastic. In excellent condition and commercially cleaned between hires.',
            photo1: 'http://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/product/51/33/088/2/resized_460x600.jpg?lastmodified=197001011200000',
            photo2: '/images/photo_2.svg'
         },
         {
           id: 164,
           size_id: 35,
           style_id: 2,
           brand_id: 3,
           condition_id: 21,
           status_id: 51,
           title: 'Denim dreams',
           description: 'Baby blue tiered skirt, perfect if you wants something with a little weight and warmth. Lovely fit, elastic not too tight so should fit all little ones for a good length of time. The flared design means little legs can still move freely.',
           photo1: '/images/skirt_1.jpg',
           photo2: '/images/photo_2.svg'
         },
         {
         id: 165,
         size_id: 37,
         style_id: 2,
         brand_id: 4,
         condition_id: 22,
         status_id: 51,
         title: 'Pink and Lacey',
         description: 'This is very cute. Like a little cheerleader skirt, but longer than it looks so will come down nicely over little legs. The flare on the cut means that there is still full movement for little legs. It seems like a winner all round.',
         photo1: '/images/skirt_2.jpg',
         photo2: '/images/photo_2.svg'
        },
        {
        id: 166,
        size_id: 36,
        style_id: 2,
        brand_id: 6,
        condition_id: 22,
        status_id: 51,
        title: 'Grey Floral',
        description: 'Can I have one of these? If your little one is getting a corporate role, this would be perfect for the boardroom. Super sweet, and lovely style and condition, this is made from premium fabric so is a great find for us.',
        photo1: '/images/skirt_3.jpg',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 167,
        size_id: 33,
        style_id: 2,
        brand_id: 8,
        condition_id: 22,
        status_id: 51,
        title: 'Jeans skirt',
        description: 'This is such a grown up style, its adorable and will look fab layered with pattered leggings. Maybe best suited to older bubs as the straight style might be a little restrictive if you have a little wriggler it might not be the best choice.',
        photo1: '/images/skirt_4.jpg',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 168,
        size_id: 36,
        style_id: 2,
        brand_id: 2,
        condition_id: 22,
        status_id: 51,
        title: 'Red pleats',
        description: 'This skirt is made of lovely thick cord material. So warm and cozy. This will be perfect layered over tights or leggings. It is in great condition and looks brand new, so grab it while its in!',
        photo1: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=373536',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 169,
        size_id: 37,
        style_id: 2,
        brand_id: 3,
        condition_id: 22,
        status_id: 51,
        title: 'Homemade with love',
        description: 'Gorgeous earthy colours, this has no brand because it has been hand made with love. The little black frill under the hem just adds a little bit of polish to this beautifully made skirt. So well made this will keep going for years.',
        photo1: 'http://farm3.static.flickr.com/2172/2258609457_778d56e3d9_o.jpg',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 170,
        size_id: 34,
        style_id: 2,
        brand_id: 4,
        condition_id: 22,
        status_id: 51,
        title: 'Super sweet',
        description: 'This little beauty is brand new, we had to cut the labels off! It will be the perfect addition to your babies wardrobe, suitable for all occasions. The pink details - the thread and pattern make it really unique and you guessed right, its super sweet.',
        photo1: 'https://ae01.alicdn.com/kf/HTB1O8EeIVXXXXcDXVXXq6xXFXXXg/2-6Y-Girls-light-Blue-font-b-Denim-b-font-font-b-skirts-b-font-font.jpg',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 171,
        size_id: 33,
        style_id: 2,
        brand_id: 5,
        condition_id: 21,
        status_id: 51,
        title: 'Pink magnolias',
        description: 'The softness of this fabric makes it drape and hang so well. It is in great condition with no obvious wear. The elastic is loose so not great if you have a tiny bub. There is a little hole (from the tag) in the side but you cant see it when its on.',
        photo1: 'http://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw2131c5cb/hi-res/258G474_Default.jpg?sw=244',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 172,
        size_id: 37,
        style_id: 2,
        brand_id: 6,
        condition_id: 21,
        status_id: 51,
        title: 'Cute in the city',
        description: 'Ahh! I want one... so jealous. The silver rain drops and the double fabric layer make this a winner in all seasons. I wonder how hard it would be to make a matching version for mum? The drops are a little faded in places, but its to be expected, it will become a favourite, I guarantee!',
        photo1: 'https://luibelle.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc_8435_1.jpg',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 173,
        size_id: 32,
        style_id: 3,
        brand_id: 1,
        condition_id: 21,
        status_id: 51,
        title: 'Tropical Paradise',
        description: 'Sleeveless tropical dress with a cute little frill at the neck. In really gorgeous condition. The dress is on the larger size, so will fit a baby all the way through that next growth spurt.',
        photo1: 'http://nord.imgix.net/Zoom/18/_100916358.jpg?fit=fill&fm=jpg&dpr=2&h=368&w=240&q=30',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 174,
        size_id: 33,
        style_id: 3,
        brand_id: 2,
        condition_id: 21,
        status_id: 51,
        title: 'Totally tweet',
        description: 'The most adorable blue gingham dress with parrots around the hem, the embroidery is coming away in a few places but it does not detract from how gorgeous this is. The red ribbon on the hem finishes it perfectly. Matching elasticated underwear.',
        photo1: 'http://nord.imgix.net/Zoom/19/_101115879.jpg?fit=fill&fm=jpg&dpr=2&h=368&w=240&q=30',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 175,
        size_id: 34,
        style_id: 3,
        brand_id: 3,
        condition_id: 21,
        status_id: 51,
        title: 'So different',
        description: 'Very soft, feminine floral dress and vest in one. There is a little fraying on the frill around the neck. The colours of this are so gentle and warm. Very nice quality fabric, has washed really well and looks great.',
        photo1: 'https://s-media-cache-ak0.pinimg.com/736x/2d/7c/92/2d7c92e252257f3c5295c4a420839fad.jpg',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 176,
        size_id: 35,
        style_id: 3,
        brand_id: 4,
        condition_id: 21,
        status_id: 51,
        title: 'Chiffon flowers',
        description: 'Be better dressed than anyone else with this cute little dress. Aqua, teal and turquoise flowers, this is a real winner. Maybe best for special occasion, or any day for your little princess. The netting layer has worn so well - in awesome condition.',
        photo1: 'https://s.tea-global.net/mas_assets/cache/image/1/9/a/5/105055.Jpg',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 177,
        size_id: 34,
        style_id: 7,
        brand_id: 4,
        condition_id: 21,
        status_id: 51,
        title: 'Beary cute',
        description: 'Seriously adorable, it is not quite dress up, but close enough! Give your little bundle of joy some teddy love with this cute little bear jumper, its lovely and soft and super warm. Layered with a t-shirt it will make the perfect outfit.',
        photo1: '/images/jumper_1.jpg',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 178,
        size_id: 36,
        style_id: 3,
        brand_id: 5,
        condition_id: 21,
        status_id: 51,
        title: 'We recycle',
        description: 'Simply jealous! I love this dress so much I want one in my size. It is simple and perfect. Lemon yellow with the bicycle print is a winner. Soft cotton, it will need to be layered to keep bub warm.',
        photo1: 'https://s-media-cache-ak0.pinimg.com/236x/22/b8/50/22b850523d1b9b7021dfb2fc91a44407.jpg',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 179,
        size_id: 34,
        style_id: 7,
        brand_id: 6,
        condition_id: 21,
        status_id: 51,
        title: 'Ears a winner!',
        description: 'We changed the rules for this photo, because little Felix is the perfect model for this jumper. Who can resist? This is a great choice for boys and girls and will cause everyone to oooh and ahh and giggle over the awesome choice you made.',
        photo1: '/images/jumper_2.jpg',
        photo2: '/images/photo_2.svg'
        },
        {
        id: 180,
        size_id: 35,
        style_id: 7,
        brand_id: 7,
        condition_id: 22,
        status_id: 51,
        title: 'Cosy stripes',
        description: 'The pink and grey combination is such a winner, it goes with everything, and makes a great over layer for keeping the chill out. It is knitted so super soft and stretchy and is in lovely condition. Make it yours today.',
        photo1: '/images/jumper_3.jpg',
        photo2: '/images/photo_2.svg'
     }
      ])
   }
