use('jitt-data');

const result = [
    {
        name: 'Women || Dresses || Jumpsuits & Rompers'
    },
    {
        name: 'Women || Jewelry || Bracelets'
    },
    {
        name: 'Women || Sleepwear & robes || All Sleepwear & robes'
    },
    {
        name: 'Men || Tops || Polos'
    },
    {
        name: 'Men || Sweaters || Full zip'
    },
    {
        name: 'Men || Jeans || Relaxed'
    },
    {
        name: 'Men || Shorts || Dress shorts'
    },
    {
        name: 'Men || Athletic apparel || Shorts'
    },
    {
        name: 'Women || Shoes || Slip-Ons'
    },
    {
        name: 'Men || Athletic apparel || Snowsuits'
    },
    {
        name: 'Electronics || Cameras & photography || Camera Flash Accessories'
    },
    {
        name: 'Electronics || Cameras & photography || Sport Cameras'
    },
    {
        name: 'Women || Shoes || Mules'
    },
    {
        name: 'Electronics || Computers & Laptops || All-In-One Printers'
    },
    {
        name: 'Electronics || Cell phones & accessories || Cell Phone Chargers'
    },
    {
        name: 'Electronics || TV & Video || Projectors'
    },
    {
        name: 'Electronics || TV & Video || DVRs'
    },
    {
        name: 'Electronics || Video games & consoles || Accessories'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car Tweeters'
    },
    {
        name: 'Women || Tops & blouses || Blouse'
    },
    {
        name: 'Women || Tops & blouses || Polo shirt'
    },
    {
        name: 'Women || Pants || Casual pants'
    },
    {
        name: 'Women || Skirts || Wrap'
    },
    {
        name: 'Women || Suits & blazers || Pant suit'
    },
    {
        name: 'Women || Coats & jackets || Wool'
    },
    {
        name: 'Men || Athletic apparel || Vests'
    },
    {
        name: 'Women || Athletic apparel || Socks'
    },
    {
        name: 'Women || Athletic apparel || Vests'
    },
    {
        name: 'Women || Athletic apparel || Athletic Pants'
    },
    {
        name: "Women || Women's handbags || Other"
    },
    {
        name: 'Women || Maternity || Dresses'
    },
    {
        name: 'Electronics || Cameras & photography || Waterproof Cameras'
    },
    {
        name: 'Women || Maternity || Maternity Suit Pants'
    },
    {
        name: 'Women || Shoes || Oxfords'
    },
    {
        name: 'Men || Tops || Turtleneck'
    },
    {
        name: 'Men || Jeans || Baggy, loose'
    },
    {
        name: 'Men || Pants || Khakis, chinos'
    },
    {
        name: 'Men || Shorts || All Shorts'
    },
    {
        name: 'Men || Coats & jackets || Motorcycle'
    },
    {
        name: 'Men || Blazers & sport coats || Two button'
    },
    {
        name: 'Men || Suits || One button'
    },
    {
        name: 'Men || Jewelry || Cufflinks'
    },
    {
        name: 'Electronics || Computers & Laptops || Computer Accessories'
    },
    {
        name: 'Electronics || Computers & Laptops || Other'
    },
    {
        name: 'Electronics || Cell phones & accessories || Batteries'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car Coaxial Speakers'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car Component Speakers'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car Woofers'
    },
    {
        name: 'Electronics || Computer Components & Parts || PC Water Cooling Accessories'
    },
    {
        name: 'Women || Sweaters || Wrap'
    },
    {
        name: 'Women || Suits & blazers || Skirt suit'
    },
    {
        name: 'Women || Athletic apparel || Jackets'
    },
    {
        name: 'Women || Athletic apparel || Athletic Leggings'
    },
    {
        name: "Women || Women's handbags || Hobo Bags"
    },
    {
        name: "Women || Women's accessories || Fascinators"
    },
    {
        name: 'Women || Jewelry || Toe Rings'
    },
    {
        name: 'Women || Maternity || Maternity Suit Jackets'
    },
    {
        name: 'Women || Shoes || Heels'
    },
    {
        name: 'Women || Maternity || Sweaters'
    },
    {
        name: 'Men || Tops || All Tops'
    },
    {
        name: 'Men || Sweaters || Cardigan'
    },
    {
        name: 'Men || Coats & jackets || Other'
    },
    {
        name: 'Men || Swimwear || Swim trunks'
    },
    {
        name: 'Women || Tops & blouses || Wrap'
    },
    {
        name: 'Men || Shoes || Oxfords'
    },
    {
        name: 'Men || Shoes || Sandals'
    },
    {
        name: 'Electronics || Cameras & photography || Photography Supports'
    },
    {
        name: 'Electronics || Computers & Laptops || All-In-One Computers'
    },
    {
        name: 'Electronics || TV & Video || Streaming Devices'
    },
    {
        name: 'Electronics || TV & Video || All TV & Video'
    },
    {
        name: 'Electronics || Car audio, video & gps || GPS Accessories'
    },
    {
        name: 'Women || Dresses || Other'
    },
    {
        name: 'Women || Tops & blouses || Halter'
    },
    {
        name: 'Women || Sweaters || Poncho'
    },
    {
        name: 'Women || Sweaters || Sleeveless Sweaters'
    },
    {
        name: 'Women || Jeans || Cropped Jeans'
    },
    {
        name: 'Women || Skirts || Maxi'
    },
    {
        name: 'Women || Coats & jackets || Cape'
    },
    {
        name: 'Women || Athletic apparel || Athletic Tank Tops'
    },
    {
        name: 'Women || Athletic apparel || Athletic Sweatsuits'
    },
    {
        name: "Women || Women's accessories || Watches"
    },
    {
        name: "Women || Women's accessories || Fashion Gloves"
    },
    {
        name: "Women || Women's accessories || Other"
    },
    {
        name: 'Women || Skirts || A-line'
    },
    {
        name: 'Women || Shorts || Denim'
    },
    {
        name: 'Men || Pants || Cargo'
    },
    {
        name: 'Men || Pants || All Pants'
    },
    {
        name: 'Men || Shorts || Khakis, chinos'
    },
    {
        name: 'Men || Coats & jackets || Flight/bomber'
    },
    {
        name: 'Men || Blazers & sport coats || Three button'
    },
    {
        name: 'Men || Athletic apparel || Pants'
    },
    {
        name: 'Men || Athletic apparel || Jerseys'
    },
    {
        name: 'Men || Shoes || Athletic'
    },
    {
        name: 'Women || Shoes || Loafers'
    },
    {
        name: 'Electronics || Cameras & photography || Camera Filters'
    },
    {
        name: 'Women || Jeans || Boyfriend'
    },
    {
        name: 'Electronics || Cameras & photography || Polaroid Films'
    },
    {
        name: 'Electronics || Cell phones & accessories || Cell phone accessories'
    },
    {
        name: 'Women || Jeans || Leggings'
    },
    {
        name: 'Electronics || Cell phones & accessories || All Cell phones & accessories'
    },
    {
        name: 'Women || Pants || Other'
    },
    {
        name: 'Electronics || TV & Video || Blu-ray Players'
    },
    {
        name: 'Women || Skirts || Straight, pencil'
    },
    {
        name: 'Electronics || Computer Components & Parts || Computer Memory (RAM)'
    },
    {
        name: 'Women || Coats & jackets || Motorcycle'
    },
    {
        name: 'Women || Athletic apparel || Sports bras'
    },
    {
        name: 'Women || Athletic apparel || Other'
    },
    {
        name: "Women || Women's handbags || All Women's handbags"
    },
    {
        name: "Women || Women's accessories || Headbands"
    },
    {
        name: "Women || Women's accessories || Cardholders"
    },
    {
        name: 'Women || Maternity || Coats & jackets'
    },
    {
        name: 'Women || Maternity || Maternity Suit Skirts'
    },
    {
        name: 'Women || Underwear || Panties'
    },
    {
        name: 'Women || Underwear || Other'
    },
    {
        name: 'Women || Dresses || Above knee, mini'
    },
    {
        name: 'Women || Shorts || Chino & khaki'
    },
    {
        name: 'Women || Other || All Other'
    },
    {
        name: 'Women || Sweaters || Scoop neck'
    },
    {
        name: 'Men || Tops || Rugby Shirts'
    },
    {
        name: 'Men || Jeans || Cargo'
    },
    {
        name: 'Men || Jeans || Slim Jeans'
    },
    {
        name: 'Men || Shorts || Board, surf'
    },
    {
        name: 'Men || Shorts || Cargo'
    },
    {
        name: 'Men || Coats & jackets || Trench'
    },
    {
        name: 'Women || Tops & blouses || Turtleneck'
    },
    {
        name: 'Men || Blazers & sport coats || All Blazers & sport coats'
    },
    {
        name: 'Men || Suits || Four button'
    },
    {
        name: 'Women || Maternity || Jeans'
    },
    {
        name: 'Women || Tops & blouses || Button down shirt'
    },
    {
        name: 'Women || Sweaters || Henley'
    },
    {
        name: 'Women || Tops & blouses || Other'
    },
    {
        name: 'Women || Tops & blouses || Bodysuits'
    },
    {
        name: 'Women || Tops & blouses || Camisoles'
    },
    {
        name: 'Men || Athletic apparel || Athletic Tank Tops'
    },
    {
        name: 'Women || Sweaters || Tunic'
    },
    {
        name: 'Women || Suits & blazers || Other'
    },
    {
        name: 'Women || Athletic apparel || Athletic Tights'
    },
    {
        name: 'Men || Athletic apparel || All Athletic apparel'
    },
    {
        name: "Women || Women's accessories || Umbrellas"
    },
    {
        name: 'Men || Jewelry || Bracelets'
    },
    {
        name: 'Men || Other || All Other'
    },
    {
        name: "Men || Men's accessories || Sunglasses"
    },
    {
        name: 'Electronics || Cameras & photography || Lighting & studio'
    },
    {
        name: 'Electronics || Cameras & photography || Camera Lenses'
    },
    {
        name: 'Electronics || Computers & Laptops || Monitors & Screens'
    },
    {
        name: 'Electronics || Computers & Laptops || Desktops Computers'
    },
    {
        name: 'Electronics || Computers & Laptops || Scanners'
    },
    {
        name: 'Electronics || Video games & consoles || Games'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car Mid-Range Speakers'
    },
    {
        name: 'Electronics || Computer Components & Parts || Computer Case Fans'
    },
    {
        name: 'Men || Shoes || Slippers'
    },
    {
        name: 'Women || Coats & jackets || Raincoat'
    },
    {
        name: 'Women || Athletic apparel || Athletic Polos'
    },
    {
        name: 'Women || Athletic apparel || Athletic Skirts'
    },
    {
        name: 'Women || Athletic apparel || Snowsuits'
    },
    {
        name: 'Women || Swimwear || One-piece'
    },
    {
        name: "Women || Women's handbags || Tote Bags"
    },
    {
        name: "Women || Women's accessories || Wraps"
    },
    {
        name: 'Women || Jewelry || Nose Rings'
    },
    {
        name: 'Women || Underwear || All Underwear'
    },
    {
        name: 'Women || Sleepwear & robes || Robes'
    },
    {
        name: 'Men || Jeans || Overalls'
    },
    {
        name: 'Men || Pants || Dress - flat front'
    },
    {
        name: 'Men || Pants || Dress - pleat'
    },
    {
        name: 'Men || Tops || T-shirts'
    },
    {
        name: 'Men || Shorts || Athletic'
    },
    {
        name: 'Men || Coats & jackets || All Coats & jackets'
    },
    {
        name: 'Men || Athletic apparel || Jerseys'
    },
    {
        name: "Men || Men's accessories || Hats"
    },
    {
        name: 'Men || Shoes || Work & safety'
    },
    {
        name: 'Men || Shoes || Loafers'
    },
    {
        name: 'Men || Shoes || All Shoes'
    },
    {
        name: 'Electronics || Computers & Laptops || Netbooks'
    },
    {
        name: 'Electronics || TV & Video || Projector Screens'
    },
    {
        name: 'Electronics || Video games & consoles || PC Gaming'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car Stereo Receivers'
    },
    {
        name: 'Electronics || Car audio, video & gps || GPS Car Mounts'
    },
    {
        name: 'Women || Tops & blouses || Knit top'
    },
    {
        name: 'Women || Sweaters || Full zip'
    },
    {
        name: 'Women || Pants || Cropped Pants'
    },
    {
        name: 'Women || Pants || All Pants'
    },
    {
        name: 'Women || Skirts || Asymmetrical'
    },
    {
        name: 'Women || Skirts || Bubble'
    },
    {
        name: 'Women || Skirts || Tiered'
    },
    {
        name: 'Women || Skirts || Other'
    },
    {
        name: 'Women || Coats & jackets || All Coats & jackets'
    },
    {
        name: "Women || Women's handbags || Messenger Bags"
    },
    {
        name: 'Women || Jewelry || Rings'
    },
    {
        name: 'Women || Shoes || Fashion sneakers'
    },
    {
        name: 'Men || Tops || Hawaiian'
    },
    {
        name: 'Men || Sweaters || Other'
    },
    {
        name: 'Men || Jeans || Boot cut'
    },
    {
        name: 'Men || Jeans || Classic, straight leg'
    },
    {
        name: 'Men || Jeans || Other'
    },
    {
        name: 'Men || Pants || Casual pants'
    },
    {
        name: 'Men || Shorts || Casual shorts'
    },
    {
        name: 'Men || Coats & jackets || Peacoat'
    },
    {
        name: "Men || Men's accessories || Ties"
    },
    {
        name: "Men || Men's accessories || Scarves"
    },
    {
        name: "Men || Men's accessories || Wallets"
    },
    {
        name: "Men || Men's accessories || Umbrellas"
    },
    {
        name: 'Electronics || Cell phones & accessories || Headsets'
    },
    {
        name: 'Electronics || Cell phones & accessories || Cell Phone Cradles'
    },
    {
        name: 'Electronics || Cell phones & accessories || Cell Phone Cables'
    },
    {
        name: 'Electronics || TV & Video || Gadgets'
    },
    {
        name: 'Electronics || Computer Components & Parts || Computer Sound Cards'
    },
    {
        name: 'Women || Sweaters || Cardigan'
    },
    {
        name: 'Women || Sweaters || Collared'
    },
    {
        name: 'Women || Jeans || Cargo'
    },
    {
        name: 'Women || Jeans || Overalls'
    },
    {
        name: 'Women || Pants || Khakis, chinos'
    },
    {
        name: 'Women || Coats & jackets || Trench'
    },
    {
        name: 'Women || Coats & jackets || Windbreaker'
    },
    {
        name: 'Women || Suits & blazers || Blazer'
    },
    {
        name: 'Women || Athletic apparel || Athletic Sweat Pants'
    },
    {
        name: 'Women || Athletic apparel || Tracksuits'
    },
    {
        name: 'Women || Swimwear || Beach accessories'
    },
    {
        name: "Women || Women's accessories || Belts"
    },
    {
        name: 'Women || Maternity || Pants'
    },
    {
        name: 'Men || Sweaters || Turtleneck'
    },
    {
        name: 'Men || Jeans || Carpenter'
    },
    {
        name: 'Men || Pants || Corduroys'
    },
    {
        name: 'Men || Shorts || Denim'
    },
    {
        name: 'Men || Suits || Two button'
    },
    {
        name: 'Men || Athletic apparel || Athletic Long Sleeve Shirts'
    },
    {
        name: 'Men || Athletic apparel || Tracksuits'
    },
    {
        name: "Men || Men's accessories || Briefcases"
    },
    {
        name: "Men || Men's accessories || Fashion Gloves"
    },
    {
        name: 'Men || Shoes || Mules'
    },
    {
        name: 'Men || Jewelry || Necklaces'
    },
    {
        name: 'Electronics || Computers & Laptops || Printing Supplies'
    },
    {
        name: 'Men || Suits || All Suits'
    },
    {
        name: 'Electronics || Video games & consoles || Replacement parts & tools'
    },
    {
        name: 'Electronics || Video games & consoles || All Video games & consoles'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car video'
    },
    {
        name: 'Electronics || Car audio, video & gps || Other'
    },
    {
        name: 'Electronics || Media || All Media'
    },
    {
        name: 'Women || Dresses || Maxi'
    },
    {
        name: 'Women || Sweaters || Other'
    },
    {
        name: 'Women || Dresses || High Low'
    },
    {
        name: 'Women || Tops & blouses || All Tops & blouses'
    },
    {
        name: 'Women || Sweaters || Shrug'
    },
    {
        name: 'Women || Sweaters || Sweatercoat'
    },
    {
        name: 'Women || Sweaters || All Sweaters'
    },
    {
        name: 'Women || Jeans || Flare'
    },
    {
        name: 'Women || Pants || Capri Pants'
    },
    {
        name: 'Women || Jewelry || Earrings'
    },
    {
        name: 'Women || Maternity || Maternity Polos'
    },
    {
        name: 'Women || Maternity || Maternity T-Shirts'
    },
    {
        name: 'Women || Maternity || Other'
    },
    {
        name: 'Women || Shoes || Clogs'
    },
    {
        name: 'Women || Underwear || G-strings & thongs'
    },
    {
        name: 'Men || Tops || Other'
    },
    {
        name: 'Men || Sweats & hoodies || Other'
    },
    {
        name: 'Men || Coats & jackets || Jean jacket'
    },
    {
        name: 'Men || Blazers & sport coats || Other'
    },
    {
        name: 'Men || Suits || Three button'
    },
    {
        name: 'Women || Pants || Leather'
    },
    {
        name: "Men || Men's accessories || Bow Ties"
    },
    {
        name: 'Electronics || Computers & Laptops || Laptops'
    },
    {
        name: 'Electronics || Cell phones & accessories || Cell Phone Adapters'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car speakers & systems'
    },
    {
        name: 'Electronics || Computer Components & Parts || Computer Motherboards'
    },
    {
        name: 'Electronics || Computer Components & Parts || CPU Fans'
    },
    {
        name: 'Women || Dresses || Knee-length'
    },
    {
        name: 'Women || Jeans || Slim Jeans'
    },
    {
        name: 'Women || Pants || Cargo'
    },
    {
        name: 'Women || Skirts || Full skirt'
    },
    {
        name: 'Women || Athletic apparel || Snow Bibs'
    },
    {
        name: 'Women || Swimwear || All Swimwear'
    },
    {
        name: "Women || Women's accessories || Sunglasses"
    },
    {
        name: "Women || Women's accessories || Wallets"
    },
    {
        name: 'Women || Underwear || Thermal underwear'
    },
    {
        name: 'Women || Sleepwear & robes || Pajama tops'
    },
    {
        name: 'Men || Sweats & hoodies || Sweatshirt, pullover'
    },
    {
        name: 'Women || Dresses || Midi'
    },
    {
        name: 'Women || Tops & blouses || Tank Tops'
    },
    {
        name: 'Men || Pants || Other'
    },
    {
        name: 'Men || Coats & jackets || Rainwear'
    },
    {
        name: 'Men || Suits || Double breasted'
    },
    {
        name: 'Men || Athletic apparel || Athletic Sweatshirts'
    },
    {
        name: 'Men || Athletic apparel || Track Pants'
    },
    {
        name: 'Men || Swimwear || All Swimwear'
    },
    {
        name: "Men || Men's accessories || Belts"
    },
    {
        name: "Men || Men's accessories || Other"
    },
    {
        name: 'Men || Shoes || Boots'
    },
    {
        name: 'Men || Jewelry || Earrings'
    },
    {
        name: 'Electronics || Cameras & photography || Photography Tripods'
    },
    {
        name: 'Electronics || Cameras & photography || Camera Flashes'
    },
    {
        name: 'Electronics || Cameras & photography || Binoculars'
    },
    {
        name: 'Electronics || Computers & Laptops || Networking & connectivity'
    },
    {
        name: 'Electronics || Cell phones & accessories || Cell Phone Covers'
    },
    {
        name: 'Electronics || Car audio, video & gps || GPS units & equipment'
    },
    {
        name: 'Electronics || Media || Other'
    },
    {
        name: 'Electronics || Computer Components & Parts || Computer CPUs'
    },
    {
        name: 'Electronics || Computer Components & Parts || Computer Drive Enclosures'
    },
    {
        name: 'Electronics || Computer Components & Parts || Heatsinks'
    },
    {
        name: 'Women || Tops & blouses || T-shirts'
    },
    {
        name: 'Women || Sweaters || Turtleneck Sweaters'
    },
    {
        name: 'Women || Jeans || Boot cut'
    },
    {
        name: 'Women || Jeans || Wide leg'
    },
    {
        name: 'Women || Coats & jackets || Vest'
    },
    {
        name: 'Women || Suits & blazers || Dress suit'
    },
    {
        name: 'Women || Athletic apparel || Athletic Dresses'
    },
    {
        name: "Women || Women's accessories || Hijabs"
    },
    {
        name: 'Women || Jewelry || Necklaces'
    },
    {
        name: 'Women || Jewelry || All Jewelry'
    },
    {
        name: 'Women || Maternity || Athletic apparel'
    },
    {
        name: 'Women || Maternity || Maternity Camisoles'
    },
    {
        name: 'Women || Shorts || Bermuda'
    },
    {
        name: 'Men || Tops || Tank'
    },
    {
        name: 'Men || Sweats & hoodies || Track jacket'
    },
    {
        name: 'Men || Coats & jackets || Puffer'
    },
    {
        name: 'Men || Blazers & sport coats || Four button'
    },
    {
        name: 'Men || Athletic apparel || Athletic Sweat Pants'
    },
    {
        name: 'Men || Swimwear || Swim briefs'
    },
    {
        name: "Men || Men's accessories || Watches"
    },
    {
        name: "Men || Men's accessories || Backpacks"
    },
    {
        name: "Men || Men's accessories || Bandanas"
    },
    {
        name: "Men || Men's accessories || Turbans"
    },
    {
        name: 'Men || Shoes || Slip-Ons'
    },
    {
        name: 'Electronics || Cameras & photography || Camera & photo accessories'
    },
    {
        name: 'Electronics || Cameras & photography || Film & Polaroid Cameras'
    },
    {
        name: 'Electronics || Cameras & photography || Other'
    },
    {
        name: 'Electronics || Computers & Laptops || All Computers & Laptops'
    },
    {
        name: 'Electronics || Media || Blu-ray'
    },
    {
        name: 'Electronics || Computer Components & Parts || Computer GPUs'
    },
    {
        name: 'Women || Sweaters || Hooded'
    },
    {
        name: 'Women || Jeans || Other'
    },
    {
        name: 'Women || Jeans || All Jeans'
    },
    {
        name: 'Women || Skirts || Pleated'
    },
    {
        name: 'Women || Coats & jackets || Fleece jacket'
    },
    {
        name: "Women || Women's handbags || Crossbody Bags"
    },
    {
        name: 'Women || Maternity || Maternity Tank Tops'
    },
    {
        name: 'Women || Maternity || Maternity Blazers'
    },
    {
        name: 'Women || Shoes || Flats'
    },
    {
        name: 'Electronics || TV & Video || Televisions'
    },
    {
        name: 'Women || Sleepwear & robes || Nightgowns & sleep shirts'
    },
    {
        name: 'Men || Tops || Henley'
    },
    {
        name: 'Men || Sweaters || V-neck'
    },
    {
        name: 'Men || Sweaters || All Sweaters'
    },
    {
        name: 'Men || Shorts || Carpenter, utility'
    },
    {
        name: 'Men || Coats & jackets || Poncho'
    },
    {
        name: 'Men || Suits || Other'
    },
    {
        name: 'Men || Athletic apparel || Snow Pants'
    },
    {
        name: 'Electronics || Cameras & photography || Camcorders'
    },
    {
        name: 'Electronics || Cell phones & accessories || Screen protectors'
    },
    {
        name: 'Electronics || Video games & consoles || Consoles'
    },
    {
        name: 'Electronics || Video games & consoles || Strategy guides'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car subwoofers'
    },
    {
        name: 'Electronics || Media || CD'
    },
    {
        name: 'Electronics || Computer Components & Parts || Computer Power Supplies'
    },
    {
        name: 'Electronics || Computer Components & Parts || I/O Adapters'
    },
    {
        name: 'Women || Pants || Linen'
    },
    {
        name: 'Women || Skirts || Mini'
    },
    {
        name: 'Women || Skirts || Peasant'
    },
    {
        name: 'Women || Skirts || All Skirts'
    },
    {
        name: 'Women || Coats & jackets || Poncho'
    },
    {
        name: 'Women || Coats & jackets || Other'
    },
    {
        name: 'Women || Suits & blazers || All Suits & blazers'
    },
    {
        name: 'Women || Athletic apparel || Jerseys'
    },
    {
        name: 'Women || Athletic apparel || Athletic T-Shirts'
    },
    {
        name: 'Women || Athletic apparel || Snow Pants'
    },
    {
        name: "Women || Women's handbags || Waist Bags & Fanny Packs"
    },
    {
        name: 'Men || Athletic apparel || Athletic Short Sleeve Shirts'
    },
    {
        name: "Women || Women's accessories || Scarves"
    },
    {
        name: "Women || Women's accessories || All Women's accessories"
    },
    {
        name: 'Women || Shoes || Athletic'
    },
    {
        name: 'Women || Shoes || All Shoes'
    },
    {
        name: 'Men || Sweats & hoodies || Hoodie'
    },
    {
        name: 'Men || Sweats & hoodies || All Sweats & hoodies'
    },
    {
        name: 'Men || Sweaters || Crewneck'
    },
    {
        name: 'Men || Sweaters || Polo'
    },
    {
        name: 'Men || Coats & jackets || Fleece jacket'
    },
    {
        name: 'Men || Coats & jackets || Parka'
    },
    {
        name: 'Men || Athletic apparel || Competitive swimwear'
    },
    {
        name: 'Men || Athletic apparel || Jackets'
    },
    {
        name: 'Men || Athletic apparel || Athletic T-Shirts'
    },
    {
        name: 'Men || Athletic apparel || Athletic Hoodies'
    },
    {
        name: "Men || Men's accessories || Collar Stays"
    },
    {
        name: "Men || Men's accessories || Handkerchiefs"
    },
    {
        name: 'Electronics || Cameras & photography || Telescopes'
    },
    {
        name: 'Electronics || Computers & Laptops || Computer Storage'
    },
    {
        name: 'Electronics || Cell phones & accessories || Other'
    },
    {
        name: 'Electronics || Video games & consoles || Other'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car security & convenience'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car Amplifiers'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car CD Changers'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car Equalizers'
    },
    {
        name: 'Electronics || Media || DVD'
    },
    {
        name: 'Women || Dresses || All Dresses'
    },
    {
        name: 'Women || Tops & blouses || Tunic'
    },
    {
        name: 'Women || Sweaters || V-neck'
    },
    {
        name: 'Women || Sweaters || Sweater Vests'
    },
    {
        name: 'Women || Jeans || Straight leg'
    },
    {
        name: 'Women || Coats & jackets || Parka'
    },
    {
        name: 'Women || Athletic apparel || Athletic Sweatshirts'
    },
    {
        name: 'Women || Swimwear || Cover-ups'
    },
    {
        name: "Women || Women's handbags || Shoulder Bags"
    },
    {
        name: "Women || Women's handbags || Backpacks"
    },
    {
        name: "Women || Women's handbags || Bucket Bags"
    },
    {
        name: "Women || Women's accessories || Bandanas"
    },
    {
        name: 'Women || Jewelry || Pins'
    },
    {
        name: 'Women || Maternity || Skirts'
    },
    {
        name: 'Women || Maternity || Maternity Blouses'
    },
    {
        name: 'Women || Maternity || Maternity Suits'
    },
    {
        name: 'Women || Maternity || Maternity Suit Vests'
    },
    {
        name: 'Women || Shoes || Sandals'
    },
    {
        name: 'Women || Shoes || Work & safety'
    },
    {
        name: 'Women || Shoes || Other'
    },
    {
        name: 'Women || Shorts || Other'
    },
    {
        name: 'Men || Tops || Dress shirts'
    },
    {
        name: 'Men || Sweats & hoodies || Sweat Pants'
    },
    {
        name: 'Men || Sweats & hoodies || Sweatsuits'
    },
    {
        name: 'Men || Jeans || Skinny Jeans'
    },
    {
        name: 'Men || Pants || Carpenter'
    },
    {
        name: 'Men || Shorts || Corduroys'
    },
    {
        name: 'Men || Coats & jackets || Vest'
    },
    {
        name: 'Men || Blazers & sport coats || Double breasted'
    },
    {
        name: 'Men || Suits || Tuxedo'
    },
    {
        name: 'Men || Athletic apparel || Socks'
    },
    {
        name: 'Men || Athletic apparel || Athletic Polos'
    },
    {
        name: "Men || Men's accessories || All Men's accessories"
    },
    {
        name: 'Electronics || Cameras & photography || Digital cameras'
    },
    {
        name: 'Electronics || Computers & Laptops || Printers'
    },
    {
        name: 'Electronics || Cell phones & accessories || Cell Phone Cases'
    },
    {
        name: 'Electronics || TV & Video || DVD Players'
    },
    {
        name: 'Electronics || Car audio, video & gps || All Car audio, video & gps'
    },
    {
        name: 'Electronics || Computer Components & Parts || Computer Controller Cards'
    },
    {
        name: 'Women || Sweaters || Cowl neck'
    },
    {
        name: 'Women || Sweaters || Crewneck'
    },
    {
        name: 'Women || Jeans || Capri Jeans'
    },
    {
        name: 'Women || Jeans || Skinny Jeans'
    },
    {
        name: 'Women || Pants || Corduroys'
    },
    {
        name: 'Women || Coats & jackets || Military'
    },
    {
        name: 'Women || Coats & jackets || Peacoat'
    },
    {
        name: 'Women || Athletic apparel || Athletic Skorts'
    },
    {
        name: 'Women || Athletic apparel || All Athletic apparel'
    },
    {
        name: 'Women || Swimwear || Two-piece'
    },
    {
        name: "Women || Women's accessories || Hair accessories"
    },
    {
        name: 'Women || Maternity || Maternity Button-Ups'
    },
    {
        name: 'Women || Maternity || All Maternity'
    },
    {
        name: 'Women || Shoes || Boots'
    },
    {
        name: 'Women || Shorts || Bike'
    },
    {
        name: 'Women || Shorts || Cargo'
    },
    {
        name: 'Women || Shorts || High-waisted'
    },
    {
        name: 'Women || Shorts || Pull-on'
    },
    {
        name: 'Women || Shorts || Skort'
    },
    {
        name: 'Women || Sleepwear & robes || Other'
    },
    {
        name: 'Women || Shoes || Slippers'
    },
    {
        name: 'Men || Shorts || Other'
    },
    {
        name: 'Men || Coats & jackets || Varsity/baseball'
    },
    {
        name: 'Men || Coats & jackets || Windbreaker'
    },
    {
        name: 'Men || Coats & jackets || Wool'
    },
    {
        name: 'Men || Blazers & sport coats || One button'
    },
    {
        name: 'Men || Athletic apparel || Snow Bibs'
    },
    {
        name: 'Men || Athletic apparel || Other'
    },
    {
        name: "Men || Men's accessories || Bags"
    },
    {
        name: 'Men || Shoes || Fashion sneakers'
    },
    {
        name: 'Men || Shoes || Outdoor'
    },
    {
        name: 'Men || Shoes || Clogs'
    },
    {
        name: 'Men || Jewelry || Rings'
    },
    {
        name: 'Electronics || Cameras & photography || Camera Films'
    },
    {
        name: 'Electronics || Cameras & photography || All Cameras & photography'
    },
    {
        name: 'Electronics || Cell phones & accessories || Cell Phone Skins'
    },
    {
        name: 'Electronics || Car audio, video & gps || Car A/V installation'
    },
    {
        name: 'Electronics || Computer Components & Parts || Desktop Cases'
    },
    {
        name: 'Women || Sweaters || Mock Sweaters'
    },
    {
        name: 'Women || Jeans || Relaxed'
    },
    {
        name: 'Women || Pants || Dress pants'
    },
    {
        name: 'Women || Coats & jackets || Jean jacket'
    },
    {
        name: 'Women || Coats & jackets || Puffer'
    },
    {
        name: 'Women || Athletic apparel || Shorts'
    },
    {
        name: 'Women || Athletic apparel || Athletic Hoodies'
    },
    {
        name: 'Women || Athletic apparel || Track Jackets'
    },
    {
        name: 'Women || Athletic apparel || Track Pants'
    },
    {
        name: "Women || Women's handbags || Satchel"
    },
    {
        name: "Women || Women's handbags || Cosmetic bags"
    },
    {
        name: 'Women || Shoes || Outdoor'
    },
    {
        name: "Women || Women's accessories || Hats"
    },
    {
        name: 'Women || Shorts || Short shorts'
    },
    {
        name: 'Women || Shorts || All Shorts'
    },
    {
        name: 'Women || Sleepwear & robes || Pajama pants'
    },
    {
        name: 'Women || Sleepwear & robes || Pajama sets'
    },
    {
        name: 'Women || Sleepwear & robes || Pajama shorts'
    },
    {
        name: 'Men || Tops || Button-front'
    },
    {
        name: 'Men || Sweaters || Vest'
    },
    {
        name: 'Men || Coats & jackets || Military'
    },
    {
        name: 'Men || Swimwear || Board shorts'
    },
    {
        name: "Men || Men's accessories || Cardholders"
    },
    {
        name: 'Men || Jewelry || Pins'
    },
    {
        name: 'Men || Jewelry || All Jewelry'
    },
    {
        name: 'Electronics || Computers & Laptops || Computer Media'
    },
    {
        name: 'Electronics || Cell phones & accessories || Wireless Cell Phone Chargers'
    },
    {
        name: 'Electronics || TV & Video || Other'
    },
    {
        name: 'Electronics || Media || VHS'
    },
    {
        name: 'Electronics || Computer Components & Parts || PC Water Cooling Kits'
    },
    {
        name: 'Electronics || Computer Components & Parts || Thermal Compound'
    },
    {
        name: 'Electronics || Home Audio || DJ Equipment'
    },
    {
        name: 'Electronics || Home Audio || Radios'
    },
    {
        name: 'Electronics || Computer Components & Parts || Other Computer Parts & Components'
    },
    {
        name: 'Electronics || Smart Home & Security || Smart Locks'
    },
    {
        name: 'Electronics || Video Game Merchandise || Interactive Gaming Figures'
    },
    {
        name: 'Electronics || Home Audio || Microphones'
    },
    {
        name: 'Electronics || Smart Home & Security || Home surveillance'
    },
    {
        name: 'Toys & Collectibles || Action Figures & Accessories || Action Figure Accessories'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Model Kits'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Kids Computer & Tablet Accessories'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Kids Tablets'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Toy Robots'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Handheld Games'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Car Seat & Stroller Toys'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Other'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || All Baby & Toddler Toys'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Math Toys'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || All Dress Up & Pretend Play'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || Fortune Telling Toys'
    },
    {
        name: 'Toys & Collectibles || Trading Cards || Trading Card Boxes'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || Paper Collectibles'
    },
    {
        name: 'Electronics || Home Audio || Home Audio CD/SACD Players'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Blythe'
    },
    {
        name: 'Electronics || Home Audio || Home Audio Equalizers'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Other'
    },
    {
        name: 'Electronics || Tablets & E-readers || Tablet Accessories'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Waldorf'
    },
    {
        name: 'Electronics || Drones || Drones'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || Auto Racing Trading Cards'
    },
    {
        name: 'Electronics || Drones || All Drones'
    },
    {
        name: "Home || Kids' home store || Kids' flatware"
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || Baby Dolls'
    },
    {
        name: 'Home || Kitchen Bakeware || Loaf Pans'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Squishies'
    },
    {
        name: 'Home || Kitchen Cookware || Cookware Sets'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Autographs'
    },
    {
        name: 'Home || Kitchen Cookware || Woks'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Chess & Checkers'
    },
    {
        name: 'Home || Kitchen Small Appliances || Hand Blenders'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Sand & Water Toys'
    },
    {
        name: 'Home || Kitchen Small Appliances || Kitchen Hot Plates'
    },
    {
        name: 'Toys & Collectibles || Remote Control Toys & Vehicles || Kids Drones & Flying Toys'
    },
    {
        name: 'Home || Kitchen Small Appliances || Rice Cookers'
    },
    {
        name: 'Toys & Collectibles || Remote Control Toys & Vehicles || Play Vehicles'
    },
    {
        name: 'Home || Kitchen Storage || Kitchen Bread Boxes'
    },
    {
        name: 'Toys & Collectibles || Stuffed Animals & Plush || Character Blankets'
    },
    {
        name: 'Home || Kitchen Storage || Kitchen Spice Jars'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Soothers'
    },
    {
        name: 'Home || Kitchen Storage || Kitchen Spice Racks'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Geography & History Toys'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Wine Racks'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || All Learning & Education Toys'
    },
    {
        name: 'Toys & Collectibles || Trading Cards || All Trading Cards'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Electronics'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || Antique Collectibles'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Child friendly'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Human Figure Dolls'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || Baseball Trading Cards'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || Wrestling Trading Cards'
    },
    {
        name: 'Home || Kitchen Bakeware || Bakeware Sets'
    },
    {
        name: 'Home || Kitchen Coffee & Espresso Makers || Coffee Roasters'
    },
    {
        name: 'Home || Kitchen Coffee & Espresso Makers || French Presses'
    },
    {
        name: 'Home || Kitchen Cookware || Casserole Pans'
    },
    {
        name: 'Home || Kitchen Cookware || Tagines'
    },
    {
        name: 'Home || Kitchen Serveware || Dessert & Cake Stands'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Napkin Rings'
    },
    {
        name: 'Home || Kitchen & Table Linens || All Kitchen & Table Linens'
    },
    {
        name: 'Home || Kitchen Utensils || Pasta Servers'
    },
    {
        name: 'Home || Kitchen Small Appliances || Food Warming Trays'
    },
    {
        name: 'Home || Bedroom Furniture || Vanities'
    },
    {
        name: 'Electronics || Home Audio || Home Audio Sound Bars'
    },
    {
        name: 'Men || Jeans || All Jeans'
    },
    {
        name: 'Electronics || Home Audio || CD Players'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Toy Cameras'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Tile Games'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Game Tables'
    },
    {
        name: 'Toys & Collectibles || Stuffed Animals & Plush || All Stuffed Animals & Plush'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || Clay, Dough & Pottery Kits'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || Stickers'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Soft & Plush Toys'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Music & Art Learning Toys'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || Toy Putty'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Plush'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Waldorf'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Games'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || Football Trading Cards'
    },
    {
        name: "Home || Kids' home store || Kids' Storage"
    },
    {
        name: "Home || Kids' home store || All Kids' home store"
    },
    {
        name: 'Home || Kitchen Cookware || Stock Pots & Multipots'
    },
    {
        name: 'Home || Kitchen Serveware || Serving Baskets'
    },
    {
        name: 'Home || Kitchen Serveware || Trivets'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Oven Mitts'
    },
    {
        name: 'Home || Kitchen Utensils || All Kitchen Utensils'
    },
    {
        name: 'Home || Kitchen Small Appliances || Electric Skillets'
    },
    {
        name: 'Home || Kitchen Small Appliances || Popcorn Makers'
    },
    {
        name: 'Home || Kitchen Small Appliances || Sous Vide'
    },
    {
        name: 'Home || Kitchen Small Appliances || Waffle Makers'
    },
    {
        name: 'Home || Kitchen Storage || Food Storage Bags'
    },
    {
        name: 'Home || Kitchen Storage || Food Storage Containers'
    },
    {
        name: 'Home || Kitchen Storage || Kitchen Drawers Organizers'
    },
    {
        name: 'Home || Bedroom Furniture || Mattresses'
    },
    {
        name: 'Electronics || Home Audio || Audio Accessories'
    },
    {
        name: 'Electronics || Home Audio || Home Speakers'
    },
    {
        name: 'Electronics || Home Audio || Home Audio Integrated Amplifiers'
    },
    {
        name: 'Women || Underwear || Bras'
    },
    {
        name: 'Electronics || Home Audio || Home Audio Tape Decks'
    },
    {
        name: 'Electronics || Home Audio || All Home Audio'
    },
    {
        name: 'Electronics || Virtual Reality || VR Games'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Basting Brushes'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || Model Kits'
    },
    {
        name: "Home || Kids' home store || Nursery décor"
    },
    {
        name: 'Home || Kitchen Cookware || Fry Pans'
    },
    {
        name: 'Home || Kitchen Utensils || Cooking Ladles'
    },
    {
        name: 'Home || Kitchen Storage || Kitchen Foils'
    },
    {
        name: 'Electronics || Wearables || All Wearables'
    },
    {
        name: 'Electronics || Home Audio || Record Players'
    },
    {
        name: 'Electronics || Home Audio || Home Audio Turntables'
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || Fashion Dolls'
    },
    {
        name: 'Toys & Collectibles || Building Toys || Magnetic Construction'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || All Electronics for Kids'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Sudoku Puzzles'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Kids Hoverboards'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || Glue'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Shape & Color Sorters'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Reading & Writing Toys'
    },
    {
        name: 'Toys & Collectibles || Trading Cards || Trading Card Decks'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Puzzles'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || Glass'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Scale Models'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || All Handmade Dolls & Miniatures'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || Other Sports Trading Cards'
    },
    {
        name: 'Home || Kitchen Bakeware || Cupcake & Muffin Pans'
    },
    {
        name: 'Home || Kitchen Dinnerware || Dinnerware Sets'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Zesters'
    },
    {
        name: 'Home || Kitchen Small Appliances || Contact Grills'
    },
    {
        name: 'Home || Kitchen Storage || Kitchen Pantry Organizers'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Wine Boxes'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Wine Openers & Corkscrews'
    },
    {
        name: 'Electronics || Wearables || Smart Watch Accessories'
    },
    {
        name: 'Electronics || Smart Home & Security || Smart Cleaning Appliances'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Toy Statues'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Swing Sets'
    },
    {
        name: 'Toys & Collectibles || Stuffed Animals & Plush || Plush Figures'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Engineering Toys'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || Novelty Spinning Tops'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || All Vintage & Antique Toys'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || Souvenirs & Memorabilia'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Sports'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Art dolls'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Fantasy'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || All Sports Trading Cards'
    },
    {
        name: "Home || Kids' home store || Kids' furniture"
    },
    {
        name: 'Home || Kitchen Bakeware || Cookie Sheets'
    },
    {
        name: 'Home || Kitchen Cookware || Grill Pans'
    },
    {
        name: 'Home || Kitchen Cookware || Saucepans'
    },
    {
        name: 'Home || Kitchen Serveware || Pitchers'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Aprons'
    },
    {
        name: 'Home || Kitchen Utensils || Salad Spinners'
    },
    {
        name: 'Home || Kitchen Small Appliances || Juicers'
    },
    {
        name: 'Home || Kitchen Small Appliances || All Kitchen Small Appliances'
    },
    {
        name: 'Home || Bedroom Furniture || Vanity Stools'
    },
    {
        name: 'Home || Bedroom Furniture || All Bedroom Furniture'
    },
    {
        name: 'Home || Home Office Furniture || Office Shelves'
    },
    {
        name: 'Home || Living Room Furniture || Sofas'
    },
    {
        name: 'Home || Kitchen Furniture || Dining Sets'
    },
    {
        name: 'Home || Bathroom Furniture || Bathroom Etagere'
    },
    {
        name: 'Home || Kitchen Furniture || Other Dining Furniture'
    },
    {
        name: 'Home || Kitchen Furniture || Dining Tables'
    },
    {
        name: 'Home || Furniture Hardware & Parts || All Furniture Hardware & Parts'
    },
    {
        name: 'Home || Kitchen Furniture || Dining Benches'
    },
    {
        name: 'Home || Living Room Furniture || TV Mounts'
    },
    {
        name: 'Home || Kitchen Barware || All Kitchen Barware'
    },
    {
        name: 'Home || Kitchen Drinkware || Other Drinkware Accessories'
    },
    {
        name: 'Home || Kitchen Flatware || Dinner Knives'
    },
    {
        name: 'Home || Kitchen Flatware || Serving Sets'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Mixing Bowls'
    },
    {
        name: 'Home || Kitchen Tea & Accessories || Tea Infusers'
    },
    {
        name: 'Home || Bedding || Coverlets'
    },
    {
        name: 'Home || Bedding || Blankets'
    },
    {
        name: 'Home || Bath || Bath linen sets'
    },
    {
        name: 'Home || Bath || Other'
    },
    {
        name: 'Home || Furniture || Entertainment Centers & TV Stands'
    },
    {
        name: 'Home || Home decor || Doorstops'
    },
    {
        name: 'Home || Home decor || Rug Pads'
    },
    {
        name: 'Home || Home decor || Home Candles'
    },
    {
        name: 'Home || Home appliances || Home Floor Care'
    },
    {
        name: 'Home || Home appliances || Washers'
    },
    {
        name: 'Home || Party Supplies || Party Decorations'
    },
    {
        name: 'Beauty || Hair care || Shampoo plus conditioner'
    },
    {
        name: 'Beauty || Hair care || Hair Perms'
    },
    {
        name: 'Beauty || Skin care || Feet'
    },
    {
        name: 'Beauty || Other || All Other'
    },
    {
        name: 'Kids || Girls coats & jackets || Girls (4+)'
    },
    {
        name: 'Kids || Girls shoes || Girls 2T-5T'
    },
    {
        name: 'Kids || Boys swimwear || Boys 2T-5T'
    },
    {
        name: 'Kids || Bathing & skin care || Kids Washcloths'
    },
    {
        name: 'Kids || Bathing & skin care || All Bathing & skin care'
    },
    {
        name: 'Kids || Car seats & accessories || Other'
    },
    {
        name: 'Kids || Car seats & accessories || All Car seats & accessories'
    },
    {
        name: 'Kids || Diapering || Cloth diapers'
    },
    {
        name: 'Kids || Health & baby care || All Health & baby care'
    },
    {
        name: 'Toys & Collectibles || Building Toys || Stacking Blocks'
    },
    {
        name: 'Home || Furniture Hardware & Parts || Drawer Slides'
    },
    {
        name: 'Home || Kitchen Cutlery || Cheese Knives'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Knife Sets'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Steak Knives'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || Icing Nozzles'
    },
    {
        name: 'Home || Kitchen Flatware || All Kitchen Flatware'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Kitchen Cutting Boards'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Nut & Shell Crackers'
    },
    {
        name: 'Home || Bath || All Bath'
    },
    {
        name: 'Home || Home decor || Fragrance Oils'
    },
    {
        name: 'Home || Home decor || Home Decor Lamp Accessories'
    },
    {
        name: 'Home || Home appliances || Microwaves'
    },
    {
        name: 'Home || Home appliances || Space heaters'
    },
    {
        name: 'Home || Storage & organization || Storage Shelves'
    },
    {
        name: 'Home || Storage & organization || Other'
    },
    {
        name: 'Beauty || Fragrance || Men'
    },
    {
        name: 'Beauty || Fragrance || Other'
    },
    {
        name: 'Beauty || Skin care || Lips'
    },
    {
        name: 'Kids || Girls accessories || All Girls accessories'
    },
    {
        name: 'Kids || Girls coats & jackets || Girls 0-24 mos'
    },
    {
        name: 'Kids || Boys coats & jackets || Boys (4+)'
    },
    {
        name: 'Kids || Boys tops & t-shirts || All Boys tops & t-shirts'
    },
    {
        name: 'Kids || Bathing & skin care || Kids Grooming Kits'
    },
    {
        name: 'Kids || Gear || Baby Activity Centers'
    },
    {
        name: 'Kids || Gear || Bicycle Child Trailers'
    },
    {
        name: 'Home || Living Room Furniture || Futons'
    },
    {
        name: 'Home || Furniture Hardware & Parts || Backplates'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Paring Knives'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || Cake Scrapers'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Cleavers'
    },
    {
        name: 'Home || Kitchen Barware || Martini Glasses'
    },
    {
        name: 'Home || Kitchen Flatware || Salad Servers'
    },
    {
        name: 'Home || Kitchen Drinkware || Tumblers'
    },
    {
        name: 'Electronics || Home Audio || Home Audio Preamplifiers'
    },
    {
        name: 'Home || Kitchen Flatware || Table Spoons'
    },
    {
        name: 'Home || Kitchen & dining || Water Filters'
    },
    {
        name: 'Home || Bedding || All Bedding'
    },
    {
        name: 'Home || Home decor || Other Candle Accessories'
    },
    {
        name: 'Home || Home decor || Photo Albums'
    },
    {
        name: 'Home || Artwork || Other'
    },
    {
        name: 'Home || Seasonal decor || Halloween'
    },
    {
        name: 'Home || Bedding || Pillow Inserts'
    },
    {
        name: 'Home || Party Supplies || Balloons'
    },
    {
        name: 'Home || Bath || Bathroom furniture sets'
    },
    {
        name: 'Home || Artwork || Art Prints'
    },
    {
        name: 'Home || Party Supplies || Party Tableware'
    },
    {
        name: 'Home || Storage & organization || Holiday decor storage'
    },
    {
        name: 'Home || Seasonal decor || Easter'
    },
    {
        name: 'Home || Storage & organization || Jewelry boxes & organizers'
    },
    {
        name: 'Home || Seasonal decor || All Seasonal decor'
    },
    {
        name: 'Home || Cleaning supplies || Household cleaners'
    },
    {
        name: 'Home || Home appliances || Humidifiers'
    },
    {
        name: 'Home || Home appliances || All Home appliances'
    },
    {
        name: 'Beauty || Hair care || Hair loss products'
    },
    {
        name: 'Home || Storage & organization || Garage storage & organization'
    },
    {
        name: 'Kids || Girls tops & t-shirts || Girls 0-24 mos'
    },
    {
        name: 'Kids || Boys tops & t-shirts || Boys 0-24 mos'
    },
    {
        name: 'Home || Storage & organization || Storage Baskets'
    },
    {
        name: 'Home || Cleaning supplies || Other'
    },
    {
        name: 'Home || Cleaning supplies || All Cleaning supplies'
    },
    {
        name: 'Kids || Bathing & skin care || Other'
    },
    {
        name: 'Kids || Diapering || Diaper Pails'
    },
    {
        name: 'Beauty || Bath & body || Other'
    },
    {
        name: 'Beauty || Hair care || All Hair care'
    },
    {
        name: 'Kids || Diapering || Baby Lotions'
    },
    {
        name: 'Beauty || Tools & accessories || Cotton & swabs'
    },
    {
        name: 'Kids || Gear || Playard bedding'
    },
    {
        name: 'Beauty || Tools & accessories || Waxing'
    },
    {
        name: 'Kids || Gear || Baby Bouncers'
    },
    {
        name: 'Kids || Gear || Other'
    },
    {
        name: 'Beauty || Tools & accessories || Other'
    },
    {
        name: 'Beauty || Makeup || Other'
    },
    {
        name: 'Kids || Girls one-pieces || Girls 2T-5T'
    },
    {
        name: 'Kids || Health & baby care || Nail care'
    },
    {
        name: 'Kids || Boys accessories || Boys 0-24 mos'
    },
    {
        name: 'Kids || Boys swimwear || All Boys swimwear'
    },
    {
        name: 'Kids || Boys other || Boys 0-24 mos'
    },
    {
        name: 'Kids || Bathing & skin care || Kids Bathing Towels'
    },
    {
        name: 'Kids || Feeding || Kids Booster Seats'
    },
    {
        name: 'Kids || Feeding || Kids Feeding Accessories'
    },
    {
        name: 'Kids || Gear || Playards'
    },
    {
        name: 'Kids || Gear || Baby Carrier Backpacks'
    },
    {
        name: 'Kids || Nursery || Furniture'
    },
    {
        name: 'Home || Bathroom Furniture || Bathroom Organizers'
    },
    {
        name: 'Home || Furniture Hardware & Parts || Knobs'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Knife Blocks'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Utility Knives'
    },
    {
        name: 'Home || Kitchen Barware || Shot Glasses'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Ice Cube Trays'
    },
    {
        name: 'Home || Kitchen & dining || Water Coolers'
    },
    {
        name: 'Home || Other Furniture || All Other Furniture'
    },
    {
        name: 'Home || Bedding || Mattress pads'
    },
    {
        name: 'Home || Bedding || Bedspreads'
    },
    {
        name: 'Home || Bedding || Pillowcases'
    },
    {
        name: 'Home || Bedding || Other'
    },
    {
        name: 'Home || Furniture || All Furniture'
    },
    {
        name: 'Home || Home decor || Candle Warmers'
    },
    {
        name: 'Home || Home decor || Fireplaces'
    },
    {
        name: 'Home || Home decor || Home Decor Lamps'
    },
    {
        name: 'Home || Artwork || Lithographs'
    },
    {
        name: 'Home || Artwork || Posters'
    },
    {
        name: 'Home || Home appliances || Air conditioners'
    },
    {
        name: 'Home || Cleaning supplies || Squeegees'
    },
    {
        name: 'Beauty || Fragrance || All Fragrance'
    },
    {
        name: 'Beauty || Hair care || Hair color'
    },
    {
        name: 'Beauty || Makeup || All Makeup'
    },
    {
        name: 'Kids || Girls coats & jackets || All Girls coats & jackets'
    },
    {
        name: 'Kids || Boys coats & jackets || Boys 2T-5T'
    },
    {
        name: 'Kids || Boys shoes || Boys 0-24 mos'
    },
    {
        name: 'Kids || Boys shoes || Boys (4+)'
    },
    {
        name: 'Kids || Boys shoes || All Boys shoes'
    },
    {
        name: 'Kids || Diapering || Diaper Pail Refills'
    },
    {
        name: 'Kids || Gear || Baby Playmats'
    },
    {
        name: 'Kids || Gear || All Gear'
    },
    {
        name: 'Home || Kitchen Furniture || Kitchen Bar Stools'
    },
    {
        name: 'Home || Living Room Furniture || Console Tables'
    },
    {
        name: 'Home || Living Room Furniture || Recliners'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Carving Knives'
    },
    {
        name: 'Home || Kitchen Cutlery || All Kitchen Cutlery'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || Rolling Pins'
    },
    {
        name: 'Home || Kitchen Barware || Wine Glasses'
    },
    {
        name: 'Home || Kitchen Flatware || Pie Servers'
    },
    {
        name: 'Home || Kitchen Flatware || Serving Spoons'
    },
    {
        name: 'Home || Kitchen Flatware || Teaspoons'
    },
    {
        name: 'Home || Bedding || Bed Sheets'
    },
    {
        name: 'Home || Bath || Bath rugs'
    },
    {
        name: 'Home || Home appliances || Freezers'
    },
    {
        name: 'Home || Home appliances || Irons'
    },
    {
        name: 'Home || Party Supplies || Gift Wrapping Supplies'
    },
    {
        name: 'Home || Party Supplies || Party Favors'
    },
    {
        name: 'Home || Storage & organization || Storage Drawers'
    },
    {
        name: 'Home || Cleaning supplies || Paper towels'
    },
    {
        name: 'Beauty || Bath & body || Cleansers'
    },
    {
        name: 'Beauty || Skin care || Hand Care'
    },
    {
        name: 'Beauty || Tools & accessories || Hair styling tools'
    },
    {
        name: 'Kids || Girls shoes || Girls 0-24 mos'
    },
    {
        name: 'Home || Home Office Furniture || Bookcases'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Knife Sharpeners'
    },
    {
        name: 'Kids || Boys coats & jackets || All Boys coats & jackets'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || Cookie Cutters'
    },
    {
        name: 'Kids || Boys tops & t-shirts || Boys 2T-5T'
    },
    {
        name: 'Home || Kitchen Barware || Margarita Glasses'
    },
    {
        name: 'Kids || Car seats & accessories || Car seats'
    },
    {
        name: 'Kids || Diapering || Disposable diapers'
    },
    {
        name: 'Home || Kitchen Drinkware || Travel Mugs'
    },
    {
        name: 'Home || Kitchen Drinkware || Water Bottles'
    },
    {
        name: 'Home || Kitchen Flatware || Butter Knives'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Cooking Thermometers'
    },
    {
        name: 'Home || Kitchen & dining || Wine Making Supplies'
    },
    {
        name: 'Home || Home decor || Baskets'
    },
    {
        name: 'Home || Home decor || Decorative pillows'
    },
    {
        name: 'Home || Home decor || Candle Holders'
    },
    {
        name: 'Home || Artwork || Etchings'
    },
    {
        name: 'Home || Seasonal decor || Christmas'
    },
    {
        name: "Home || Seasonal decor || St patrick's"
    },
    {
        name: "Home || Seasonal decor || New year's"
    },
    {
        name: 'Home || Home appliances || Air purifiers'
    },
    {
        name: 'Home || Home appliances || Vacuums'
    },
    {
        name: 'Home || Party Supplies || All Party Supplies'
    },
    {
        name: 'Home || Storage & organization || Clothing & closet storage'
    },
    {
        name: 'Beauty || Bath & body || Bathing accessories'
    },
    {
        name: 'Beauty || Bath & body || Sets'
    },
    {
        name: 'Beauty || Bath & body || Body Care'
    },
    {
        name: 'Beauty || Fragrance || Women'
    },
    {
        name: 'Beauty || Hair care || Shampoo & conditioner sets'
    },
    {
        name: 'Beauty || Tools & accessories || Tweezers'
    },
    {
        name: 'Kids || Girls accessories || Girls (4+)'
    },
    {
        name: 'Kids || Girls one-pieces || Girls 0-24 mos'
    },
    {
        name: 'Kids || Girls swimwear || Girls 0-24 mos'
    },
    {
        name: 'Kids || Boys coats & jackets || Boys 0-24 mos'
    },
    {
        name: 'Kids || Boys one-pieces || All Boys one-pieces'
    },
    {
        name: 'Kids || Feeding || Kids Highchairs'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Kitchen Mortar & Pestles'
    },
    {
        name: 'Kids || Gear || Baby Carriers'
    },
    {
        name: 'Home || Kitchen Drinkware || All Kitchen Drinkware'
    },
    {
        name: 'Home || Kitchen Flatware || Chopstick Holders'
    },
    {
        name: 'Home || Kitchen Flatware || Flatware Sets'
    },
    {
        name: 'Home || Bath || Bathroom accessories'
    },
    {
        name: 'Home || Home decor || Mirrors'
    },
    {
        name: 'Home || Home decor || Aromatherapy Diffusers'
    },
    {
        name: 'Home || Seasonal decor || Thanksgiving'
    },
    {
        name: 'Home || Seasonal decor || Hanukkah'
    },
    {
        name: 'Home || Home appliances || Kitchen appliances'
    },
    {
        name: 'Home || Home appliances || Wine Coolers'
    },
    {
        name: 'Home || Party Supplies || Piñatas'
    },
    {
        name: 'Home || Storage & organization || Storage cabinets'
    },
    {
        name: 'Home || Storage & organization || Storage Bins'
    },
    {
        name: 'Beauty || Fragrance || Sets'
    },
    {
        name: 'Beauty || Hair care || Hair relaxers'
    },
    {
        name: 'Kids || Girls dresses || Girls (4+)'
    },
    {
        name: 'Kids || Boys one-pieces || Boys 2T-5T'
    },
    {
        name: 'Kids || Boys shoes || Boys 2T-5T'
    },
    {
        name: 'Kids || Boys tops & t-shirts || Boys (4+)'
    },
    {
        name: 'Kids || Bathing & skin care || Non-slip bath mats'
    },
    {
        name: 'Kids || Bathing & skin care || Shampoo'
    },
    {
        name: 'Kids || Gear || Walkers'
    },
    {
        name: 'Kids || Diapering || Baby Wipes'
    },
    {
        name: 'Kids || Health & baby care || Toothbrushes'
    },
    {
        name: 'Home || Bathroom Furniture || Bathroom Vanities'
    },
    {
        name: 'Home || Home Office Furniture || Office Chairs'
    },
    {
        name: 'Home || Kitchen Furniture || All Kitchen Furniture'
    },
    {
        name: 'Home || Kitchen Furniture || Dining Chairs'
    },
    {
        name: 'Home || Home Office Furniture || Office Cabinets'
    },
    {
        name: 'Home || Kitchen Barware || Bar Glasses'
    },
    {
        name: 'Home || Kitchen Drinkware || Tea Cups'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Can Openers'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Cooking Funnels'
    },
    {
        name: 'Home || Kitchen Tea & Accessories || Stovetop Kettles'
    },
    {
        name: 'Home || Kitchen & dining || All Kitchen & dining'
    },
    {
        name: 'Home || Bedding || Duvet Covers'
    },
    {
        name: 'Home || Bath || Towels'
    },
    {
        name: 'Home || Artwork || Photographs'
    },
    {
        name: 'Home || Home appliances || Fans'
    },
    {
        name: 'Home || Home appliances || Garment steamers'
    },
    {
        name: 'Home || Home appliances || Ironing Boards'
    },
    {
        name: 'Home || Cleaning supplies || Sponges'
    },
    {
        name: 'Beauty || Bath & body || Body Scrubs'
    },
    {
        name: 'Beauty || Hair care || Hair & scalp treatments'
    },
    {
        name: 'Beauty || Makeup || Nails'
    },
    {
        name: 'Beauty || Skin care || Eyes'
    },
    {
        name: 'Beauty || Skin care || Sets & kits'
    },
    {
        name: 'Beauty || Tools & accessories || Toiletry kits'
    },
    {
        name: 'Kids || Girls swimwear || Girls (4+)'
    },
    {
        name: 'Kids || Girls other || Girls 0-24 mos'
    },
    {
        name: 'Kids || Bathing & skin care || Bubble bath'
    },
    {
        name: 'Kids || Bathing & skin care || Kids Facial Cleansers'
    },
    {
        name: 'Kids || Diapering || Baby Changing Pad Covers'
    },
    {
        name: 'Kids || Diapering || Baby Changing Pads'
    },
    {
        name: 'Kids || Diapering || Baby Wipe Holders'
    },
    {
        name: 'Kids || Feeding || Storage & containers'
    },
    {
        name: 'Kids || Gear || Baby Gyms'
    },
    {
        name: 'Kids || Health & baby care || Humidifiers'
    },
    {
        name: 'Kids || Health & baby care || Teething relief'
    },
    {
        name: 'Kids || Health & baby care || Thermometers'
    },
    {
        name: 'Home || Living Room Furniture || Cabinets'
    },
    {
        name: 'Home || Living Room Furniture || Coffee Tables'
    },
    {
        name: 'Home || Furniture Hardware & Parts || Hinges'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || Cake Toppers'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Manual Juicers'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || All Kitchen Gadgets & Tools'
    },
    {
        name: 'Home || Kitchen Tea & Accessories || All Kitchen Tea & Accessories'
    },
    {
        name: 'Home || Bedding || Duvet Sets'
    },
    {
        name: 'Home || Home decor || Tapestries'
    },
    {
        name: 'Home || Home decor || Vases'
    },
    {
        name: 'Home || Home decor || Fireplace Accessories'
    },
    {
        name: 'Home || Home decor || Other'
    },
    {
        name: 'Beauty || Makeup || Makeup remover'
    },
    {
        name: 'Kids || Girls tops & t-shirts || Girls 2T-5T'
    },
    {
        name: 'Kids || Boys accessories || Boys 2T-5T'
    },
    {
        name: 'Kids || Boys other || Boys 2T-5T'
    },
    {
        name: 'Kids || Diapering || Other'
    },
    {
        name: 'Kids || Feeding || Gift sets'
    },
    {
        name: 'Home || Home Office Furniture || Office Chair Mats'
    },
    {
        name: 'Kids || Feeding || Other'
    },
    {
        name: 'Home || Bathroom Furniture || Bathroom Cabinets'
    },
    {
        name: 'Home || Furniture Hardware & Parts || Latches'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || Cake Levelers'
    },
    {
        name: 'Home || Kitchen Drinkware || Glassware Collections'
    },
    {
        name: 'Home || Kitchen Flatware || Serving Forks'
    },
    {
        name: 'Home || Bedding || Inflatable beds'
    },
    {
        name: 'Home || Bedding || Quilts'
    },
    {
        name: 'Home || Furniture || Home bar furniture'
    },
    {
        name: 'Home || Home appliances || Dryers'
    },
    {
        name: 'Home || Storage & organization || Bathroom storage & organization'
    },
    {
        name: 'Home || Storage & organization || All Storage & organization'
    },
    {
        name: 'Home || Cleaning supplies || Gloves'
    },
    {
        name: 'Beauty || Hair care || Other'
    },
    {
        name: 'Beauty || Skin care || Sun'
    },
    {
        name: 'Beauty || Tools & accessories || Epilators'
    },
    {
        name: 'Kids || Girls dresses || Girls 0-24 mos'
    },
    {
        name: 'Kids || Girls swimwear || All Girls swimwear'
    },
    {
        name: 'Kids || Girls tops & t-shirts || All Girls tops & t-shirts'
    },
    {
        name: 'Kids || Boys bottoms || Boys 2T-5T'
    },
    {
        name: 'Home || Home Office Furniture || Desks'
    },
    {
        name: 'Kids || Boys one-pieces || Boys 0-24 mos'
    },
    {
        name: 'Home || Home Office Furniture || Filing Cabinets'
    },
    {
        name: 'Kids || Bathing & skin care || Kids Bathing Seats'
    },
    {
        name: 'Home || Living Room Furniture || All Living Room Furniture'
    },
    {
        name: 'Home || Furniture Hardware & Parts || Other Furniture Hardware & Parts'
    },
    {
        name: 'Kids || Diapering || Changing tables'
    },
    {
        name: "Home || Kitchen Cutlery || Chef's Knives"
    },
    {
        name: 'Kids || Girls swimwear || Girls 2T-5T'
    },
    {
        name: 'Home || Kitchen Barware || Champagne Flutes'
    },
    {
        name: 'Home || Kitchen Barware || Old-Fashioned Glasses'
    },
    {
        name: 'Home || Kitchen Drinkware || Straws'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Salt & Pepper Mills'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Stove Burner Covers'
    },
    {
        name: 'Home || Home decor || Draft stoppers'
    },
    {
        name: 'Home || Seasonal decor || Birthday'
    },
    {
        name: 'Home || Storage & organization || Storage Racks'
    },
    {
        name: 'Handmade || Weddings || Guest books'
    },
    {
        name: 'Handmade || Holidays || Thanksgiving'
    },
    {
        name: 'Handmade || Needlecraft || Needlepoint'
    },
    {
        name: 'Handmade || Needlecraft || Clothing'
    },
    {
        name: 'Handmade || Paper goods || Stationery'
    },
    {
        name: 'Handmade || Crochet || Supplies'
    },
    {
        name: 'Handmade || Quilts || Other'
    },
    {
        name: 'Handmade || Pets || Clothing'
    },
    {
        name: 'Handmade || Knitting || Accessories'
    },
    {
        name: 'Arts & Crafts || Paint || Gouache'
    },
    {
        name: 'Arts & Crafts || Art Pencils || Charcoal Pencils'
    },
    {
        name: 'Arts & Crafts || Art Pencils || All Art Pencils'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Embossing Powders'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Garden Gazing Balls'
    },
    {
        name: 'Handmade || Paper goods || Scrapbooking'
    },
    {
        name: 'Handmade || Crochet || Scarf'
    },
    {
        name: 'Handmade || Accessories || Case'
    },
    {
        name: 'Handmade || Accessories || Hat'
    },
    {
        name: 'Handmade || Pets || Leash'
    },
    {
        name: 'Handmade || Books and zines || Comic'
    },
    {
        name: 'Handmade || Music || Tape'
    },
    {
        name: 'Arts & Crafts || Sculptures || All Sculptures'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Fruit Pickers'
    },
    {
        name: 'Handmade || Furniture || Chair'
    },
    {
        name: 'Handmade || Furniture || All Furniture'
    },
    {
        name: 'Handmade || Quilts || Patchwork'
    },
    {
        name: 'Handmade || Quilts || Rag'
    },
    {
        name: 'Handmade || Pets || Toy'
    },
    {
        name: 'Handmade || Knitting || Baby'
    },
    {
        name: 'Kids || Gear || Baby seats'
    },
    {
        name: 'Handmade || Clothing || Shirt'
    },
    {
        name: 'Handmade || Patterns || Sewing'
    },
    {
        name: 'Handmade || Books and zines || All Books and zines'
    },
    {
        name: 'Handmade || Clothing || All Clothing'
    },
    {
        name: 'Handmade || Music || Vinyl'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Paper Rolls'
    },
    {
        name: 'Pet Supplies || Bird Supplies || All Bird Supplies'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Litter'
    },
    {
        name: 'Pet Supplies || Dog Supplies || All Dog Supplies'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Axes'
    },
    {
        name: 'Handmade || Weddings || Jewelry'
    },
    {
        name: 'Handmade || Needlecraft || Cross stitch'
    },
    {
        name: 'Handmade || Geekery || Jewelry'
    },
    {
        name: 'Handmade || Paper goods || Calendar'
    },
    {
        name: 'Handmade || Crochet || Afghan'
    },
    {
        name: 'Handmade || Patterns || Quilt'
    },
    {
        name: 'Handmade || Accessories || Keychain'
    },
    {
        name: 'Handmade || Accessories || Belt'
    },
    {
        name: 'Handmade || Pets || Small animal'
    },
    {
        name: 'Handmade || Knitting || Blanket'
    },
    {
        name: 'Handmade || Bags and purses || Tote'
    },
    {
        name: 'Handmade || Bags and purses || Clutch'
    },
    {
        name: 'Handmade || Clothing || Tshirt'
    },
    {
        name: 'Handmade || Clothing || Shoes'
    },
    {
        name: 'Handmade || Clothing || Men'
    },
    {
        name: 'Handmade || Music || All Music'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Newsprint Paper'
    },
    {
        name: 'Arts & Crafts || Ink & Calligraphy || All Ink & Calligraphy'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || All Stamping & Embossing'
    },
    {
        name: 'Pet Supplies || Bird Supplies || Bird Cage Covers'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Bowls & Feeders'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Crates'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Food'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Pheromone Treatment'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Flea & Tick Treatment'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Birdhouses'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Outdoor String Lights'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Wagons'
    },
    {
        name: 'Handmade || Weddings || Portraits'
    },
    {
        name: 'Handmade || Holidays || Halloween'
    },
    {
        name: 'Handmade || Paper goods || Sticker'
    },
    {
        name: 'Handmade || Holidays || Easter'
    },
    {
        name: 'Handmade || Crochet || Other'
    },
    {
        name: 'Handmade || Holidays || New years'
    },
    {
        name: 'Handmade || Accessories || Leg warmers'
    },
    {
        name: 'Handmade || Children || Art'
    },
    {
        name: 'Handmade || Pets || All Pets'
    },
    {
        name: 'Handmade || Geekery || Humor'
    },
    {
        name: 'Handmade || Paper goods || Bookplate'
    },
    {
        name: 'Handmade || Clothing || Costume'
    },
    {
        name: 'Handmade || Quilts || Mini'
    },
    {
        name: 'Handmade || Music || Equipment'
    },
    {
        name: 'Handmade || Accessories || Watch'
    },
    {
        name: 'Arts & Crafts || Photography || All Photography'
    },
    {
        name: 'Handmade || Pets || Pillow'
    },
    {
        name: 'Arts & Crafts || Fiber art || All Fiber art'
    },
    {
        name: 'Handmade || Knitting || Children'
    },
    {
        name: 'Arts & Crafts || Paint Brushes || Brush Sets'
    },
    {
        name: 'Handmade || Bags and purses || Messenger'
    },
    {
        name: 'Arts & Crafts || Paint Brushes || Watercolor Brushes'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || All Mediums & Varnishes'
    },
    {
        name: 'Handmade || Clothing || Lingerie'
    },
    {
        name: 'Handmade || Other || All Other'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Air Pumps'
    },
    {
        name: 'Arts & Crafts || Paint || All Paint'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Aquariums & Tanks'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Canvas Pads'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Fish Bowls'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Tracing Paper'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Scratchers'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Color Wheels'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Toys'
    },
    {
        name: 'Arts & Crafts || Paint Brushes || All Paint Brushes'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Waste Bags'
    },
    {
        name: 'Arts & Crafts || Pastels || All Pastels'
    },
    {
        name: 'Pet Supplies || Reptile Supplies || Reptile Terrariums'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || Oil Mediums'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Outdoor Spotlights'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Sealing Wax'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Seeders'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Stamp Ink Pads'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Sickles'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Aquarium Heaters'
    },
    {
        name: 'Pet Supplies || Bird Supplies || Bird Swings'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Doors & Flaps'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Harnesses'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Costumes'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Pools'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Tags'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Pooper Scoopers'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Bird Feeders'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Outdoor Thermometers'
    },
    {
        name: 'Handmade || Weddings || Bouquets'
    },
    {
        name: 'Handmade || Weddings || Other'
    },
    {
        name: 'Handmade || Weddings || Candles'
    },
    {
        name: 'Handmade || Needlecraft || All Needlecraft'
    },
    {
        name: 'Handmade || Geekery || Electronic'
    },
    {
        name: 'Handmade || Geekery || Other'
    },
    {
        name: 'Handmade || Furniture || Mirror'
    },
    {
        name: 'Handmade || Patterns || Baby'
    },
    {
        name: 'Handmade || Quilts || Traditional'
    },
    {
        name: 'Handmade || Quilts || All Quilts'
    },
    {
        name: 'Handmade || Accessories || Scarf'
    },
    {
        name: 'Handmade || Accessories || Pinback button'
    },
    {
        name: 'Handmade || Accessories || Gloves'
    },
    {
        name: 'Handmade || Knitting || Sweater'
    },
    {
        name: 'Handmade || Knitting || Scarf'
    },
    {
        name: 'Handmade || Jewelry || Books and zines'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Oil Painting Paper'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Sketch Paper'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Soft Pastel Paper'
    },
    {
        name: 'Arts & Crafts || Ink & Calligraphy || Alcohol Ink'
    },
    {
        name: 'Arts & Crafts || Pastels || Oil Pastels'
    },
    {
        name: 'Arts & Crafts || Resin Art Supplies || Resin Pigments'
    },
    {
        name: 'Kids || Feeding || Pacifiers'
    },
    {
        name: 'Pet Supplies || Bird Supplies || Bird Perches'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Leashes'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Supplements'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Flags'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Weathervanes'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Forks'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Hoes'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Scythes'
    },
    {
        name: 'Handmade || Holidays || Valentine'
    },
    {
        name: 'Handmade || Children || Toddler'
    },
    {
        name: 'Handmade || Children || Clothing'
    },
    {
        name: 'Handmade || Children || Other'
    },
    {
        name: 'Handmade || Patterns || Amigurumi'
    },
    {
        name: 'Handmade || Crochet || Clothing'
    },
    {
        name: 'Handmade || Furniture || Storage'
    },
    {
        name: 'Handmade || Quilts || Pillow'
    },
    {
        name: 'Handmade || Quilts || Patch'
    },
    {
        name: 'Handmade || Accessories || Shawl'
    },
    {
        name: 'Handmade || Knitting || Doll'
    },
    {
        name: 'Handmade || Knitting || Clothing'
    },
    {
        name: 'Handmade || Knitting || Other'
    },
    {
        name: 'Handmade || Music || Other'
    },
    {
        name: 'Arts & Crafts || Paint || Craft Paint'
    },
    {
        name: 'Arts & Crafts || Mixed media || All Mixed media'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Watercolor Paper'
    },
    {
        name: 'Arts & Crafts || Ink & Calligraphy || Sumi Ink'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Paint Nozzles'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Paint Storage Containers'
    },
    {
        name: 'Arts & Crafts || Paint Brushes || Multi-Purpose Brushes'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || Acrylic Mediums'
    },
    {
        name: 'Arts & Crafts || Resin Art Supplies || All Resin Art Supplies'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Stamping Kits'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Chews & Treats'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Collars'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Doors & Flaps'
    },
    {
        name: 'Pet Supplies || Reptile Supplies || Reptile Food'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Outdoor Fountains'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Patio Umbrella Lights'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Carts'
    },
    {
        name: 'Handmade || Knitting || Women'
    },
    {
        name: 'Handmade || Needlecraft || Pattern'
    },
    {
        name: 'Handmade || Patterns || Beading'
    },
    {
        name: 'Handmade || Pets || House'
    },
    {
        name: 'Handmade || Knitting || Bags and purses'
    },
    {
        name: 'Handmade || Bags and purses || Laptop'
    },
    {
        name: 'Handmade || Bags and purses || Hip bag'
    },
    {
        name: 'Handmade || Bags and purses || Other'
    },
    {
        name: 'Handmade || Music || Case'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Illustration Boards'
    },
    {
        name: 'Arts & Crafts || Art Studio Furniture || Easels'
    },
    {
        name: 'Arts & Crafts || Ink & Calligraphy || Other Ink & Calligraphy'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Paint Syringes'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Spray Lacquers & Sealers'
    },
    {
        name: 'Arts & Crafts || Paint Brushes || Acrylic Brushes'
    },
    {
        name: 'Arts & Crafts || Resin Art Supplies || Resin Fillers'
    },
    {
        name: 'Arts & Crafts || Paint Brushes || Oil Brushes'
    },
    {
        name: 'Arts & Crafts || Resin Art Supplies || Resin Molds'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Stamp Ink Refills'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Other Stamping & Embossing'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Aquarium Water Pumps'
    },
    {
        name: 'Pet Supplies || Bird Supplies || Bird Feed'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Harnesses'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Other Dog Supplies'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Flag Poles'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Wind Spinners'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Grass Shears'
    },
    {
        name: 'Handmade || Weddings || Pillows'
    },
    {
        name: 'Handmade || Holidays || Patriotic'
    },
    {
        name: 'Handmade || Children || Jewelry'
    },
    {
        name: 'Handmade || Geekery || Housewares'
    },
    {
        name: 'Handmade || Paper goods || Origami'
    },
    {
        name: 'Handmade || Paper goods || Papermaking'
    },
    {
        name: 'Handmade || Patterns || Plushie'
    },
    {
        name: 'Handmade || Crochet || Housewares'
    },
    {
        name: 'Handmade || Accessories || Apron'
    },
    {
        name: 'Handmade || Accessories || Patch'
    },
    {
        name: 'Handmade || Accessories || Hair'
    },
    {
        name: 'Handmade || Accessories || Cuff'
    },
    {
        name: 'Handmade || Accessories || Wallet'
    },
    {
        name: 'Handmade || Pets || Other'
    },
    {
        name: 'Handmade || Knitting || Hat'
    },
    {
        name: 'Handmade || Bags and purses || Diaper bag'
    },
    {
        name: 'Handmade || Books and zines || Book'
    },
    {
        name: 'Handmade || Books and zines || Album'
    },
    {
        name: 'Handmade || Clothing || Women'
    },
    {
        name: 'Arts & Crafts || Paint || Acrylic Paint'
    },
    {
        name: 'Arts & Crafts || Paint || Oil Paint'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Acrylic Painting Paper'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Printmaking Paper'
    },
    {
        name: 'Arts & Crafts || Art Studio Furniture || Studio Furniture'
    },
    {
        name: 'Arts & Crafts || Pastels || Other Pastels'
    },
    {
        name: 'Arts & Crafts || Resin Art Supplies || Resin Glitter'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Beds'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Brushes'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Costumes'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Flea & Tick Prevention'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Houses'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Whistles'
    },
    {
        name: 'Handmade || Weddings || Invitations'
    },
    {
        name: 'Handmade || Weddings || Clothing'
    },
    {
        name: 'Handmade || Children || Housewares'
    },
    {
        name: 'Handmade || Children || Baby'
    },
    {
        name: 'Handmade || Children || Bath'
    },
    {
        name: 'Handmade || Children || Toy'
    },
    {
        name: 'Handmade || Needlecraft || Doll'
    },
    {
        name: 'Handmade || Geekery || Accessory'
    },
    {
        name: 'Handmade || Geekery || Computer'
    },
    {
        name: 'Handmade || Paper goods || Notebook'
    },
    {
        name: 'Handmade || Paper goods || Bookmark'
    },
    {
        name: 'Handmade || Paper goods || Other'
    },
    {
        name: 'Handmade || Patterns || Doll clothing'
    },
    {
        name: 'Handmade || Crochet || Hat'
    },
    {
        name: 'Handmade || Furniture || Bench'
    },
    {
        name: 'Handmade || Quilts || Fabric postcard'
    },
    {
        name: 'Handmade || Accessories || Necktie'
    },
    {
        name: 'Handmade || Accessories || Other'
    },
    {
        name: 'Handmade || Knitting || Knitting supplies'
    },
    {
        name: 'Handmade || Books and zines || Other'
    },
    {
        name: 'Arts & Crafts || Drawing Supplies || All Drawing Supplies'
    },
    {
        name: 'Arts & Crafts || Native American Arts & Crafts || All Native American Arts & Crafts'
    },
    {
        name: 'Arts & Crafts || Art Pencils || Watercolor Pencils'
    },
    {
        name: 'Arts & Crafts || Art Pencils || Other Art Pencils'
    },
    {
        name: 'Arts & Crafts || Art Studio Furniture || Other Art Studio Furniture'
    },
    {
        name: 'Arts & Crafts || Ink & Calligraphy || Pigment Powders'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Paint Sponges'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || Gessoes & Primers'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || Other Mediums & Varnishes'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Stamp Handles'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Aquarium Decor'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Grass'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Treats'
    },
    {
        name: 'Pet Supplies || Reptile Supplies || Terrerium Decor'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Birdbaths'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Outdoor Lanterns'
    },
    {
        name: 'Handmade || Children || Furniture'
    },
    {
        name: 'Handmade || Holidays || Day of the dead'
    },
    {
        name: 'Handmade || Weddings || Men'
    },
    {
        name: 'Handmade || Holidays || Birthday'
    },
    {
        name: 'Handmade || Holidays || All Holidays'
    },
    {
        name: 'Handmade || Children || All Children'
    },
    {
        name: 'Handmade || Needlecraft || Embroidery'
    },
    {
        name: 'Handmade || Geekery || Kitsch'
    },
    {
        name: 'Handmade || Patterns || Knitting'
    },
    {
        name: 'Handmade || Geekery || Science'
    },
    {
        name: 'Handmade || Patterns || Accessories'
    },
    {
        name: 'Handmade || Crochet || Accessories'
    },
    {
        name: 'Handmade || Crochet || Bags and purses'
    },
    {
        name: 'Handmade || Furniture || Shelf'
    },
    {
        name: 'Handmade || Furniture || Bed'
    },
    {
        name: 'Handmade || Accessories || Cozy'
    },
    {
        name: 'Handmade || Pets || Portrait'
    },
    {
        name: 'Handmade || Pets || Grooming'
    },
    {
        name: 'Handmade || Jewelry || All Jewelry'
    },
    {
        name: 'Handmade || Clothing || Corset'
    },
    {
        name: 'Handmade || Music || Poster'
    },
    {
        name: 'Arts & Crafts || Handmade Paintings || All Handmade Paintings'
    },
    {
        name: 'Arts & Crafts || Paint || Spray Paint'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Canvas Rolls'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Colored Pencil Paper'
    },
    {
        name: 'Arts & Crafts || Ink & Calligraphy || Calligraphy Ink Sets'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Wax Seal Stamps'
    },
    {
        name: 'Arts & Crafts || Pastels || Pastel Pencils'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || Masking Fluids & Frisket'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Cling Stamps'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Rubber Stamps'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Carriers'
    },
    {
        name: 'Pet Supplies || Cat Supplies || All Cat Supplies'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Cages'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Blankets'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Brushes'
    },
    {
        name: 'Pet Supplies || Reptile Supplies || Reptile Heaters'
    },
    {
        name: 'Pet Supplies || Reptile Supplies || Other Reptile Supplies'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Wheelbarrows'
    },
    {
        name: 'Handmade || Needlecraft || Accessories'
    },
    {
        name: 'Handmade || Geekery || Fantasy'
    },
    {
        name: 'Handmade || Paper goods || Cards'
    },
    {
        name: 'Handmade || Paper goods || Journal'
    },
    {
        name: 'Handmade || Patterns || Crochet'
    },
    {
        name: 'Handmade || Furniture || Bookcase'
    },
    {
        name: 'Handmade || Furniture || Desk'
    },
    {
        name: 'Handmade || Quilts || Bed'
    },
    {
        name: 'Handmade || Quilts || Baby'
    },
    {
        name: 'Handmade || Accessories || Women'
    },
    {
        name: 'Handmade || Accessories || Mirror'
    },
    {
        name: 'Handmade || Accessories || Men'
    },
    {
        name: 'Handmade || Pets || Blanket'
    },
    {
        name: 'Arts & Crafts || Paint || Other Paint'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Paint Canvas'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || Oil Painting Solvents'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || Varnishes & Topcoats'
    },
    {
        name: 'Arts & Crafts || Other Arts & Crafts || All Other Arts & Crafts'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Aquarium Lighting'
    },
    {
        name: 'Pet Supplies || Bird Supplies || Other Bird Supplies'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Muzzles'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Shampoo'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Shoes'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Augers'
    },
    {
        name: 'Handmade || Weddings || Bags and purses'
    },
    {
        name: 'Handmade || Holidays || Christmas'
    },
    {
        name: 'Handmade || Holidays || Hanukkah'
    },
    {
        name: 'Handmade || Geekery || Robot'
    },
    {
        name: 'Handmade || Patterns || Home'
    },
    {
        name: 'Handmade || Weddings || Cards'
    },
    {
        name: 'Handmade || Furniture || Table'
    },
    {
        name: 'Handmade || Quilts || Geometric'
    },
    {
        name: 'Handmade || Accessories || Eyewear'
    },
    {
        name: 'Handmade || Needlecraft || Felted'
    },
    {
        name: 'Handmade || Accessories || Lanyard'
    },
    {
        name: 'Handmade || Accessories || All Accessories'
    },
    {
        name: 'Handmade || Needlecraft || Supplies'
    },
    {
        name: 'Handmade || Pets || Collar'
    },
    {
        name: 'Handmade || Needlecraft || Other'
    },
    {
        name: 'Handmade || Knitting || All Knitting'
    },
    {
        name: 'Handmade || Geekery || Magic'
    },
    {
        name: 'Handmade || Jewelry || Other'
    },
    {
        name: 'Handmade || Candles || All Candles'
    },
    {
        name: 'Handmade || Books and zines || Zine'
    },
    {
        name: 'Arts & Crafts || Paint || Watercolor Paint'
    },
    {
        name: 'Handmade || Patterns || Embroidery'
    },
    {
        name: 'Handmade || Patterns || Other'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Foam Boards'
    },
    {
        name: 'Handmade || Crochet || Jewelry'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Other Art Paper & Surfaces'
    },
    {
        name: 'Handmade || Furniture || Fixture'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || All Art Paper & Surfaces'
    },
    {
        name: 'Arts & Crafts || Ink & Calligraphy || Drawing & Calligraphy Ink'
    },
    {
        name: 'Handmade || Furniture || Other'
    },
    {
        name: 'Handmade || Quilts || Table runner'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Artist Palettes'
    },
    {
        name: 'Handmade || Quilts || Wall hanging'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Brush Cleaners'
    },
    {
        name: 'Handmade || Quilts || Applique'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Palette Knives'
    },
    {
        name: 'Handmade || Accessories || Charm'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || Pouring Mediums'
    },
    {
        name: 'Handmade || Pets || Bowl'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || Watercolor Mediums'
    },
    {
        name: 'Handmade || Pets || Feeding'
    },
    {
        name: 'Arts & Crafts || Resin Art Supplies || Other Resin Art'
    },
    {
        name: 'Handmade || Knitting || Housewares'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Aquarium Gravel & Substrate'
    },
    {
        name: 'Handmade || Knitting || Men'
    },
    {
        name: 'Pet Supplies || Bird Supplies || Bird Litter'
    },
    {
        name: 'Handmade || Bags and purses || Backpack'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Garden Statues'
    },
    {
        name: 'Handmade || Music || Instrument'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Hatchets'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Artist Tiles'
    },
    {
        name: 'Arts & Crafts || Art Pencils || Colored Pencils'
    },
    {
        name: 'Arts & Crafts || Paint Brushes || Specialty Brushes'
    },
    {
        name: 'Arts & Crafts || Resin Art Supplies || Epoxy Resin'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Stamping Collections'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Tank Filters'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Aquarium UV Sterilizers'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Leashes'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Catnip'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Litter Boxes'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Pet Odor & Stain Removal'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Landscape Flood Lights'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Wind Chimes'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Tool Racks'
    },
    {
        name: 'Garden & Outdoor || Outdoor Heating & Cooking || Barbecue Grills'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Post Hole Diggers'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Lawn Rollers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Snow Blowers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Waste & Composting || Compost Accelerators'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Patio Loungers'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Hoses'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Garden Hangers'
    },
    {
        name: 'Garden & Outdoor || Sauna & Hot Tub Equipment || Saunas'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Spray Guns'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Watering Cans'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Other Watering Equipment'
    },
    {
        name: 'Office || School Supplies || Binding Spines'
    },
    {
        name: 'Office || School Supplies || Pencil Sharpeners'
    },
    {
        name: 'Office || School Supplies || Scissors'
    },
    {
        name: 'Office || Ink & Toner || Toner Cartridges'
    },
    {
        name: 'Office || Ink & Toner || Other Ink & Toner'
    },
    {
        name: 'Office || Writing Supplies || Mechanical Pencils'
    },
    {
        name: 'Office || Office Electronics || Shredders'
    },
    {
        name: 'Office || Office Electronics || All Office Electronics'
    },
    {
        name: 'Office || Shipping Supplies || Address Labels'
    },
    {
        name: 'Office || Shipping Supplies || Flat Mailers'
    },
    {
        name: 'Office || Folders & Filing || Other Folders & Filing'
    },
    {
        name: 'Office || Markers || Dry Erase Markers'
    },
    {
        name: 'Tools || Air Tools || Air Polishers'
    },
    {
        name: 'Tools || Electrical Tools || Connector Tool Kits'
    },
    {
        name: 'Tools || Hammers || Sledgehammers'
    },
    {
        name: 'Tools || Hand Tools || Chisels'
    },
    {
        name: 'Tools || Measuring & Layout || Other Measuring & Layout'
    },
    {
        name: 'Tools || Pliers || Needle Nose Pliers'
    },
    {
        name: 'Tools || Power Tools || Hammer Drills'
    },
    {
        name: 'Tools || Power Tools || Multi-Tools'
    },
    {
        name: 'Tools || Power Tools || Nail Guns'
    },
    {
        name: 'Tools || Power Tools || Other Power Tools'
    },
    {
        name: 'Tools || Safety Gear || Disposable Coveralls'
    },
    {
        name: 'Tools || Safety Gear || Ear Muffs'
    },
    {
        name: 'Tools || Safety Gear || Emergency Response'
    },
    {
        name: 'Tools || Saw Accessories || Reciprocating Saw Blades'
    },
    {
        name: 'Tools || Welding Equipment || Welding Hoses'
    },
    {
        name: 'Tools || Wrenches || Wrench Sets'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Pruning Snips'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Hedge Shears'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Lawn Aerators'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Patio Umbrellas'
    },
    {
        name: 'Garden & Outdoor || Outdoor Waste & Composting || Other Composting & Yard Waste'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Cleaners'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Water Hoses'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || All Watering Equipment'
    },
    {
        name: 'Office || Shipping Supplies || Packing Tape'
    },
    {
        name: 'Office || Shipping Supplies || Window Envelopes'
    },
    {
        name: 'Office || Tapes & Adhesives || Duct Tape'
    },
    {
        name: 'Tools || Cutting Tools || Glass Cutters'
    },
    {
        name: 'Tools || Cutting Tools || Miter Boxes'
    },
    {
        name: 'Tools || Fastening Tools || Clamps'
    },
    {
        name: 'Tools || Hammers || Ball-Peen Hammers'
    },
    {
        name: 'Tools || Hand Tools || Caulking & Sealing Guns'
    },
    {
        name: 'Tools || Measuring & Layout || Range Meters'
    },
    {
        name: 'Tools || Pliers || Slip Joint Pliers'
    },
    {
        name: 'Tools || Pliers || Tongue & Groove Pliers'
    },
    {
        name: 'Tools || Pliers || All Pliers'
    },
    {
        name: 'Tools || Power Tools || Rotary Drills'
    },
    {
        name: 'Tools || Safety Gear || All Safety Gear'
    },
    {
        name: 'Tools || Saw Accessories || All Saw Accessories'
    },
    {
        name: 'Tools || Screwdrivers || Screwdriver Bits'
    },
    {
        name: 'Tools || Tie Downs || Other Tie Downs'
    },
    {
        name: 'Tools || Welding Equipment || Welding Machines'
    },
    {
        name: 'Tools || Welding Equipment || Welding Tips'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Gazebos'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Paint Droppers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Heating & Cooking || Smokers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Chippers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Waste & Composting || Garden Compost Bins'
    },
    {
        name: 'Garden & Outdoor || Outdoor Waste & Composting || Garden Waste Bins'
    },
    {
        name: 'Office || School Supplies || Binders'
    },
    {
        name: 'Office || Paper || Construction Paper'
    },
    {
        name: 'Office || Writing Supplies || All Writing Supplies'
    },
    {
        name: 'Office || Shipping Supplies || Air Pillows & Inflatable Packaging'
    },
    {
        name: 'Office || Shipping Supplies || Other Shipping Supplies'
    },
    {
        name: 'Office || Shipping Supplies || All Shipping Supplies'
    },
    {
        name: 'Office || Notebooks & Writing Pads || Writing Pads'
    },
    {
        name: 'Office || Markers || Marker Refills'
    },
    {
        name: 'Office || Pens || Paintpens'
    },
    {
        name: 'Tools || Air Tools || Air Grinders'
    },
    {
        name: 'Tools || Air Tools || Air Nailer'
    },
    {
        name: 'Tools || Cutting Tools || All Cutting Tools'
    },
    {
        name: 'Tools || Electrical Tools || Other Electrical Tools'
    },
    {
        name: 'Tools || Electrical Tools || All Electrical Tools'
    },
    {
        name: 'Tools || Pliers || Cutting Pliers'
    },
    {
        name: 'Tools || Power Tools || Sanders'
    },
    {
        name: 'Tools || Safety Gear || Hard Hats'
    },
    {
        name: 'Tools || Saw Accessories || Bandsaw Blades'
    },
    {
        name: 'Tools || Tie Downs || Pulleys'
    },
    {
        name: 'Books || Nonfiction Books || Craft Books'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Other Garden Hand Tools & Equipment'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Arbors & Arches'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Hedge Trimmers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Tillers'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Patio Tables'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Plant Labels'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Fruit Plants'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Nets'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Thermometers'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Other Pool Equipment'
    },
    {
        name: 'Garden & Outdoor || Sauna & Hot Tub Equipment || Other Sauna & Hot Tub Equipment'
    },
    {
        name: 'Office || School Supplies || Glue Sticks'
    },
    {
        name: 'Office || School Supplies || All School Supplies'
    },
    {
        name: 'Garden & Outdoor || Sauna & Hot Tub Equipment || Sauna Heaters'
    },
    {
        name: 'Office || Pens || Fineliner Pens'
    },
    {
        name: 'Tools || Air Tools || Air Sanders'
    },
    {
        name: 'Tools || Hammers || Other Hammers'
    },
    {
        name: 'Tools || Pliers || Other Pliers'
    },
    {
        name: 'Tools || Safety Gear || First Aid Kits'
    },
    {
        name: 'Handmade || Crochet || Doll'
    },
    {
        name: 'Tools || Screwdrivers || All Screwdrivers'
    },
    {
        name: 'Books || Fiction Books || Literary Fiction Books'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Shredders'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Manual Edgers'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Outdoor Furniture Covers'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Mulch'
    },
    {
        name: 'Garden & Outdoor || Live Plants || All Live Plants'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Covers & Reels'
    },
    {
        name: 'Office || Shipping Supplies || Invitiation Envelopes'
    },
    {
        name: 'Office || Shipping Supplies || Shipping Boxes'
    },
    {
        name: 'Office || Folders & Filing || All Folders & Filing'
    },
    {
        name: 'Office || Tapes & Adhesives || Painters Tape'
    },
    {
        name: 'Office || Pens || Retractable Pens'
    },
    {
        name: 'Tools || Air Tools || Other Air Tools'
    },
    {
        name: 'Tools || Chains & Ropes || Ropes'
    },
    {
        name: 'Tools || Hammers || Mallets'
    },
    {
        name: 'Tools || Measuring & Layout || All Measuring & Layout'
    },
    {
        name: 'Tools || Safety Gear || Bump Caps'
    },
    {
        name: 'Tools || Safety Gear || Disposable Gloves'
    },
    {
        name: 'Tools || Saws || Band Saws'
    },
    {
        name: 'Tools || Saw Accessories || Diamond Blades'
    },
    {
        name: 'Tools || Screwdrivers || Multi-bit Screwdrivers'
    },
    {
        name: 'Tools || Tie Downs || Cargo Bars'
    },
    {
        name: 'Tools || Tie Downs || Cargo Nets'
    },
    {
        name: 'Tools || Wrenches || Adjustable Wrenches'
    },
    {
        name: 'Books || Fiction Books || Romance Fiction Books'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || All Garden Structures & Shades'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Patio Umbrella Stands'
    },
    {
        name: 'Garden & Outdoor || Outdoor Heating & Cooking || Other Heating & Cooking'
    },
    {
        name: 'Garden & Outdoor || Outdoor Heating & Cooking || Charcoal'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Leaf Blowers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Mulchers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Waste & Composting || Compost Aerators'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Other Planting Accessories'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Slides'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Hanging Plants'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Vacuums'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Indoor Plants'
    },
    {
        name: 'Office || School Supplies || Highlighters'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Rain Barrels'
    },
    {
        name: 'Office || Writing Supplies || Other Writing Supplies'
    },
    {
        name: 'Office || School Supplies || Binding Covers'
    },
    {
        name: 'Office || Desk Organization || Business Card Holders'
    },
    {
        name: 'Office || School Supplies || Index Cards'
    },
    {
        name: 'Office || Desk Organization || Desk Trays'
    },
    {
        name: 'Office || Ink & Toner || Ink Ribbons'
    },
    {
        name: 'Office || Folders & Filing || Filing Folders'
    },
    {
        name: 'Office || Shipping Supplies || Bubble Mailers'
    },
    {
        name: 'Office || Markers || Washable Markers'
    },
    {
        name: 'Office || Shipping Supplies || Cushioning Sheets'
    },
    {
        name: 'Office || Markers || Paint Markers'
    },
    {
        name: 'Office || Tapes & Adhesives || Mounting Tape'
    },
    {
        name: 'Office || Pens || Ballpoint Pens'
    },
    {
        name: 'Office || Markers || All Markers'
    },
    {
        name: 'Tools || Chains & Ropes || Chains'
    },
    {
        name: 'Office || Pens || Rollerball Pens'
    },
    {
        name: 'Tools || Chains & Ropes || Wire Ropes'
    },
    {
        name: 'Office || Pens || Pen Refills'
    },
    {
        name: 'Tools || Cutting Tools || Jigs'
    },
    {
        name: 'Office || Pens || Other Pens'
    },
    {
        name: 'Tools || Fastening Tools || Rivet Tools'
    },
    {
        name: 'Tools || Air Tools || Air Pressure Regulators'
    },
    {
        name: 'Tools || Hammers || Claw Hammers'
    },
    {
        name: 'Tools || Cutting Tools || Bolt Cutters'
    },
    {
        name: 'Tools || Hand Tools || Drill Bits'
    },
    {
        name: 'Tools || Electrical Tools || Electrical Tool Kits'
    },
    {
        name: 'Tools || Hand Tools || Hand Crimpers'
    },
    {
        name: 'Tools || Electrical Tools || Electrical Tweezers'
    },
    {
        name: 'Tools || Power Tools || Buffers & Polishers'
    },
    {
        name: 'Tools || Electrical Tools || Soldering Irons'
    },
    {
        name: 'Tools || Safety Gear || Back Support Belts'
    },
    {
        name: 'Tools || Electrical Tools || Wire Stripping Machines'
    },
    {
        name: 'Tools || Saw Accessories || Circular Saw Blades'
    },
    {
        name: 'Tools || Hand Tools || Adapters & Extenders'
    },
    {
        name: 'Tools || Tools Storage || Tool Bags'
    },
    {
        name: 'Tools || Measuring & Layout || Calipers'
    },
    {
        name: 'Tools || Wrenches || Torque Wrenches'
    },
    {
        name: 'Tools || Power Tools || Impact Drivers'
    },
    {
        name: 'Books || Magazines || Professional & Trade Magazines'
    },
    {
        name: 'Tools || Power Tools || Power Drills'
    },
    {
        name: 'Books || Fiction Books || Thriller Fiction Books'
    },
    {
        name: 'Tools || Power Tools || Right Angle Drills'
    },
    {
        name: 'Tools || Safety Gear || Safety Vests'
    },
    {
        name: 'Tools || Saws || Miter Saws'
    },
    {
        name: 'Tools || Saws || Other Saws'
    },
    {
        name: 'Tools || Tools Storage || Other Tools Storage'
    },
    {
        name: 'Tools || Welding Equipment || Welding Clamps'
    },
    {
        name: 'Tools || Wrenches || Combination Wrenches'
    },
    {
        name: 'Books || Nonfiction Books || Business & Finance Books'
    },
    {
        name: 'Books || Nonfiction Books || Politics Books'
    },
    {
        name: 'Books || Nonfiction Books || Biographies & Memoirs'
    },
    {
        name: 'Books || Nonfiction Books || Photography Books'
    },
    {
        name: 'Books || Nonfiction Books || Other Nonfiction Books'
    },
    {
        name: 'Books || Other Books || All Other Books'
    },
    {
        name: 'Other || Daily & travel items || Sports Shaker Bottles'
    },
    {
        name: 'Other || Office Supplies || Desk Calendars'
    },
    {
        name: 'Other || Office Supplies || Planners'
    },
    {
        name: 'Other || Office Supplies || Other Office Supplies'
    },
    {
        name: 'Other || Travel & Luggage || Other Travel & Luggage'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Additives'
    },
    {
        name: 'Other || Automotive || Automotive Tires'
    },
    {
        name: 'Books || Nonfiction Books || Art Books'
    },
    {
        name: 'Other || Daily & travel items || Health care'
    },
    {
        name: 'Other || Office Supplies || Basic supplies'
    },
    {
        name: 'Books || Reference Books || Dictionaries'
    },
    {
        name: 'Other || Office Supplies || Correction Fluid'
    },
    {
        name: 'Other || Office Supplies || All Office Supplies'
    },
    {
        name: 'Other || Musical instruments || Drums'
    },
    {
        name: 'Other || Travel & Luggage || Suitcases'
    },
    {
        name: 'Other || Travel & Luggage || Travel Bags'
    },
    {
        name: 'Books || Reference Books || Cookbooks'
    },
    {
        name: 'Books || Reference Books || Educational & Instructional Books'
    },
    {
        name: 'Books || Reference Books || Encyclopedias'
    },
    {
        name: 'Other || Daily & travel items || Medical supplies & equipment'
    },
    {
        name: 'Other || Daily & travel items || All Daily & travel items'
    },
    {
        name: 'Other || Office Supplies || Paper Punchers'
    },
    {
        name: 'Other || Musical instruments || Keyboards'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Lubricants'
    },
    {
        name: 'Other || Office Supplies || Furniture'
    },
    {
        name: 'Other || Office Supplies || Tab Dividers'
    },
    {
        name: 'Other || Musical instruments || Bass guitars'
    },
    {
        name: 'Other || Musical instruments || Brass instruments'
    },
    {
        name: 'Other || Musical instruments || Wind & woodwind instruments'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Power Steering Fluids'
    },
    {
        name: 'Other || Automotive || Motorcycle & powersports'
    },
    {
        name: 'Other || Automotive || Car electronics & accessories'
    },
    {
        name: 'Other || Automotive || Exterior accessories'
    },
    {
        name: 'Other || Automotive || Performance parts & accessories'
    },
    {
        name: 'Other || Automotive || Automotive Tire & Wheel Accessories'
    },
    {
        name: 'Other || Automotive || Automotive enthusiast merchandise'
    },
    {
        name: 'Other || Office Supplies || Whiteboards'
    },
    {
        name: 'Other || Office Supplies || Rubber Bands'
    },
    {
        name: 'Garden & Outdoor || Garden Protective Gear || Gardening Gloves'
    },
    {
        name: 'Other || Office Supplies || Staple Removers'
    },
    {
        name: 'Other || Musical instruments || Percussion Instruments'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Antifreezes & Coolants'
    },
    {
        name: 'Books || Reference Books || Textbooks'
    },
    {
        name: 'Other || Office Supplies || Staples'
    },
    {
        name: 'Other || Musical instruments || Band & orchestra'
    },
    {
        name: 'Other || Musical instruments || Live sound & stage'
    },
    {
        name: 'Other || Daily & travel items || Household supplies'
    },
    {
        name: 'Other || Daily & travel items || Personal care'
    },
    {
        name: 'Other || Daily & travel items || Stationery'
    },
    {
        name: 'Other || Automotive || Replacement parts'
    },
    {
        name: 'Other || Automotive || RV parts & accessories'
    },
    {
        name: 'Other || Automotive || Automotive Lighting Accessories'
    },
    {
        name: 'Other || Travel & Luggage || Luggage Straps'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Windshield Fluids'
    },
    {
        name: 'Other || Automotive Oils & Fluids || All Automotive Oils & Fluids'
    },
    {
        name: 'Books || Reference Books || All Reference Books'
    },
    {
        name: 'Other || Office Supplies || Tape Dispensers'
    },
    {
        name: 'Other || Daily & travel items || Other'
    },
    {
        name: 'Books || Reference Books || Thesauruses'
    },
    {
        name: 'Books || Reference Books || Other Reference Books'
    },
    {
        name: 'Books || Nonfiction Books || All Nonfiction Books'
    },
    {
        name: 'Other || Office Supplies || Wall Hooks'
    },
    {
        name: 'Other || Musical instruments || Stringed instruments'
    },
    {
        name: 'Other || Musical instruments || Musical Instrument Amplifiers'
    },
    {
        name: 'Other || Travel & Luggage || Carry-On Luggage'
    },
    {
        name: 'Other || Travel & Luggage || Luggage Tags'
    },
    {
        name: 'Other || Automotive || Automotive Lights'
    },
    {
        name: 'Other || Office Supplies || Clipboards'
    },
    {
        name: 'Other || Musical instruments || Instrument accessories'
    },
    {
        name: 'Other || Musical instruments || Music Effects'
    },
    {
        name: 'Other || Musical instruments || Other'
    },
    {
        name: 'Other || Travel & Luggage || Luggage Carts'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Refrigerants'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Transmission Fluids'
    },
    {
        name: 'Other || Automotive || Paint, body & trim'
    },
    {
        name: 'Other || Automotive || Tools & equipment'
    },
    {
        name: 'Other || Office Supplies || Push Pins'
    },
    {
        name: 'Other || Office Supplies || Scotch Tape'
    },
    {
        name: 'Other || Travel & Luggage || Luggage Scales'
    },
    {
        name: 'Other || Other || All Other'
    },
    {
        name: 'Other || Office Supplies || Binder Clips'
    },
    {
        name: 'Other || Office Supplies || Dry Erase Calendar Boards'
    },
    {
        name: 'Other || Office Supplies || Wall Clips'
    },
    {
        name: 'Other || Musical instruments || Guitars'
    },
    {
        name: 'Tools || Screwdrivers || Other Screwdrivers'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Brake Fluids'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Cleaners'
    },
    {
        name: 'Other || Daily & travel items || Baby & child care'
    },
    {
        name: 'Other || Automotive || Car care'
    },
    {
        name: 'Other || Office Supplies || Paper Clips'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Motor Oils'
    },
    {
        name: 'Books || Reference Books || Health & Fitness Books'
    },
    {
        name: 'Other || Automotive || Automotive Wheels & Rims'
    },
    {
        name: 'Other || Automotive || All Automotive'
    },
    {
        name: 'Other || Office Supplies || Presentation'
    },
    {
        name: 'Other || Office Supplies || Wall Calendars'
    },
    {
        name: "Books || Nonfiction Books || Nonfiction Children's Books"
    },
    {
        name: 'Other || Automotive || Interior accessories'
    },
    {
        name: 'Other || Automotive || Other'
    },
    {
        name: 'Other || Office Supplies || Post-it Sticky Notes'
    },
    {
        name: 'Other || Office Supplies || Sheet Protectors'
    },
    {
        name: 'Other || Office Supplies || Staplers'
    },
    {
        name: 'Other || Musical instruments || All Musical instruments'
    },
    {
        name: 'Books || Reference Books || Self-Help Books'
    },
    {
        name: 'Other || Office Supplies || Paper Cutters'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Other Automotive Fluids'
    },
    {
        name: 'Electronics || Cell phones & accessories || Cell phones & smartphones'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Card Games'
    },
    {
        name: 'Electronics || Computers & Laptops || Computer Drives'
    },
    {
        name: 'Home || Home decor || Clocks'
    },
    {
        name: 'Women || Dresses || All Dresses'
    },
    {
        name: 'Women || Tops & blouses || All Tops & blouses'
    },
    {
        name: 'Women || Sweaters || All Sweaters'
    },
    {
        name: 'Women || Jeans || All Jeans'
    },
    {
        name: 'Women || Pants || All Pants'
    },
    {
        name: 'Women || Skirts || All Skirts'
    },
    {
        name: 'Women || Coats & jackets || All Coats & jackets'
    },
    {
        name: 'Women || Suits & blazers || All Suits & blazers'
    },
    {
        name: 'Women || Athletic apparel || All Athletic apparel'
    },
    {
        name: 'Women || Swimwear || All Swimwear'
    },
    {
        name: "Women || Women's handbags || All Women's handbags"
    },
    {
        name: "Women || Women's accessories || All Women's accessories"
    },
    {
        name: 'Women || Jewelry || All Jewelry'
    },
    {
        name: 'Women || Maternity || All Maternity'
    },
    {
        name: 'Women || Shoes || All Shoes'
    },
    {
        name: 'Women || Underwear || All Underwear'
    },
    {
        name: 'Women || Shorts || All Shorts'
    },
    {
        name: 'Women || Sleepwear & robes || All Sleepwear & robes'
    },
    {
        name: 'Women || Kimono / Yukata || Hair accessories'
    },
    {
        name: 'Women || Kimono / Yukata || Obi (Sash)'
    },
    {
        name: 'Women || Kimono / Yukata || Kimono Accessories'
    },
    {
        name: 'Women || Kimono / Yukata || Haori (Coat)'
    },
    {
        name: 'Women || Kimono / Yukata || Sandals'
    },
    {
        name: 'Women || Kimono / Yukata || Kimono'
    },
    {
        name: 'Women || Kimono / Yukata || Underwear / Dressing Accessories'
    },
    {
        name: 'Women || Kimono / Yukata || Yukata'
    },
    {
        name: 'Women || Kimono / Yukata || Hakama (Pants)'
    },
    {
        name: 'Women || Kimono / Yukata || Other'
    },
    {
        name: 'Women || Kimono / Yukata || All Kimono / Yukata'
    },
    {
        name: 'Women || School Uniform || Sailor Uniform'
    },
    {
        name: 'Women || School Uniform || Blazer'
    },
    {
        name: 'Women || School Uniform || Blouse'
    },
    {
        name: 'Women || School Uniform || Vest / Sweater'
    },
    {
        name: 'Women || School Uniform || Skirt'
    },
    {
        name: 'Women || School Uniform || Accessories'
    },
    {
        name: 'Women || School Uniform || Other'
    },
    {
        name: 'Women || School Uniform || All School Uniform'
    },
    {
        name: 'Women || Other || All Other'
    },
    {
        name: 'Men || Tops || All Tops'
    },
    {
        name: 'Men || Sweats & hoodies || All Sweats & hoodies'
    },
    {
        name: 'Men || Sweaters || All Sweaters'
    },
    {
        name: 'Men || Jeans || All Jeans'
    },
    {
        name: 'Men || Pants || All Pants'
    },
    {
        name: 'Men || Coats & jackets || All Coats & jackets'
    },
    {
        name: 'Men || Shorts || All Shorts'
    },
    {
        name: 'Men || Blazers & sport coats || All Blazers & sport coats'
    },
    {
        name: 'Men || Suits || All Suits'
    },
    {
        name: 'Men || Athletic apparel || All Athletic apparel'
    },
    {
        name: 'Men || Swimwear || All Swimwear'
    },
    {
        name: "Men || Men's accessories || All Men's accessories"
    },
    {
        name: 'Men || Shoes || All Shoes'
    },
    {
        name: 'Men || Jewelry || All Jewelry'
    },
    {
        name: 'Men || Kimono / Yukata || Obi (Sash)'
    },
    {
        name: 'Men || Kimono / Yukata || Happi (Coat)'
    },
    {
        name: 'Men || Kimono / Yukata || Kimono Accessories'
    },
    {
        name: 'Men || Kimono / Yukata || Hakama (Pants)'
    },
    {
        name: 'Men || Kimono / Yukata || Haori (Coat)'
    },
    {
        name: 'Men || Kimono / Yukata || Sandals'
    },
    {
        name: 'Men || Kimono / Yukata || Kimono'
    },
    {
        name: 'Men || Kimono / Yukata || Underwear / Dressing Accessories'
    },
    {
        name: 'Men || Kimono / Yukata || Yukata'
    },
    {
        name: 'Men || Kimono / Yukata || Other'
    },
    {
        name: 'Men || Kimono / Yukata || All Kimono / Yukata'
    },
    {
        name: 'Men || School Uniform || Blazer'
    },
    {
        name: 'Men || School Uniform || Pants'
    },
    {
        name: 'Men || School Uniform || Coat'
    },
    {
        name: 'Men || School Uniform || Sweater'
    },
    {
        name: 'Men || School Uniform || Shirt'
    },
    {
        name: 'Men || School Uniform || Other'
    },
    {
        name: 'Men || School Uniform || All School Uniform'
    },
    {
        name: 'Men || Other || All Other'
    },
    {
        name: 'Electronics || Cameras & photography || All Cameras & photography'
    },
    {
        name: 'Electronics || Computers & Laptops || All Computers & Laptops'
    },
    {
        name: 'Electronics || Cell phones & accessories || All Cell phones & accessories'
    },
    {
        name: 'Electronics || TV & Video || All TV & Video'
    },
    {
        name: 'Electronics || Video games & consoles || All Video games & consoles'
    },
    {
        name: 'Electronics || Car audio, video & gps || All Car audio, video & gps'
    },
    {
        name: 'Electronics || Media || All Media'
    },
    {
        name: 'Electronics || Computer Components & Parts || All Computer Components & Parts'
    },
    {
        name: 'Electronics || Video Game Merchandise || All Video Game Merchandise'
    },
    {
        name: 'Electronics || Wearables || All Wearables'
    },
    {
        name: 'Electronics || Smart Home & Security || All Smart Home & Security'
    },
    {
        name: 'Electronics || Home Audio || All Home Audio'
    },
    {
        name: 'Electronics || Headphones & MP3 Players || All Headphones & MP3 Players'
    },
    {
        name: 'Electronics || Tablets & E-readers || All Tablets & E-readers'
    },
    {
        name: 'Electronics || Drones || All Drones'
    },
    {
        name: 'Electronics || Virtual Reality || All Virtual Reality'
    },
    {
        name: 'Electronics || Other || All Other'
    },
    {
        name: 'Toys & Collectibles || Action Figures & Accessories || All Action Figures & Accessories'
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || All Dolls & Accessories'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || All Collectibles & Hobbies'
    },
    {
        name: 'Toys & Collectibles || Building Toys || All Building Toys'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || All Electronics for Kids'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || All Games & Puzzles'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || All Sports & Outdoor Play'
    },
    {
        name: 'Toys & Collectibles || Remote Control Toys & Vehicles || All Remote Control Toys & Vehicles'
    },
    {
        name: 'Toys & Collectibles || Stuffed Animals & Plush || All Stuffed Animals & Plush'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || All Arts & Crafts'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || All Baby & Toddler Toys'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || All Learning & Education Toys'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || All Dress Up & Pretend Play'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || All Novelty & Gag Toys'
    },
    {
        name: 'Toys & Collectibles || Trading Cards || All Trading Cards'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || All Vintage & Antique Toys'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || All Vintage & Antique Collectibles'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || All Handmade Toys'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || All Handmade Dolls & Miniatures'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || All Sports Trading Cards'
    },
    {
        name: 'Toys & Collectibles || Other || All Other'
    },
    {
        name: "Home || Kids' home store || All Kids' home store"
    },
    {
        name: 'Home || Kitchen Bakeware || All Kitchen Bakeware'
    },
    {
        name: 'Home || Kitchen Coffee & Espresso Makers || All Kitchen Coffee & Espresso Makers'
    },
    {
        name: 'Home || Kitchen Cookware || All Kitchen Cookware'
    },
    {
        name: 'Other || Automotive Oils & Fluids || Automotive Greases'
    },
    {
        name: 'Home || Kitchen Serveware || All Kitchen Serveware'
    },
    {
        name: 'Home || Kitchen & Table Linens || All Kitchen & Table Linens'
    },
    {
        name: 'Home || Kitchen Utensils || All Kitchen Utensils'
    },
    {
        name: 'Home || Kitchen Small Appliances || All Kitchen Small Appliances'
    },
    {
        name: 'Home || Kitchen Storage || All Kitchen Storage'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || All Kitchen Bar & Wine Accessories'
    },
    {
        name: 'Home || Bedroom Furniture || All Bedroom Furniture'
    },
    {
        name: 'Home || Kitchen Furniture || All Kitchen Furniture'
    },
    {
        name: 'Home || Home Office Furniture || All Home Office Furniture'
    },
    {
        name: 'Home || Living Room Furniture || All Living Room Furniture'
    },
    {
        name: 'Home || Bathroom Furniture || All Bathroom Furniture'
    },
    {
        name: 'Home || Furniture Hardware & Parts || All Furniture Hardware & Parts'
    },
    {
        name: 'Home || Kitchen Cutlery || All Kitchen Cutlery'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || All Kitchen Baking & Cake Accessories'
    },
    {
        name: 'Home || Kitchen Barware || All Kitchen Barware'
    },
    {
        name: 'Home || Kitchen Drinkware || All Kitchen Drinkware'
    },
    {
        name: 'Home || Kitchen Flatware || All Kitchen Flatware'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || All Kitchen Gadgets & Tools'
    },
    {
        name: 'Home || Kitchen Tea & Accessories || All Kitchen Tea & Accessories'
    },
    {
        name: 'Home || Kitchen & dining || All Kitchen & dining'
    },
    {
        name: 'Home || Other Furniture || All Other Furniture'
    },
    {
        name: 'Home || Bedding || All Bedding'
    },
    {
        name: 'Home || Bath || All Bath'
    },
    {
        name: 'Home || Furniture || All Furniture'
    },
    {
        name: 'Home || Home decor || All Home decor'
    },
    {
        name: 'Home || Artwork || All Artwork'
    },
    {
        name: 'Home || Seasonal decor || All Seasonal decor'
    },
    {
        name: 'Home || Home appliances || All Home appliances'
    },
    {
        name: 'Home || Party Supplies || All Party Supplies'
    },
    {
        name: 'Home || Storage & organization || All Storage & organization'
    },
    {
        name: 'Home || Cleaning supplies || All Cleaning supplies'
    },
    {
        name: 'Home || Other || All Other'
    },
    {
        name: 'Beauty || Bath & body || All Bath & body'
    },
    {
        name: 'Beauty || Fragrance || All Fragrance'
    },
    {
        name: 'Beauty || Hair care || All Hair care'
    },
    {
        name: 'Beauty || Makeup || All Makeup'
    },
    {
        name: 'Beauty || Skin care || All Skin care'
    },
    {
        name: 'Beauty || Tools & accessories || All Tools & accessories'
    },
    {
        name: 'Beauty || Other || All Other'
    },
    {
        name: 'Kids || Girls accessories || All Girls accessories'
    },
    {
        name: 'Kids || Girls bottoms || All Girls bottoms'
    },
    {
        name: 'Kids || Girls coats & jackets || All Girls coats & jackets'
    },
    {
        name: 'Kids || Girls dresses || All Girls dresses'
    },
    {
        name: 'Kids || Girls one-pieces || All Girls one-pieces'
    },
    {
        name: 'Kids || Girls shoes || All Girls shoes'
    },
    {
        name: 'Kids || Girls swimwear || All Girls swimwear'
    },
    {
        name: 'Kids || Girls tops & t-shirts || All Girls tops & t-shirts'
    },
    {
        name: 'Other || Travel & Luggage || All Travel & Luggage'
    },
    {
        name: 'Kids || Boys accessories || All Boys accessories'
    },
    {
        name: 'Kids || Boys bottoms || All Boys bottoms'
    },
    {
        name: 'Kids || Boys coats & jackets || All Boys coats & jackets'
    },
    {
        name: 'Kids || Boys one-pieces || All Boys one-pieces'
    },
    {
        name: 'Kids || Boys swimwear || All Boys swimwear'
    },
    {
        name: 'Kids || Boys shoes || All Boys shoes'
    },
    {
        name: 'Kids || Boys tops & t-shirts || All Boys tops & t-shirts'
    },
    {
        name: 'Kids || Boys other || All Boys other'
    },
    {
        name: 'Kids || Bathing & skin care || All Bathing & skin care'
    },
    {
        name: 'Kids || Car seats & accessories || All Car seats & accessories'
    },
    {
        name: 'Kids || Diapering || All Diapering'
    },
    {
        name: 'Kids || Feeding || All Feeding'
    },
    {
        name: 'Kids || Gear || All Gear'
    },
    {
        name: 'Kids || Health & baby care || All Health & baby care'
    },
    {
        name: 'Kids || Nursery || All Nursery'
    },
    {
        name: 'Kids || Potty training || All Potty training'
    },
    {
        name: 'Kids || Pregnancy & maternity || All Pregnancy & maternity'
    },
    {
        name: 'Kids || Safety || All Safety'
    },
    {
        name: 'Kids || Strollers || All Strollers'
    },
    {
        name: 'Kids || Other || All Other'
    },
    {
        name: 'Vintage & collectibles || Jewelry || All Jewelry'
    },
    {
        name: 'Vintage & collectibles || Clothing || All Clothing'
    },
    {
        name: 'Vintage & collectibles || Home decor || All Home decor'
    },
    {
        name: 'Vintage & collectibles || Accessories || All Accessories'
    },
    {
        name: 'Vintage & collectibles || Housewares || All Housewares'
    },
    {
        name: 'Vintage & collectibles || Supplies || All Supplies'
    },
    {
        name: 'Vintage & collectibles || Antique || All Antique'
    },
    {
        name: 'Vintage & collectibles || Paper ephemera || All Paper ephemera'
    },
    {
        name: 'Vintage & collectibles || Serving || All Serving'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || All Bags and purses'
    },
    {
        name: 'Vintage & collectibles || Electronics || All Electronics'
    },
    {
        name: 'Vintage & collectibles || Furniture || All Furniture'
    },
    {
        name: 'Vintage & collectibles || Collectible Coins || All Collectible Coins'
    },
    {
        name: 'Vintage & collectibles || Collectible Paper Money || All Collectible Paper Money'
    },
    {
        name: 'Vintage & collectibles || Collectible Postage || All Collectible Postage'
    },
    {
        name: 'Vintage & collectibles || Other || All Other'
    },
    {
        name: 'Sports & outdoors || Team sports || All Team sports'
    },
    {
        name: 'Sports & outdoors || Exercise || All Exercise'
    },
    {
        name: 'Sports & outdoors || Footwear || All Footwear'
    },
    {
        name: 'Sports & outdoors || Apparel || All Apparel'
    },
    {
        name: 'Sports & outdoors || Golf || All Golf'
    },
    {
        name: 'Sports & outdoors || Outdoors || All Outdoors'
    },
    {
        name: 'Sports & outdoors || Fan shop || All Fan shop'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || All Basketball Equipment'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || All Fishing Gear'
    },
    {
        name: 'Sports & outdoors || Snowboarding Gear || All Snowboarding Gear'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || All Skateboard Gear'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || All Baseball Equipment'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || All Yoga Equipment'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || All Camping Equipment'
    },
    {
        name: 'Sports & outdoors || Ski Gear || All Ski Gear'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || All Cycling Equipment'
    },
    {
        name: 'Sports & outdoors || Other || All Other'
    },
    {
        name: 'Handmade || Housewares || All Housewares'
    },
    {
        name: 'Handmade || Woodworking || All Woodworking'
    },
    {
        name: 'Handmade || Ceramics and pottery || All Ceramics and pottery'
    },
    {
        name: 'Handmade || Glass || All Glass'
    },
    {
        name: 'Handmade || Weddings || All Weddings'
    },
    {
        name: 'Handmade || Holidays || All Holidays'
    },
    {
        name: 'Handmade || Children || All Children'
    },
    {
        name: 'Handmade || Needlecraft || All Needlecraft'
    },
    {
        name: 'Handmade || Geekery || All Geekery'
    },
    {
        name: 'Handmade || Paper goods || All Paper goods'
    },
    {
        name: 'Handmade || Candles || All Candles'
    },
    {
        name: 'Handmade || Patterns || All Patterns'
    },
    {
        name: 'Handmade || Crochet || All Crochet'
    },
    {
        name: 'Handmade || Furniture || All Furniture'
    },
    {
        name: 'Handmade || Quilts || All Quilts'
    },
    {
        name: 'Handmade || Accessories || All Accessories'
    },
    {
        name: 'Handmade || Pets || All Pets'
    },
    {
        name: 'Handmade || Bags and purses || All Bags and purses'
    },
    {
        name: 'Handmade || Knitting || All Knitting'
    },
    {
        name: 'Handmade || Jewelry || All Jewelry'
    },
    {
        name: 'Handmade || Books and zines || All Books and zines'
    },
    {
        name: 'Handmade || Clothing || All Clothing'
    },
    {
        name: 'Handmade || Music || All Music'
    },
    {
        name: 'Handmade || Other || All Other'
    },
    {
        name: 'Arts & Crafts || Photography || All Photography'
    },
    {
        name: 'Arts & Crafts || Handmade Paintings || All Handmade Paintings'
    },
    {
        name: 'Arts & Crafts || Mixed media || All Mixed media'
    },
    {
        name: 'Arts & Crafts || Sculptures || All Sculptures'
    },
    {
        name: 'Arts & Crafts || Illustration || All Illustration'
    },
    {
        name: 'Arts & Crafts || Collages || All Collages'
    },
    {
        name: 'Arts & Crafts || Drawing Supplies || All Drawing Supplies'
    },
    {
        name: 'Arts & Crafts || Fiber art || All Fiber art'
    },
    {
        name: 'Arts & Crafts || Printmaking || All Printmaking'
    },
    {
        name: 'Arts & Crafts || Aceo || All Aceo'
    },
    {
        name: 'Arts & Crafts || Paint || All Paint'
    },
    {
        name: 'Arts & Crafts || Native American Arts & Crafts || All Native American Arts & Crafts'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || All Art Paper & Surfaces'
    },
    {
        name: 'Arts & Crafts || Art Pencils || All Art Pencils'
    },
    {
        name: 'Arts & Crafts || Art Studio Furniture || All Art Studio Furniture'
    },
    {
        name: 'Arts & Crafts || Ink & Calligraphy || All Ink & Calligraphy'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || All Paint Accessories'
    },
    {
        name: 'Arts & Crafts || Paint Brushes || All Paint Brushes'
    },
    {
        name: 'Arts & Crafts || Pastels || All Pastels'
    },
    {
        name: 'Arts & Crafts || Mediums & Varnishes || All Mediums & Varnishes'
    },
    {
        name: 'Arts & Crafts || Resin Art Supplies || All Resin Art Supplies'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || All Stamping & Embossing'
    },
    {
        name: 'Arts & Crafts || Other Arts & Crafts || All Other Arts & Crafts'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || All Aquariums & Fish Supplies'
    },
    {
        name: 'Pet Supplies || Bird Supplies || All Bird Supplies'
    },
    {
        name: 'Pet Supplies || Cat Supplies || All Cat Supplies'
    },
    {
        name: 'Pet Supplies || Dog Supplies || All Dog Supplies'
    },
    {
        name: 'Pet Supplies || Reptile Supplies || All Reptile Supplies'
    },
    {
        name: 'Pet Supplies || Others || All Others'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || All Garden Decor'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || All Garden Hand Tools & Equipment'
    },
    {
        name: 'Garden & Outdoor || Garden Protective Gear || All Garden Protective Gear'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || All Garden Structures & Shades'
    },
    {
        name: 'Garden & Outdoor || Outdoor Heating & Cooking || All Outdoor Heating & Cooking'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || All Outdoor Power Equipment'
    },
    {
        name: 'Garden & Outdoor || Outdoor Waste & Composting || All Outdoor Waste & Composting'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || All Patio Furniture'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || All Planting Accessories'
    },
    {
        name: 'Garden & Outdoor || Live Plants || All Live Plants'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || All Pool Equipment'
    },
    {
        name: 'Garden & Outdoor || Sauna & Hot Tub Equipment || All Sauna & Hot Tub Equipment'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || All Watering Equipment'
    },
    {
        name: 'Office || School Supplies || All School Supplies'
    },
    {
        name: 'Office || Ink & Toner || All Ink & Toner'
    },
    {
        name: 'Office || Paper || All Paper'
    },
    {
        name: 'Office || Writing Supplies || All Writing Supplies'
    },
    {
        name: 'Office || Office Electronics || All Office Electronics'
    },
    {
        name: 'Office || Desk Organization || All Desk Organization'
    },
    {
        name: 'Office || Shipping Supplies || All Shipping Supplies'
    },
    {
        name: 'Office || Folders & Filing || All Folders & Filing'
    },
    {
        name: 'Office || Notebooks & Writing Pads || All Notebooks & Writing Pads'
    },
    {
        name: 'Office || Tapes & Adhesives || All Tapes & Adhesives'
    },
    {
        name: 'Office || Markers || All Markers'
    },
    {
        name: 'Office || Pens || All Pens'
    },
    {
        name: 'Tools || Air Tools || All Air Tools'
    },
    {
        name: 'Tools || Chains & Ropes || All Chains & Ropes'
    },
    {
        name: 'Tools || Cutting Tools || All Cutting Tools'
    },
    {
        name: 'Tools || Electrical Tools || All Electrical Tools'
    },
    {
        name: 'Tools || Fastening Tools || All Fastening Tools'
    },
    {
        name: 'Tools || Hammers || All Hammers'
    },
    {
        name: 'Tools || Hand Tools || All Hand Tools'
    },
    {
        name: 'Tools || Measuring & Layout || All Measuring & Layout'
    },
    {
        name: 'Tools || Pliers || All Pliers'
    },
    {
        name: 'Tools || Power Tools || All Power Tools'
    },
    {
        name: 'Tools || Power Tool Accessories || All Power Tool Accessories'
    },
    {
        name: 'Tools || Safety Gear || All Safety Gear'
    },
    {
        name: 'Tools || Saws || All Saws'
    },
    {
        name: 'Home || Kitchen Dinnerware || All Kitchen Dinnerware'
    },
    {
        name: 'Tools || Screwdrivers || All Screwdrivers'
    },
    {
        name: 'Tools || Tie Downs || All Tie Downs'
    },
    {
        name: 'Tools || Tools Storage || All Tools Storage'
    },
    {
        name: 'Tools || Welding Equipment || All Welding Equipment'
    },
    {
        name: 'Tools || Wrenches || All Wrenches'
    },
    {
        name: 'Books || Magazines || All Magazines'
    },
    {
        name: 'Books || Fiction Books || All Fiction Books'
    },
    {
        name: 'Books || Nonfiction Books || All Nonfiction Books'
    },
    {
        name: 'Books || Reference Books || All Reference Books'
    },
    {
        name: 'Books || Other Books || All Other Books'
    },
    {
        name: 'Other || Daily & travel items || All Daily & travel items'
    },
    {
        name: 'Other || Automotive || All Automotive'
    },
    {
        name: 'Other || Office Supplies || All Office Supplies'
    },
    {
        name: 'Other || Musical instruments || All Musical instruments'
    },
    {
        name: 'Other || Travel & Luggage || All Travel & Luggage'
    },
    {
        name: 'Other || Automotive Oils & Fluids || All Automotive Oils & Fluids'
    },
    {
        name: 'Other || Other || All Other'
    },
    {
        name: 'Men || Athletic apparel || Jerseys'
    },
    {
        name: 'Electronics || Drones || VR Headsets'
    },
    {
        name: 'Electronics || Drones || VR Phone Cases'
    },
    {
        name: 'Electronics || Drones || VR Accessories'
    },
    {
        name: 'Electronics || Drones || VR Games'
    },
    {
        name: 'Electronics || Drones || All Virtual Reality'
    },
    {
        name: 'Vintage & collectibles || Antique || Other'
    },
    {
        name: 'Vintage & collectibles || Antique || 75 to 100 years'
    },
    {
        name: 'Vintage & collectibles || Antique || Collectibles'
    },
    {
        name: 'Vintage & collectibles || Housewares || Pot holder'
    },
    {
        name: 'Vintage & collectibles || Housewares || Box'
    },
    {
        name: 'Vintage & collectibles || Housewares || Glass'
    },
    {
        name: 'Kids || Girls other || All Girls other'
    },
    {
        name: 'Vintage & collectibles || Accessories || Shawl'
    },
    {
        name: 'Vintage & collectibles || Accessories || Apron'
    },
    {
        name: 'Vintage & collectibles || Accessories || Hat'
    },
    {
        name: 'Vintage & collectibles || Home decor || Basket'
    },
    {
        name: 'Vintage & collectibles || Home decor || Vase'
    },
    {
        name: 'Vintage & collectibles || Jewelry || All Jewelry'
    },
    {
        name: 'Kids || Strollers || Accessories'
    },
    {
        name: 'Kids || Safety || Outdoor safety'
    },
    {
        name: 'Kids || Pregnancy & maternity || Prenatal monitoring devices'
    },
    {
        name: 'Kids || Strollers || All Strollers'
    },
    {
        name: 'Handmade || Glass || Ornaments'
    },
    {
        name: 'Handmade || Glass || Glassware'
    },
    {
        name: 'Handmade || Ceramics and pottery || Tiles'
    },
    {
        name: 'Handmade || Woodworking || Office'
    },
    {
        name: 'Tools || Saw Accessories || All Saw Accessories'
    },
    {
        name: 'Handmade || Woodworking || Outdoor'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Mountain Bike Handle Bars'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Hats'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Gloves'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Downhill Skis'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || All Camping Equipment'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Other Camping Equipment'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || Yoga Sandbags'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || All Skateboard Gear'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Complete BMX Bikes'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Rod Holders'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Lures'
    },
    {
        name: 'Sports & outdoors || Outdoors || Other'
    },
    {
        name: 'Sports & outdoors || Footwear || Men'
    },
    {
        name: 'Sports & outdoors || Exercise || Bowling'
    },
    {
        name: 'Vintage & collectibles || Serving || Salt and pepper shakers'
    },
    {
        name: 'Vintage & collectibles || Serving || Glassware'
    },
    {
        name: 'Vintage & collectibles || Housewares || Other'
    },
    {
        name: 'Vintage & collectibles || Accessories || Gloves'
    },
    {
        name: 'Vintage & collectibles || Clothing || Children'
    },
    {
        name: 'Vintage & collectibles || Jewelry || Ring'
    },
    {
        name: 'Kids || Potty training || Potty Training Chairs'
    },
    {
        name: 'Kids || Strollers || Standard'
    },
    {
        name: 'Handmade || Ceramics and pottery || Coasters'
    },
    {
        name: 'Handmade || Ceramics and pottery || Planters'
    },
    {
        name: 'Handmade || Ceramics and pottery || Bowls'
    },
    {
        name: 'Handmade || Housewares || Office'
    },
    {
        name: 'Handmade || Housewares || Frames'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Camping Lanterns'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Uniforms'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Socks'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Helmets'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Gloves & Mitts'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Skateboard Bushings'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Complete Skateboards'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Jig Heads'
    },
    {
        name: 'Sports & outdoors || Fan shop || NCAA'
    },
    {
        name: 'Sports & outdoors || Outdoors || Electric Scooters'
    },
    {
        name: 'Sports & outdoors || Outdoors || Hiking Equipment'
    },
    {
        name: 'Sports & outdoors || Outdoors || Biking Equipment'
    },
    {
        name: "Sports & outdoors || Golf || Men's golf clubs"
    },
    {
        name: 'Sports & outdoors || Exercise || Tap Shoes'
    },
    {
        name: 'Vintage & collectibles || Serving || Tumbler'
    },
    {
        name: 'Vintage & collectibles || Serving || Platter'
    },
    {
        name: 'Vintage & collectibles || Paper ephemera || Game'
    },
    {
        name: 'Vintage & collectibles || Antique || Bags and purses'
    },
    {
        name: 'Vintage & collectibles || Antique || Book'
    },
    {
        name: 'Vintage & collectibles || Antique || Paper ephemera'
    },
    {
        name: 'Vintage & collectibles || Supplies || Yarn'
    },
    {
        name: 'Vintage & collectibles || Supplies || Charm'
    },
    {
        name: 'Vintage & collectibles || Supplies || Bead'
    },
    {
        name: 'Vintage & collectibles || Supplies || Trim'
    },
    {
        name: 'Vintage & collectibles || Supplies || Button'
    },
    {
        name: 'Vintage & collectibles || Accessories || Eyewear'
    },
    {
        name: 'Vintage & collectibles || Jewelry || Other'
    },
    {
        name: 'Kids || Strollers || Joggers'
    },
    {
        name: 'Kids || Safety || Monitors'
    },
    {
        name: 'Kids || Potty training || All Potty training'
    },
    {
        name: 'Handmade || Woodworking || All Woodworking'
    },
    {
        name: 'Handmade || Woodworking || Fretwork'
    },
    {
        name: 'Handmade || Housewares || Magnets'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || All Cycling Equipment'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Complete Mountain Bikes'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Poles'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || Yoga Bolsters & Cushions'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Skateboard Hardware'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Skateboard Griptape'
    },
    {
        name: 'Sports & outdoors || Snowboarding Gear || All Snowboarding Gear'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || All Basketball Equipment'
    },
    {
        name: 'Sports & outdoors || Golf || Golf shoes'
    },
    {
        name: 'Sports & outdoors || Apparel || Boys'
    },
    {
        name: 'Sports & outdoors || Footwear || All Footwear'
    },
    {
        name: 'Sports & outdoors || Exercise || Dance Leotards'
    },
    {
        name: 'Sports & outdoors || Exercise || Fitness accessories'
    },
    {
        name: 'Sports & outdoors || Team sports || Football'
    },
    {
        name: 'Vintage & collectibles || Collectible Postage || Collectible Postmarks'
    },
    {
        name: 'Vintage & collectibles || Collectible Coins || Collectible US Coins'
    },
    {
        name: 'Vintage & collectibles || Collectible Coins || Collectible Ancient Coins'
    },
    {
        name: 'Vintage & collectibles || Furniture || Table'
    },
    {
        name: 'Vintage & collectibles || Electronics || All Electronics'
    },
    {
        name: 'Vintage & collectibles || Electronics || Other'
    },
    {
        name: 'Vintage & collectibles || Serving || Teapot'
    },
    {
        name: 'Vintage & collectibles || Antique || Electronics'
    },
    {
        name: 'Vintage & collectibles || Antique || 50 to 75 years'
    },
    {
        name: 'Vintage & collectibles || Supplies || Zipper'
    },
    {
        name: 'Vintage & collectibles || Supplies || Finding'
    },
    {
        name: 'Vintage & collectibles || Accessories || Wallet'
    },
    {
        name: 'Vintage & collectibles || Accessories || Belt'
    },
    {
        name: 'Vintage & collectibles || Home decor || Bedding'
    },
    {
        name: 'Vintage & collectibles || Home decor || Planter'
    },
    {
        name: 'Vintage & collectibles || Clothing || Pants'
    },
    {
        name: 'Vintage & collectibles || Clothing || Shirt'
    },
    {
        name: 'Handmade || Weddings || Cake toppers'
    },
    {
        name: 'Handmade || Ceramics and pottery || Vases'
    },
    {
        name: 'Handmade || Woodworking || Burning'
    },
    {
        name: 'Handmade || Housewares || Bathroom'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Body Armor'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || Yoga Mats'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || All Baseball Equipment'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Shirts & Jerseys'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Cleats'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Belts'
    },
    {
        name: 'Sports & outdoors || Snowboarding Gear || Snowboard Bindings'
    },
    {
        name: 'Sports & outdoors || Snowboarding Gear || Snowboard Bags'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Weights'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Rod Racks'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || Basketballs'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || Basketball Training Equipment'
    },
    {
        name: 'Sports & outdoors || Fan shop || NFL'
    },
    {
        name: 'Sports & outdoors || Golf || Other'
    },
    {
        name: "Sports & outdoors || Golf || Women's golf clubs"
    },
    {
        name: 'Vintage & collectibles || Furniture || Fixture'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Pouch'
    },
    {
        name: 'Vintage & collectibles || Housewares || All Housewares'
    },
    {
        name: 'Vintage & collectibles || Housewares || Magnet'
    },
    {
        name: 'Vintage & collectibles || Home decor || Tray'
    },
    {
        name: 'Vintage & collectibles || Home decor || Box'
    },
    {
        name: 'Handmade || Glass || Jewelry'
    },
    {
        name: 'Handmade || Glass || Beads'
    },
    {
        name: 'Handmade || Glass || Dishes'
    },
    {
        name: 'Handmade || Glass || Home decor'
    },
    {
        name: 'Handmade || Housewares || Bedroom'
    },
    {
        name: 'Handmade || Housewares || Home decor'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Road Bike Frames'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Outdoor Headlamps'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Inflatable Beds'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Skateboard Pads'
    },
    {
        name: 'Sports & outdoors || Snowboarding Gear || Snowboard Boots'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Rods'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Reels'
    },
    {
        name: 'Sports & outdoors || Golf || Electronics'
    },
    {
        name: 'Sports & outdoors || Team sports || Rugby'
    },
    {
        name: 'Vintage & collectibles || Furniture || Entertainment'
    },
    {
        name: 'Vintage & collectibles || Furniture || Shelf'
    },
    {
        name: 'Vintage & collectibles || Electronics || Video game'
    },
    {
        name: 'Vintage & collectibles || Serving || Other'
    },
    {
        name: 'Vintage & collectibles || Paper ephemera || Postcard'
    },
    {
        name: 'Vintage & collectibles || Antique || All Antique'
    },
    {
        name: 'Vintage & collectibles || Antique || Home decor'
    },
    {
        name: 'Vintage & collectibles || Accessories || Cuff links'
    },
    {
        name: 'Vintage & collectibles || Accessories || Handkerchief'
    },
    {
        name: 'Vintage & collectibles || Accessories || Shoes'
    },
    {
        name: 'Vintage & collectibles || Clothing || Tank'
    },
    {
        name: 'Vintage & collectibles || Clothing || Skirt'
    },
    {
        name: 'Vintage & collectibles || Clothing || Blouse'
    },
    {
        name: 'Kids || Safety || Kids Safety Leashes'
    },
    {
        name: 'Kids || Safety || Kitchen safety'
    },
    {
        name: 'Kids || Pregnancy & maternity || Breastfeeding Pillows'
    },
    {
        name: 'Kids || Pregnancy & maternity || Breastfeeding Stools'
    },
    {
        name: 'Kids || Potty training || Travel potties'
    },
    {
        name: 'Kids || Potty training || Potty Training Seats'
    },
    {
        name: 'Kids || Feeding || All Feeding'
    },
    {
        name: 'Kids || Diapering || Baby Powders'
    },
    {
        name: 'Kids || Diapering || Diaper stackers & caddies'
    },
    {
        name: 'Kids || Bathing & skin care || Skin care'
    },
    {
        name: 'Kids || Boys other || All Boys other'
    },
    {
        name: 'Kids || Boys swimwear || Boys 0-24 mos'
    },
    {
        name: 'Kids || Girls one-pieces || All Girls one-pieces'
    },
    {
        name: 'Kids || Girls accessories || Girls 2T-5T'
    },
    {
        name: 'Beauty || Tools & accessories || Hair coloring tools'
    },
    {
        name: 'Beauty || Skin care || All Skin care'
    },
    {
        name: 'Beauty || Makeup || Lips'
    },
    {
        name: 'Home || Cleaning supplies || Sweeping'
    },
    {
        name: 'Home || Cleaning supplies || Brushes'
    },
    {
        name: 'Home || Party Supplies || Party Hats'
    },
    {
        name: 'Home || Home appliances || Washer & Dryer Sets'
    },
    {
        name: 'Home || Home appliances || Dishwashers'
    },
    {
        name: 'Home || Seasonal decor || Patriotic'
    },
    {
        name: 'Home || Home decor || All Home decor'
    },
    {
        name: 'Home || Home decor || Wax Melts'
    },
    {
        name: 'Home || Home decor || Area Rugs'
    },
    {
        name: 'Home || Bedding || Bed in a bag'
    },
    {
        name: 'Home || Bedding || Bed pillows'
    },
    {
        name: 'Home || Kitchen Flatware || Chopsticks'
    },
    {
        name: 'Home || Kitchen Barware || Highball Glasses'
    },
    {
        name: 'Home || Kitchen Barware || Cocktail Glasses'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || Cake Boards'
    },
    {
        name: 'Home || Kitchen Cutlery || Santoku Knives'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Knife Storage'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Boning Knives'
    },
    {
        name: 'Home || Bathroom Furniture || Other Bathroom Storage'
    },
    {
        name: 'Home || Home Office Furniture || All Home Office Furniture'
    },
    {
        name: 'Home || Home Office Furniture || Other Home Office Furniture'
    },
    {
        name: 'Kids || Nursery || All Nursery'
    },
    {
        name: 'Kids || Gear || Baby Swings'
    },
    {
        name: 'Kids || Feeding || Kids Sippy Cups'
    },
    {
        name: 'Kids || Boys swimwear || Boys (4+)'
    },
    {
        name: 'Kids || Girls other || Girls 2T-5T'
    },
    {
        name: 'Kids || Girls tops & t-shirts || Girls (4+)'
    },
    {
        name: 'Kids || Girls shoes || Girls (4+)'
    },
    {
        name: 'Kids || Girls bottoms || All Girls bottoms'
    },
    {
        name: 'Beauty || Tools & accessories || Mirrors'
    },
    {
        name: 'Beauty || Makeup || Makeup sets'
    },
    {
        name: 'Beauty || Makeup || Face'
    },
    {
        name: 'Beauty || Hair care || Styling products'
    },
    {
        name: 'Beauty || Fragrance || Kids'
    },
    {
        name: 'Kids || Gear || Travel beds'
    },
    {
        name: 'Kids || Diapering || Changing kits'
    },
    {
        name: 'Home || Cleaning supplies || Air fresheners'
    },
    {
        name: 'Kids || Car seats & accessories || Accessories'
    },
    {
        name: 'Home || Party Supplies || Party Masks'
    },
    {
        name: 'Kids || Bathing & skin care || Kids Bath Soaps'
    },
    {
        name: 'Home || Home appliances || Ice Makers'
    },
    {
        name: 'Home || Home appliances || Refrigerators'
    },
    {
        name: 'Kids || Bathing & skin care || Baby Care Kits'
    },
    {
        name: 'Kids || Boys bottoms || All Boys bottoms'
    },
    {
        name: 'Home || Home decor || Slipcovers'
    },
    {
        name: 'Home || Home decor || Home decor accents'
    },
    {
        name: 'Kids || Girls other || All Girls other'
    },
    {
        name: 'Kids || Girls accessories || Girls 0-24 mos'
    },
    {
        name: 'Home || Bedding || Decorative Pillows'
    },
    {
        name: 'Home || Bedding || Comforter Sets'
    },
    {
        name: 'Beauty || Tools & accessories || Makeup Sponges'
    },
    {
        name: 'Beauty || Tools & accessories || Nail tools'
    },
    {
        name: 'Home || Kitchen Tea & Accessories || Teapots'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Spoon Rests'
    },
    {
        name: 'Beauty || Skin care || Maternity'
    },
    {
        name: 'Beauty || Skin care || Body'
    },
    {
        name: 'Home || Kitchen Drinkware || Coffee Mugs'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || All Kitchen Baking & Cake Accessories'
    },
    {
        name: 'Beauty || Makeup || Eyes'
    },
    {
        name: 'Beauty || Bath & body || All Bath & body'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || Icing Bags'
    },
    {
        name: 'Home || Cleaning supplies || Trash bags'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Bread Knives'
    },
    {
        name: 'Home || Home appliances || Garbage disposals'
    },
    {
        name: 'Home || Furniture Hardware & Parts || Pulls & Handles'
    },
    {
        name: 'Home || Artwork || Woodcuts'
    },
    {
        name: 'Home || Bathroom Furniture || Hampers'
    },
    {
        name: 'Home || Bedding || Throws'
    },
    {
        name: 'Home || Bathroom Furniture || Bathroom Shelves'
    },
    {
        name: 'Home || Bedding || Shams'
    },
    {
        name: 'Home || Living Room Furniture || Other Living Room Furniture'
    },
    {
        name: 'Home || Living Room Furniture || Accent Chairs'
    },
    {
        name: 'Home || Bedding || Bed Skirts'
    },
    {
        name: 'Home || Kitchen & dining || Home Brewing Supplies'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Oil & Vinegar Dispensers'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Kitchen Timers'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Garlic Presses'
    },
    {
        name: 'Home || Kitchen Drinkware || Drinking Glasses'
    },
    {
        name: 'Home || Kitchen Barware || Beer Glasses'
    },
    {
        name: 'Home || Kitchen Baking & Cake Accessories || Cake Candles'
    },
    {
        name: 'Home || Kitchen Cutlery || Kitchen Scissors & Shears'
    },
    {
        name: 'Home || Bathroom Furniture || All Bathroom Furniture'
    },
    {
        name: 'Kids || Health & baby care || Other'
    },
    {
        name: 'Kids || Health & baby care || Teethers'
    },
    {
        name: 'Kids || Health & baby care || Nasal aspirators'
    },
    {
        name: 'Kids || Feeding || Baby Bottles'
    },
    {
        name: 'Kids || Diapering || All Diapering'
    },
    {
        name: 'Kids || Bathing & skin care || Kids Bathing Tubs'
    },
    {
        name: 'Kids || Bathing & skin care || Conditioners'
    },
    {
        name: 'Kids || Boys bottoms || Boys (4+)'
    },
    {
        name: 'Kids || Boys accessories || Boys (4+)'
    },
    {
        name: 'Kids || Girls coats & jackets || Girls 2T-5T'
    },
    {
        name: 'Kids || Girls bottoms || Girls 0-24 mos'
    },
    {
        name: 'Beauty || Tools & accessories || All Tools & accessories'
    },
    {
        name: 'Beauty || Tools & accessories || Cosmetic Cases'
    },
    {
        name: 'Beauty || Skin care || Other'
    },
    {
        name: 'Beauty || Skin care || Nail Care'
    },
    {
        name: 'Beauty || Skin care || Face'
    },
    {
        name: 'Beauty || Makeup || Makeup palettes'
    },
    {
        name: 'Beauty || Makeup || Body'
    },
    {
        name: 'Beauty || Hair care || Hair Texturizers'
    },
    {
        name: 'Beauty || Hair care || Shampoos'
    },
    {
        name: 'Home || Storage & organization || Laundry storage & organization'
    },
    {
        name: 'Home || Party Supplies || Greeting Cards & Invitations'
    },
    {
        name: 'Home || Home appliances || Dehumidifiers'
    },
    {
        name: 'Home || Seasonal decor || Other'
    },
    {
        name: 'Home || Seasonal decor || Day of the dead'
    },
    {
        name: 'Home || Artwork || Paintings'
    },
    {
        name: 'Home || Home decor || Home Decor Lighting'
    },
    {
        name: 'Home || Home decor || Window treatments'
    },
    {
        name: 'Home || Home decor || Home fragrance'
    },
    {
        name: 'Home || Home decor || Doormats'
    },
    {
        name: 'Home || Bedding || Feather beds'
    },
    {
        name: 'Home || Other Furniture || Other Furniture Accessories'
    },
    {
        name: 'Home || Kitchen & dining || Cutlery Accessories'
    },
    {
        name: 'Home || Kitchen Tea & Accessories || Electric Kettles'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Kitchen Scales'
    },
    {
        name: 'Home || Living Room Furniture || Ottomans'
    },
    {
        name: 'Kids || Nursery || Nursery decor'
    },
    {
        name: 'Kids || Nursery || Bedding'
    },
    {
        name: 'Kids || Health & baby care || Sun protection'
    },
    {
        name: 'Kids || Gear || Baby Jumpers'
    },
    {
        name: 'Kids || Gear || Bicycle Child Seats'
    },
    {
        name: 'Kids || Gear || Shopping cart covers'
    },
    {
        name: 'Kids || Diapering || Diaper bags'
    },
    {
        name: 'Kids || Boys bottoms || Boys 0-24 mos'
    },
    {
        name: 'Kids || Girls other || Girls (4+)'
    },
    {
        name: 'Kids || Girls shoes || All Girls shoes'
    },
    {
        name: 'Kids || Girls dresses || All Girls dresses'
    },
    {
        name: 'Kids || Girls dresses || Girls 2T-5T'
    },
    {
        name: 'Kids || Girls bottoms || Girls (4+)'
    },
    {
        name: 'Beauty || Tools & accessories || Makeup Brushes'
    },
    {
        name: 'Beauty || Hair care || Conditioners'
    },
    {
        name: 'Beauty || Bath & body || Bath'
    },
    {
        name: 'Home || Other || All Other'
    },
    {
        name: 'Home || Artwork || Drawings'
    },
    {
        name: 'Home || Bedding || Pillow Covers'
    },
    {
        name: 'Home || Bedding || Comforters'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Other Kitchen Gadgets & Tools'
    },
    {
        name: 'Home || Kitchen Gadgets & Tools || Salt & Pepper Shakers'
    },
    {
        name: 'Home || Kitchen Flatware || Forks'
    },
    {
        name: 'Kids || Nursery || Other'
    },
    {
        name: 'Kids || Feeding || Feeding Bibs'
    },
    {
        name: 'Kids || Bathing & skin care || Travel bathing kits'
    },
    {
        name: 'Kids || Boys other || Boys (4+)'
    },
    {
        name: 'Kids || Boys accessories || All Boys accessories'
    },
    {
        name: 'Kids || Girls bottoms || Girls 2T-5T'
    },
    {
        name: 'Home || Cleaning supplies || Mopping'
    },
    {
        name: 'Home || Cleaning supplies || Dusting'
    },
    {
        name: 'Home || Storage & organization || Trash & recycling'
    },
    {
        name: 'Home || Home appliances || Beverage Coolers'
    },
    {
        name: 'Home || Seasonal decor || Valentine'
    },
    {
        name: 'Home || Artwork || All Artwork'
    },
    {
        name: 'Home || Home decor || Picture Frames'
    },
    {
        name: 'Home || Kitchen & dining || Other'
    },
    {
        name: 'Home || Kitchen Cutlery || Nakiri Knives'
    },
    {
        name: 'Home || Furniture Hardware & Parts || Furniture Legs'
    },
    {
        name: 'Home || Living Room Furniture || Living Room Sets'
    },
    {
        name: 'Kids || Potty training || Seat covers'
    },
    {
        name: 'Electronics || Virtual Reality || VR Phone Cases'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Decanters'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Tablecloths'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Blocks'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Play Teepees'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Nature Exploration Toys'
    },
    {
        name: 'Toys & Collectibles || Building Toys || Wooden Blocks'
    },
    {
        name: 'Electronics || Home Audio || Home Audio Receivers'
    },
    {
        name: 'Electronics || Home Audio || DA Converters'
    },
    {
        name: 'Electronics || Home Audio || Home Subwoofers'
    },
    {
        name: 'Electronics || Home Audio || Docking Stations'
    },
    {
        name: 'Electronics || Smart Home & Security || All Smart Home & Security'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Liquor Dispensers'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Cocktail Shakers'
    },
    {
        name: 'Home || Kitchen Storage || Fruit Baskets'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Sifters'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Table Chargers'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Cloth Napkins'
    },
    {
        name: 'Home || Kitchen Cookware || All Kitchen Cookware'
    },
    {
        name: 'Home || Kitchen Coffee & Espresso Makers || Espresso & Cappuccino Machines'
    },
    {
        name: 'Home || Kitchen Bakeware || Cake Pans'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || Boxing Trading Cards'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Animals'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Bears'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || Porcelain'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Bilingual Toys'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Crib Toys'
    },
    {
        name: 'Toys & Collectibles || Remote Control Toys & Vehicles || Remote Control Vehicles & Animals'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || All Sports & Outdoor Play'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Toy Kites'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Wooden Puzzles'
    },
    {
        name: 'Toys & Collectibles || Building Toys || LEGO Toys'
    },
    {
        name: 'Electronics || Virtual Reality || All Virtual Reality'
    },
    {
        name: 'Electronics || Home Audio || Home Audio Amplifiers'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Bottle Holders'
    },
    {
        name: 'Home || Kitchen Small Appliances || Other Small Appliances'
    },
    {
        name: 'Home || Kitchen Small Appliances || Blenders'
    },
    {
        name: 'Home || Kitchen Utensils || Measuring Spoons'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Spiralizers'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Table Runners'
    },
    {
        name: 'Home || Kitchen Serveware || Jugs'
    },
    {
        name: 'Home || Kitchen Serveware || Butter Dishes'
    },
    {
        name: 'Home || Kitchen Serveware || Beverage Dispensers'
    },
    {
        name: 'Home || Kitchen Dinnerware || All Kitchen Dinnerware'
    },
    {
        name: 'Home || Kitchen Cookware || Griddle Pans'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Figurines'
    },
    {
        name: 'Toys & Collectibles || Trading Cards || Trading Card Tins'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || Novelty Surprise Toys'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Baby Rattles'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Push & Pull Toys'
    },
    {
        name: 'Toys & Collectibles || Stuffed Animals & Plush || Character Pillows'
    },
    {
        name: 'Toys & Collectibles || Stuffed Animals & Plush || Beanbag Plushies'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Playground Balls'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Other Outdoor Toys'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Swing Set Accessories'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Bounce Houses'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Lawn Games'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || 3-D Puzzles'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Board Games'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Kids Telescopes'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Other'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Bags & Totes'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Glass'
    },
    {
        name: 'Toys & Collectibles || Action Figures & Accessories || Action Figure Playsets'
    },
    {
        name: 'Electronics || Other || All Other'
    },
    {
        name: 'Electronics || Virtual Reality || VR Accessories'
    },
    {
        name: 'Electronics || Headphones & MP3 Players || All Headphones & MP3 Players'
    },
    {
        name: 'Electronics || Home Audio || Music Streamers'
    },
    {
        name: 'Home || Bedroom Furniture || Headboards'
    },
    {
        name: 'Home || Kitchen Storage || Kitchen Cling Films'
    },
    {
        name: 'Home || Kitchen Small Appliances || Slow Cookers'
    },
    {
        name: 'Home || Kitchen Small Appliances || Pressure Cookers'
    },
    {
        name: 'Home || Kitchen Small Appliances || Deep Fryers'
    },
    {
        name: 'Home || Kitchen Small Appliances || Chafing Dishes'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Spatulas'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Choppers'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Table Linen Sets'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Potholders'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Napkin Holders'
    },
    {
        name: 'Home || Kitchen Serveware || Serving Platters'
    },
    {
        name: 'Home || Kitchen Serveware || Salad Bowls'
    },
    {
        name: 'Home || Kitchen Serveware || Cheese Boards'
    },
    {
        name: 'Home || Kitchen Cookware || Dutch Ovens'
    },
    {
        name: 'Home || Kitchen Coffee & Espresso Makers || Milk Frothers'
    },
    {
        name: 'Home || Kitchen Coffee & Espresso Makers || Filter Coffee Machines'
    },
    {
        name: 'Home || Kitchen Coffee & Espresso Makers || Coffee Drippers'
    },
    {
        name: 'Home || Kitchen Bakeware || Bundt Pans'
    },
    {
        name: "Home || Kids' home store || Other"
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Doll clothes'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Children'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Action Figures'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Dolls'
    },
    {
        name: 'Toys & Collectibles || Trading Cards || Booster Packs'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Play Gardening Toys'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Special Needs Learning Toys'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Baby Teethers'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Trampolines'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Dice Games'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Jigsaw Puzzles'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Kids Music Players'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Kids Karaoke'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Kids Headphones'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Arcade'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Figurines'
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || Mini Dolls & Playsets'
    },
    {
        name: 'Home || Bedroom Furniture || Other Bedroom Furniture'
    },
    {
        name: 'Home || Bedroom Furniture || Bedroom Benches'
    },
    {
        name: 'Home || Kitchen Storage || Kitchen Canisters'
    },
    {
        name: 'Home || Kitchen Small Appliances || Ice Cream Makers'
    },
    {
        name: 'Home || Kitchen Small Appliances || Food Processors'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Peelers'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Colanders'
    },
    {
        name: "Home || Kids' home store || Kids' room décor"
    },
    {
        name: "Home || Kids' home store || Kids' bedding"
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Artist bears'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Baby'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || Other'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || Toy Slime'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || Magic Kits & Accessories'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Play Tunnels'
    },
    {
        name: 'Toys & Collectibles || Stuffed Animals & Plush || Stuffed Animal Accessories'
    },
    {
        name: 'Toys & Collectibles || Stuffed Animals & Plush || Stuffed Animals'
    },
    {
        name: 'Toys & Collectibles || Remote Control Toys & Vehicles || Toy Vehicle Accessories'
    },
    {
        name: 'Toys & Collectibles || Remote Control Toys & Vehicles || Racetracks & Playsets'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Tricycles'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Sleds & Snow Toys'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || All Collectibles & Hobbies'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Porcelain'
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || Interactive Dolls & Pets'
    },
    {
        name: 'Electronics || Tablets & E-readers || iPad/tablet/ebook readers'
    },
    {
        name: 'Electronics || Home Audio || Studio recording equipment'
    },
    {
        name: 'Home || Bedroom Furniture || Nightstands'
    },
    {
        name: 'Home || Bedroom Furniture || Beds'
    },
    {
        name: 'Home || Kitchen Storage || Kitchen Jars'
    },
    {
        name: 'Home || Kitchen Small Appliances || Toasters'
    },
    {
        name: 'Home || Kitchen Small Appliances || Soda Makers'
    },
    {
        name: 'Home || Kitchen Utensils || Pizza Cutter'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Tongs'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Scoops'
    },
    {
        name: 'Home || Kitchen Dinnerware || Other Dinnerware'
    },
    {
        name: 'Home || Kitchen Dinnerware || Salad Plates'
    },
    {
        name: 'Home || Kitchen Dinnerware || Dinner Plates'
    },
    {
        name: 'Home || Kitchen Bakeware || All Kitchen Bakeware'
    },
    {
        name: 'Home || Kitchen Bakeware || Baking Sheets'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Soft Sculptures'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || All Vintage & Antique Collectibles'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Stacking Games'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Ball Pits'
    },
    {
        name: 'Toys & Collectibles || Remote Control Toys & Vehicles || Trains & Train Sets'
    },
    {
        name: 'Toys & Collectibles || Remote Control Toys & Vehicles || All Remote Control Toys & Vehicles'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || Drawing & Coloring'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Puppets'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || Gag Toys & Practical Jokes'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Antique Toys'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Other'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Miniatures'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || Hockey Trading Cards'
    },
    {
        name: 'Home || Kitchen Coffee & Espresso Makers || All Kitchen Coffee & Espresso Makers'
    },
    {
        name: 'Home || Kitchen Dinnerware || Bowls'
    },
    {
        name: 'Home || Kitchen & Table Linens || Other Kitchen Linens'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Strainers'
    },
    {
        name: 'Home || Kitchen Small Appliances || Hand Mixers'
    },
    {
        name: 'Electronics || Video Game Merchandise || Other Video Game Merchandise'
    },
    {
        name: 'Electronics || Tablets & E-readers || All Tablets & E-readers'
    },
    {
        name: 'Electronics || Tablets & E-readers || Tablet Skins'
    },
    {
        name: 'Electronics || Smart Home & Security || Smart Speakers & Assistants'
    },
    {
        name: 'Electronics || Home Audio || Portable Stereos & Boomboxes'
    },
    {
        name: 'Electronics || Headphones & MP3 Players || Bluetooth Headphones'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Comics'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Kids Watches'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Other'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || NERF & Blaster Darts'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Play Sets & Playhouses'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Pogo Sticks & Hoppers'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Cars'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || Figurines'
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || Doll Clothes'
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || Play Animals'
    },
    {
        name: 'Toys & Collectibles || Action Figures & Accessories || Action Figures'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Toy Walkie Talkies'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Toy Phones'
    },
    {
        name: 'Home || Kitchen Coffee & Espresso Makers || Coffee Grinders'
    },
    {
        name: 'Home || Kitchen Cookware || Steamers'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Table Placemats'
    },
    {
        name: 'Home || Kitchen Small Appliances || Kitchen Burners'
    },
    {
        name: 'Home || Kitchen Small Appliances || Toaster Ovens'
    },
    {
        name: 'Home || Kitchen Storage || All Kitchen Storage'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Ice Buckets'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || All Kitchen Bar & Wine Accessories'
    },
    {
        name: 'Electronics || Home Audio || Microphone Accessories'
    },
    {
        name: 'Electronics || Wearables || Fitness Trackers'
    },
    {
        name: 'Electronics || Video Game Merchandise || Interactive Video Game Cards'
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || Dollhouses & Play Sets'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Keychains'
    },
    {
        name: 'Toys & Collectibles || Building Toys || Building Kit Accessories'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Wind-Up & Walking Toys'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Toy Electric Pets'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Kids Protective Pads'
    },
    {
        name: 'Toys & Collectibles || Stuffed Animals & Plush || Plush Puppets'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || Easels & Art Tables'
    },
    {
        name: 'Vintage & collectibles || Serving || Bowl'
    },
    {
        name: 'Vintage & collectibles || Serving || Tray'
    },
    {
        name: 'Vintage & collectibles || Serving || Casserole'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Leather'
    },
    {
        name: 'Vintage & collectibles || Electronics || Camera'
    },
    {
        name: 'Vintage & collectibles || Electronics || Clock'
    },
    {
        name: 'Vintage & collectibles || Furniture || Dresser'
    },
    {
        name: 'Vintage & collectibles || Collectible Postage || Collectible Airmail Stamps'
    },
    {
        name: 'Sports & outdoors || Footwear || Cleats'
    },
    {
        name: 'Vintage & collectibles || Collectible Coins || All Collectible Coins'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || All Paint Accessories'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Clarifiers'
    },
    {
        name: 'Tools || Tie Downs || D-Ring Anchors'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Mattocks'
    },
    {
        name: 'Office || Paper || Cardstock'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Complete Cyclocross Bikes'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Complete Road Bikes'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Mittens'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Insect Repellant Torches'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Camping Tents'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || All Yoga Equipment'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || Yoga Wheels'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || Yoga Blankets'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Batting Cages & Netting'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Tackle Boxes'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Line'
    },
    {
        name: 'Sports & outdoors || Exercise || Track & field'
    },
    {
        name: 'Sports & outdoors || Exercise || Athletic training'
    },
    {
        name: 'Sports & outdoors || Team sports || All Team sports'
    },
    {
        name: 'Vintage & collectibles || Other || All Other'
    },
    {
        name: 'Vintage & collectibles || Collectible Postage || Collectible Definitive Stamps'
    },
    {
        name: 'Vintage & collectibles || Furniture || Mirror'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Portable Grills'
    },
    {
        name: 'Vintage & collectibles || Housewares || Ceramic'
    },
    {
        name: 'Handmade || Ceramics and pottery || Other'
    },
    {
        name: 'Handmade || Needlecraft || Pillow'
    },
    {
        name: 'Garden & Outdoor || Sauna & Hot Tub Equipment || All Sauna & Hot Tub Equipment'
    },
    {
        name: 'Tools || Wrenches || Box Wrenches'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Diving Boards'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Loppers'
    },
    {
        name: 'Tools || Measuring & Layout || Measuring Tapes'
    },
    {
        name: 'Vintage & collectibles || Collectible Postage || Collectible Topical Stamps'
    },
    {
        name: 'Vintage & collectibles || Collectible Postage || All Collectible Postage'
    },
    {
        name: 'Sports & outdoors || Golf || Golf balls'
    },
    {
        name: 'Sports & outdoors || Snowboarding Gear || Snowboard Gloves'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Skateboard Bearings'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Skateboard Risers'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Base Sets & Homeplates'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Batting Tees'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Sleeping Bags'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Toys'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Lawn Sprinklers'
    },
    {
        name: 'Garden & Outdoor || Garden Protective Gear || All Garden Protective Gear'
    },
    {
        name: 'Toys & Collectibles || Building Toys || All Building Toys'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Bobbleheads'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Pins'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Model Vehicles'
    },
    {
        name: 'Electronics || Headphones & MP3 Players || MP3 Players'
    },
    {
        name: 'Electronics || Home Audio || Karaoke Equipment'
    },
    {
        name: 'Electronics || Home Audio || Bluetooth Speakers'
    },
    {
        name: 'Electronics || Wearables || Smart Watches'
    },
    {
        name: 'Electronics || Tablets & E-readers || Tablet Covers'
    },
    {
        name: 'Electronics || Headphones & MP3 Players || Headphones'
    },
    {
        name: 'Electronics || Home Audio || Radio Tuners'
    },
    {
        name: 'Electronics || Home Audio || Home Audio Interconnects'
    },
    {
        name: 'Vintage & collectibles || Serving || Teacup'
    },
    {
        name: 'Vintage & collectibles || Paper ephemera || Matchbox'
    },
    {
        name: 'Vintage & collectibles || Antique || Accessories'
    },
    {
        name: 'Kids || Strollers || Prams'
    },
    {
        name: 'Vintage & collectibles || Antique || Jewelry'
    },
    {
        name: 'Vintage & collectibles || Supplies || Ephemera'
    },
    {
        name: 'Vintage & collectibles || Supplies || Pattern'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Clutch'
    },
    {
        name: 'Vintage & collectibles || Accessories || Scarf'
    },
    {
        name: 'Handmade || Children || Accessories'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Brushes'
    },
    {
        name: 'Tools || Electrical Tools || Soldering Guns'
    },
    {
        name: 'Garden & Outdoor || Sauna & Hot Tub Equipment || Spa & Hot Tub Covers'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Liners'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Soil'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || All Outdoor Power Equipment'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Sweepers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Chainsaws'
    },
    {
        name: 'Books || Fiction Books || Western Books'
    },
    {
        name: 'Kids || Safety || Crib netting'
    },
    {
        name: 'Sports & outdoors || Other || All Other'
    },
    {
        name: 'Handmade || Woodworking || Sculptures'
    },
    {
        name: 'Handmade || Glass || Bowls'
    },
    {
        name: 'Handmade || Glass || Sculptures'
    },
    {
        name: 'Handmade || Glass || Other'
    },
    {
        name: 'Kids || Safety || Sleep positioners'
    },
    {
        name: 'Kids || Strollers || Travel systems'
    },
    {
        name: 'Vintage & collectibles || Jewelry || Pendant'
    },
    {
        name: 'Vintage & collectibles || Jewelry || Watch'
    },
    {
        name: 'Vintage & collectibles || Home decor || All Home decor'
    },
    {
        name: 'Vintage & collectibles || Accessories || Necktie'
    },
    {
        name: 'Vintage & collectibles || Accessories || All Accessories'
    },
    {
        name: 'Vintage & collectibles || Paper ephemera || Other'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Insect Repellant Sprays'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Boots'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Mountain Bike Wheels'
    },
    {
        name: 'Handmade || Housewares || Pillows'
    },
    {
        name: 'Handmade || Housewares || Other'
    },
    {
        name: 'Handmade || Woodworking || Signs'
    },
    {
        name: 'Handmade || Glass || Bottles'
    },
    {
        name: 'Vintage & collectibles || Clothing || Sweater'
    },
    {
        name: 'Vintage & collectibles || Accessories || Keychain'
    },
    {
        name: 'Vintage & collectibles || Supplies || Chain'
    },
    {
        name: 'Vintage & collectibles || Serving || Pitcher'
    },
    {
        name: 'Vintage & collectibles || Serving || Cream and sugar set'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Case'
    },
    {
        name: 'Vintage & collectibles || Furniture || Bed'
    },
    {
        name: 'Vintage & collectibles || Furniture || Other'
    },
    {
        name: 'Vintage & collectibles || Collectible Paper Money || All Collectible Paper Money'
    },
    {
        name: 'Vintage & collectibles || Collectible Postage || Collectible Commemorative Stamps'
    },
    {
        name: 'Sports & outdoors || Team sports || Soccer'
    },
    {
        name: 'Sports & outdoors || Team sports || Tennis & racquets'
    },
    {
        name: 'Sports & outdoors || Exercise || Other'
    },
    {
        name: 'Sports & outdoors || Fan shop || All Fan shop'
    },
    {
        name: 'Sports & outdoors || Snowboarding Gear || Snowboard Helmets'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Pants'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Protective Gear'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Camping Coolers & Ice Chests'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Camping Tables'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Racks'
    },
    {
        name: 'Handmade || Housewares || Kitchen'
    },
    {
        name: 'Handmade || Ceramics and pottery || Soap dish'
    },
    {
        name: 'Handmade || Ceramics and pottery || Jewelry'
    },
    {
        name: 'Handmade || Ceramics and pottery || Supplies'
    },
    {
        name: 'Handmade || Glass || Stained glass'
    },
    {
        name: 'Kids || Safety || Electrical safety'
    },
    {
        name: 'Kids || Safety || Bathroom safety'
    },
    {
        name: 'Kids || Safety || Safety caps'
    },
    {
        name: 'Kids || Safety || Other'
    },
    {
        name: 'Kids || Strollers || Other'
    },
    {
        name: 'Vintage & collectibles || Jewelry || Necklace'
    },
    {
        name: 'Vintage & collectibles || Clothing || Dress'
    },
    {
        name: 'Vintage & collectibles || Housewares || Table'
    },
    {
        name: 'Vintage & collectibles || Housewares || Light'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Pumps'
    },
    {
        name: 'Garden & Outdoor || Sauna & Hot Tub Equipment || Sauna Theromometers'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Hose Reels'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Sprinkler Heads'
    },
    {
        name: 'Office || School Supplies || Other School Supplies'
    },
    {
        name: 'Office || Ink & Toner || Toner Refills'
    },
    {
        name: 'Office || Paper || All Paper'
    },
    {
        name: 'Office || Writing Supplies || Mechanical Pencil Lead Refills'
    },
    {
        name: 'Office || Office Electronics || Label Makers'
    },
    {
        name: 'Office || Desk Organization || Desk Drawer Organizers'
    },
    {
        name: 'Office || Shipping Supplies || Bubble Rolls'
    },
    {
        name: 'Office || Folders & Filing || Accordion Folders'
    },
    {
        name: 'Office || Markers || Brush Markers'
    },
    {
        name: 'Tools || Air Tools || Air Compressors'
    },
    {
        name: 'Tools || Air Tools || Air Impact Wrenches'
    },
    {
        name: 'Tools || Air Tools || Air Sprayers'
    },
    {
        name: 'Tools || Hand Tools || Knives & Cutters'
    },
    {
        name: 'Tools || Hand Tools || Pry Bars'
    },
    {
        name: 'Tools || Power Tools || Impact Wrenches'
    },
    {
        name: 'Tools || Safety Gear || Ear Plugs'
    },
    {
        name: 'Tools || Safety Gear || Knee Pads'
    },
    {
        name: 'Tools || Safety Gear || PPE Kits'
    },
    {
        name: 'Tools || Saws || Jigsaws'
    },
    {
        name: 'Tools || Screwdrivers || Screwdriver Sets'
    },
    {
        name: 'Tools || Tie Downs || Load Binders'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Tents'
    },
    {
        name: 'Tools || Welding Equipment || Welding Torches'
    },
    {
        name: 'Books || Fiction Books || Manga'
    },
    {
        name: 'Books || Fiction Books || Horror Fiction Books'
    },
    {
        name: 'Books || Fiction Books || Other Fiction Books'
    },
    {
        name: 'Books || Fiction Books || All Fiction Books'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Rakes'
    },
    {
        name: 'Garden & Outdoor || Garden Protective Gear || Garden Aprons'
    },
    {
        name: 'Garden & Outdoor || Garden Protective Gear || Other Garden Protective Gear'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Outdoor Sheds'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Tarps'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Lawn Mowers'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Succulents'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Lights'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || All Pool Equipment'
    },
    {
        name: 'Office || Writing Supplies || Pencil Cases'
    },
    {
        name: 'Office || Shipping Supplies || Foam Rolls'
    },
    {
        name: 'Office || Shipping Supplies || Mailing Tubes'
    },
    {
        name: 'Office || Shipping Supplies || Packing Peanuts'
    },
    {
        name: 'Office || Shipping Supplies || Postage Stamps'
    },
    {
        name: 'Office || Notebooks & Writing Pads || Other Notebooks & Writing Pads'
    },
    {
        name: 'Office || Pens || Fountain Pens'
    },
    {
        name: 'Tools || Air Tools || Air Hammers'
    },
    {
        name: 'Tools || Chains & Ropes || Other Chain & Ropes'
    },
    {
        name: 'Tools || Cutting Tools || Machetes'
    },
    {
        name: 'Tools || Electrical Tools || Cable Pliers'
    },
    {
        name: 'Tools || Fastening Tools || Staples'
    },
    {
        name: 'Tools || Fastening Tools || Vises'
    },
    {
        name: 'Tools || Hand Tools || Nut Drivers'
    },
    {
        name: 'Tools || Hand Tools || Stud Finders'
    },
    {
        name: 'Tools || Hand Tools || Other Hand Tools'
    },
    {
        name: 'Tools || Power Tools || Lathes'
    },
    {
        name: 'Tools || Power Tool Accessories || Power Tool Battery Chargers'
    },
    {
        name: 'Tools || Welding Equipment || Spot Welders'
    },
    {
        name: 'Tools || Wrenches || Crescent Wrenches'
    },
    {
        name: 'Tools || Wrenches || Open-End Wrenches'
    },
    {
        name: 'Books || Magazines || International Magazines'
    },
    {
        name: 'Books || Nonfiction Books || Religion & Spirituality Books'
    },
    {
        name: 'Books || Magazines || Lifestyle & Culture Magazines'
    },
    {
        name: 'Books || Fiction Books || Comics'
    },
    {
        name: 'Books || Fiction Books || Historical Fiction Books'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Power Edgers'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Outdoor Daybeds'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Patio Furniture Cushions'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Patio Furniture Sets'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Porch Swings'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Storage Deck Boxes'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Garden Fertilizers'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Other Live Plants'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Above-Ground Pools'
    },
    {
        name: 'Office || Paper || Photo Paper'
    },
    {
        name: 'Office || Office Electronics || Laminators'
    },
    {
        name: 'Office || Shipping Supplies || Envelope Sealers'
    },
    {
        name: 'Office || Notebooks & Writing Pads || Journals'
    },
    {
        name: 'Tools || Air Tools || Air Hoses'
    },
    {
        name: 'Tools || Electrical Tools || Conduit Benders'
    },
    {
        name: 'Tools || Electrical Tools || Crimping Dies'
    },
    {
        name: 'Tools || Fastening Tools || C-Clamps'
    },
    {
        name: 'Tools || Fastening Tools || Other Fastening Tools'
    },
    {
        name: 'Tools || Hammers || All Hammers'
    },
    {
        name: 'Tools || Hand Tools || All Hand Tools'
    },
    {
        name: 'Tools || Measuring & Layout || Laser Levels'
    },
    {
        name: 'Tools || Power Tools || Heat Guns'
    },
    {
        name: 'Tools || Power Tool Accessories || Other Power Tool Accessories'
    },
    {
        name: 'Tools || Saw Accessories || Scroll Saw Blades'
    },
    {
        name: 'Tools || Tools Storage || Tool Chests'
    },
    {
        name: "Books || Fiction Books || Fictional Children's Books"
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Weeders'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Outdoor Carports'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Pruning Shears'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || All Garden Hand Tools & Equipment'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Awnings'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Pergolas'
    },
    {
        name: 'Garden & Outdoor || Outdoor Heating & Cooking || Patio Heaters'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Hammocks'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Patio Benches'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Garden Hooks'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Gardening Planters'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Gardening Pots'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Flower Bulbs'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Inflatable Pools'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Heaters'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Ladders & Steps'
    },
    {
        name: 'Office || School Supplies || Calculators'
    },
    {
        name: 'Office || Ink & Toner || Ink Refills'
    },
    {
        name: 'Office || Ink & Toner || All Ink & Toner'
    },
    {
        name: 'Office || Notebooks & Writing Pads || Composition Books'
    },
    {
        name: 'Office || Notebooks & Writing Pads || All Notebooks & Writing Pads'
    },
    {
        name: 'Tools || Air Tools || Air Drills'
    },
    {
        name: 'Tools || Air Tools || Grease Guns'
    },
    {
        name: 'Tools || Electrical Tools || Cable Pullers'
    },
    {
        name: 'Tools || Fastening Tools || Staple Guns'
    },
    {
        name: 'Tools || Measuring & Layout || Levels'
    },
    {
        name: 'Tools || Safety Gear || Face Shields'
    },
    {
        name: 'Tools || Safety Gear || Shoe Covers'
    },
    {
        name: 'Tools || Saws || Circular Saws'
    },
    {
        name: 'Tools || Welding Equipment || Welding Wire'
    },
    {
        name: 'Handmade || Geekery || Gadget'
    },
    {
        name: 'Handmade || Geekery || Horror'
    },
    {
        name: 'Handmade || Paper goods || Tag'
    },
    {
        name: 'Handmade || Pets || Pet lover'
    },
    {
        name: 'Handmade || Bags and purses || All Bags and purses'
    },
    {
        name: 'Arts & Crafts || Printmaking || All Printmaking'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Bowls & Feeders'
    },
    {
        name: 'Handmade || Weddings || All Weddings'
    },
    {
        name: 'Handmade || Quilts || Trim'
    },
    {
        name: 'Handmade || Bags and purses || Purse'
    },
    {
        name: 'Handmade || Geekery || Videogame'
    },
    {
        name: 'Handmade || Bags and purses || Novelty'
    },
    {
        name: 'Handmade || Bags and purses || Wristlet'
    },
    {
        name: 'Handmade || Paper goods || Pad'
    },
    {
        name: 'Office || Desk Organization || Desk Organizers'
    },
    {
        name: 'Office || Desk Organization || File Organizers'
    },
    {
        name: 'Office || Shipping Supplies || Corrugated Mailers'
    },
    {
        name: 'Office || Shipping Supplies || Cushioning Bags'
    },
    {
        name: 'Office || Pens || Calligraphy Pens'
    },
    {
        name: 'Office || Pens || Brush Pens'
    },
    {
        name: 'Tools || Air Tools || Air Blow Guns'
    },
    {
        name: 'Tools || Air Tools || Air Cut Off Tools'
    },
    {
        name: 'Tools || Electrical Tools || Cable Cutters'
    },
    {
        name: 'Tools || Power Tools || Routers'
    },
    {
        name: 'Tools || Safety Gear || Lifelines'
    },
    {
        name: 'Tools || Saws || Tables Saws'
    },
    {
        name: 'Tools || Tie Downs || Winch Straps'
    },
    {
        name: 'Tools || Welding Equipment || Welding Helmet'
    },
    {
        name: 'Tools || Welding Equipment || Welding Valves'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Pruning Saws'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Shovels'
    },
    {
        name: 'Garden & Outdoor || Garden Protective Gear || Garden Kneelers'
    },
    {
        name: 'Garden & Outdoor || Garden Protective Gear || Gardening Boots'
    },
    {
        name: 'Garden & Outdoor || Outdoor Heating & Cooking || Fire Pits'
    },
    {
        name: 'Garden & Outdoor || Outdoor Heating & Cooking || All Outdoor Heating & Cooking'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Seed Starter Pots'
    },
    {
        name: 'Office || Ink & Toner || Ink Cartidges'
    },
    {
        name: 'Office || Paper || Filler Paper'
    },
    {
        name: 'Office || Shipping Supplies || Shipping Labels'
    },
    {
        name: 'Office || Markers || Alcohol-Based Markers'
    },
    {
        name: 'Office || Markers || Dual Tip Art Markers'
    },
    {
        name: 'Office || Markers || Other Markers'
    },
    {
        name: 'Office || Pens || Gel Pens'
    },
    {
        name: 'Office || Pens || Felt Tip Pens'
    },
    {
        name: 'Tools || Air Tools || Air Tool Fittings'
    },
    {
        name: 'Tools || Hand Tools || Sockets'
    },
    {
        name: 'Tools || Power Tools || Combo Tool Sets'
    },
    {
        name: 'Tools || Power Tool Accessories || Power Tool Batteries'
    },
    {
        name: 'Tools || Safety Gear || Work Gloves'
    },
    {
        name: 'Tools || Tie Downs || Tarp Straps'
    },
    {
        name: 'Tools || Tools Storage || Workbenches'
    },
    {
        name: 'Books || Fiction Books || Mystery & Crime Fiction Books'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Trowels'
    },
    {
        name: 'Garden & Outdoor || Outdoor Heating & Cooking || Picnic Baskets'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Generators'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Pressure Washers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Waste & Composting || Garden Waste Bags'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Patio Chairs'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || Other Patio Furniture'
    },
    {
        name: 'Garden & Outdoor || Patio Furniture || All Patio Furniture'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Garden Saucers'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Perennial Plants'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Filters'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Water Levelers'
    },
    {
        name: 'Office || School Supplies || Rulers'
    },
    {
        name: 'Office || Paper || Other Office Paper'
    },
    {
        name: 'Office || Office Electronics || Cash Registers'
    },
    {
        name: 'Office || Office Electronics || Office Calculators'
    },
    {
        name: 'Office || Shipping Supplies || Catalog Envelopes'
    },
    {
        name: 'Office || Shipping Supplies || Poly Bags'
    },
    {
        name: 'Office || Folders & Filing || Classification Folders'
    },
    {
        name: 'Office || Folders & Filing || Hanging File Folders'
    },
    {
        name: 'Office || Pens || Archival Ink Pens'
    },
    {
        name: 'Tools || Air Tools || All Air Tools'
    },
    {
        name: 'Tools || Chains & Ropes || Rope & Chain Connectors'
    },
    {
        name: 'Tools || Cutting Tools || Other Cutting Tools'
    },
    {
        name: 'Tools || Fastening Tools || All Fastening Tools'
    },
    {
        name: 'Tools || Hand Tools || Ratchets'
    },
    {
        name: 'Tools || Hand Tools || Wire Strippers'
    },
    {
        name: 'Tools || Power Tools || Grinders'
    },
    {
        name: 'Tools || Power Tools || Power Cutting Tools'
    },
    {
        name: 'Tools || Power Tools || Power Riveters'
    },
    {
        name: 'Tools || Saws || Hand Saws'
    },
    {
        name: 'Tools || Saws || All Saws'
    },
    {
        name: 'Tools || Saw Accessories || Other Saw Accessories'
    },
    {
        name: 'Tools || Welding Equipment || Welding Cables'
    },
    {
        name: 'Tools || Wrenches || Other Wrenches'
    },
    {
        name: 'Tools || Wrenches || All Wrenches'
    },
    {
        name: 'Books || Magazines || All Magazines'
    },
    {
        name: 'Handmade || Glass || Paperweights'
    },
    {
        name: 'Handmade || Glass || Mirrors'
    },
    {
        name: 'Handmade || Weddings || Frames'
    },
    {
        name: 'Handmade || Holidays || Other'
    },
    {
        name: 'Handmade || Weddings || Just married'
    },
    {
        name: 'Handmade || Weddings || Albums'
    },
    {
        name: 'Handmade || Weddings || Accessories'
    },
    {
        name: 'Handmade || Holidays || St Patricks'
    },
    {
        name: 'Handmade || Weddings || Something blue'
    },
    {
        name: 'Handmade || Paper goods || All Paper goods'
    },
    {
        name: 'Handmade || Patterns || All Patterns'
    },
    {
        name: 'Handmade || Furniture || Dresser'
    },
    {
        name: 'Handmade || Pets || Bed'
    },
    {
        name: 'Handmade || Pets || Accessories'
    },
    {
        name: 'Arts & Crafts || Art Studio Furniture || All Art Studio Furniture'
    },
    {
        name: 'Arts & Crafts || Ink & Calligraphy || India Ink'
    },
    {
        name: 'Arts & Crafts || Paint Brushes || Other Paint Brushes'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Collars'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Beds'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Crates'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Nail Trimmers'
    },
    {
        name: 'Pet Supplies || Others || All Others'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Rain Gauges'
    },
    {
        name: 'Handmade || Needlecraft || Holidays'
    },
    {
        name: 'Handmade || Geekery || All Geekery'
    },
    {
        name: 'Handmade || Paper goods || Gift wrap'
    },
    {
        name: 'Handmade || Patterns || Clothing'
    },
    {
        name: 'Handmade || Accessories || Pin'
    },
    {
        name: 'Handmade || Pets || Tag'
    },
    {
        name: 'Arts & Crafts || Collages || All Collages'
    },
    {
        name: 'Arts & Crafts || Aceo || All Aceo'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Ink & Marker Paper'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Poster Boards'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Tracing Pads'
    },
    {
        name: 'Arts & Crafts || Art Studio Furniture || Drafting Tables'
    },
    {
        name: 'Arts & Crafts || Paint Accessories || Other Paint Accessories'
    },
    {
        name: 'Arts & Crafts || Paint Brushes || Airbrushes'
    },
    {
        name: 'Arts & Crafts || Pastels || Soft Pastels'
    },
    {
        name: 'Arts & Crafts || Pastels || Wax Pastels & Crayons'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Fish Food'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Other Aquarium & Fish Supplies'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || All Aquariums & Fish Supplies'
    },
    {
        name: 'Pet Supplies || Bird Supplies || Bird Cages'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Tags'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Other Cat Supplies'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Combs'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Food'
    },
    {
        name: 'Pet Supplies || Reptile Supplies || All Reptile Supplies'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Landscape Rocks'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Plant Stands'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Outdoor Plant Vases'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Sundials'
    },
    {
        name: 'Garden & Outdoor || Garden Hand Tools & Equipment || Garden Picks'
    },
    {
        name: 'Handmade || Needlecraft || Pincushion'
    },
    {
        name: 'Handmade || Patterns || Cross stitch'
    },
    {
        name: 'Handmade || Patterns || Painting'
    },
    {
        name: 'Handmade || Crochet || All Crochet'
    },
    {
        name: 'Handmade || Furniture || Entertainment'
    },
    {
        name: 'Handmade || Clothing || Children'
    },
    {
        name: 'Handmade || Clothing || Other'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Charcoal Paper'
    },
    {
        name: 'Arts & Crafts || Art Paper & Surfaces || Oil Pastel Paper'
    },
    {
        name: 'Arts & Crafts || Art Pencils || Charcoal Sticks'
    },
    {
        name: 'Arts & Crafts || Stamping & Embossing || Stamp Mounts'
    },
    {
        name: 'Pet Supplies || Aquariums & Fish Supplies || Aquarium Water Cleaners'
    },
    {
        name: 'Pet Supplies || Bird Supplies || Bird Toys'
    },
    {
        name: 'Pet Supplies || Cat Supplies || Cat Supplements'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Gates & Pens'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Pathway Lights'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Other Outdoor Decor'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || All Garden Decor'
    },
    {
        name: 'Handmade || Geekery || Toy'
    },
    {
        name: 'Handmade || Patterns || Holiday'
    },
    {
        name: 'Handmade || Knitting || Cozy'
    },
    {
        name: 'Handmade || Bags and purses || Pouch'
    },
    {
        name: 'Handmade || Clothing || Dress'
    },
    {
        name: 'Arts & Crafts || Illustration || All Illustration'
    },
    {
        name: 'Pet Supplies || Dog Supplies || Dog Fur Clippers'
    },
    {
        name: 'Garden & Outdoor || Garden Decor || Patio Torches'
    },
    {
        name: 'Vintage & collectibles || Housewares || Coaster'
    },
    {
        name: 'Vintage & collectibles || Supplies || Fabric'
    },
    {
        name: 'Vintage & collectibles || Supplies || Other'
    },
    {
        name: 'Vintage & collectibles || Antique || Serving'
    },
    {
        name: 'Vintage & collectibles || Paper ephemera || Map'
    },
    {
        name: 'Vintage & collectibles || Serving || Mug'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Purse'
    },
    {
        name: 'Vintage & collectibles || Collectible Postage || Collectible Stamp Sheets'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || Basketball Shirts & Jerseys'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Batting Gloves'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Camping Sleeping Pads'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Bags'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Mountain Bike Drivetrains'
    },
    {
        name: 'Handmade || Housewares || Clocks'
    },
    {
        name: 'Handmade || Woodworking || Supplies'
    },
    {
        name: 'Handmade || Glass || Windchimes'
    },
    {
        name: 'Handmade || Glass || Marbles'
    },
    {
        name: 'Vintage & collectibles || Jewelry || Earrings'
    },
    {
        name: 'Vintage & collectibles || Jewelry || Bracelet'
    },
    {
        name: 'Vintage & collectibles || Clothing || Corset'
    },
    {
        name: 'Vintage & collectibles || Home decor || Wall hanging'
    },
    {
        name: 'Vintage & collectibles || Home decor || Lighting'
    },
    {
        name: 'Vintage & collectibles || Home decor || Pillow'
    },
    {
        name: 'Vintage & collectibles || Home decor || Frame'
    },
    {
        name: 'Vintage & collectibles || Accessories || Compact'
    },
    {
        name: 'Vintage & collectibles || Housewares || Towel'
    },
    {
        name: 'Vintage & collectibles || Paper ephemera || All Paper ephemera'
    },
    {
        name: 'Vintage & collectibles || Collectible Coins || Collectible World Coins'
    },
    {
        name: 'Vintage & collectibles || Collectible Postage || Collectible Cinderella Stamps'
    },
    {
        name: 'Sports & outdoors || Team sports || Badminton'
    },
    {
        name: 'Sports & outdoors || Apparel || Girls'
    },
    {
        name: 'Sports & outdoors || Golf || Golf bags'
    },
    {
        name: 'Sports & outdoors || Golf || All Golf'
    },
    {
        name: 'Sports & outdoors || Outdoors || All Outdoors'
    },
    {
        name: 'Sports & outdoors || Fan shop || NHL'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || Basketball Socks'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Jackets'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || Yoga Straps'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Camping Chairs'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Camping Tools'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Complete Gravel Bikes'
    },
    {
        name: 'Handmade || Housewares || Cleaning'
    },
    {
        name: 'Handmade || Woodworking || Boxes'
    },
    {
        name: 'Handmade || Woodworking || Sports'
    },
    {
        name: 'Handmade || Ceramics and pottery || Miniature'
    },
    {
        name: 'Kids || Pregnancy & maternity || All Pregnancy & maternity'
    },
    {
        name: 'Vintage & collectibles || Housewares || Cup'
    },
    {
        name: 'Vintage & collectibles || Housewares || Plate'
    },
    {
        name: 'Vintage & collectibles || Serving || Butter dish'
    },
    {
        name: 'Vintage & collectibles || Collectible Paper Money || Collectible World Paper Money'
    },
    {
        name: 'Sports & outdoors || Team sports || All other sports'
    },
    {
        name: 'Sports & outdoors || Exercise || All Exercise'
    },
    {
        name: 'Sports & outdoors || Footwear || Kids'
    },
    {
        name: 'Sports & outdoors || Footwear || Other'
    },
    {
        name: 'Sports & outdoors || Apparel || Other'
    },
    {
        name: 'Sports & outdoors || Outdoors || Water sports'
    },
    {
        name: 'Sports & outdoors || Outdoors || Indoor/outdoor games'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || Basketball Hoops'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Floats'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Nets'
    },
    {
        name: 'Sports & outdoors || Snowboarding Gear || Snowboard Goggles'
    },
    {
        name: 'Sports & outdoors || Snowboarding Gear || Snowboards'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseballs'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || Other Yoga Equipment'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Outdoor Flashlights'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Cross Country Skis'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Goggles'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Socks'
    },
    {
        name: 'Sports & outdoors || Ski Gear || All Ski Gear'
    },
    {
        name: 'Handmade || Housewares || Outdoor'
    },
    {
        name: 'Handmade || Housewares || Storage solutions'
    },
    {
        name: 'Handmade || Woodworking || Kitchen'
    },
    {
        name: 'Handmade || Woodworking || Miniature'
    },
    {
        name: 'Handmade || Ceramics and pottery || Jars'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Bindings'
    },
    {
        name: 'Handmade || Housewares || All Housewares'
    },
    {
        name: 'Handmade || Woodworking || Home decor'
    },
    {
        name: 'Handmade || Woodworking || Toys'
    },
    {
        name: 'Handmade || Woodworking || Inlay'
    },
    {
        name: 'Handmade || Ceramics and pottery || All Ceramics and pottery'
    },
    {
        name: 'Handmade || Glass || Vases'
    },
    {
        name: 'Kids || Strollers || Lightweight'
    },
    {
        name: 'Kids || Other || All Other'
    },
    {
        name: 'Vintage & collectibles || Jewelry || Brooch'
    },
    {
        name: 'Vintage & collectibles || Clothing || Jacket'
    },
    {
        name: 'Vintage & collectibles || Clothing || Outerwear'
    },
    {
        name: 'Vintage & collectibles || Clothing || Other'
    },
    {
        name: 'Vintage & collectibles || Accessories || Buckle'
    },
    {
        name: 'Vintage & collectibles || Accessories || Other'
    },
    {
        name: 'Vintage & collectibles || Housewares || Bowl'
    },
    {
        name: 'Vintage & collectibles || Supplies || Cabochon'
    },
    {
        name: 'Vintage & collectibles || Antique || Housewares'
    },
    {
        name: 'Vintage & collectibles || Paper ephemera || Advertisement'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Change purse'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Diaper bag'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Other'
    },
    {
        name: 'Vintage & collectibles || Electronics || Telephone'
    },
    {
        name: 'Vintage & collectibles || Electronics || Game'
    },
    {
        name: 'Vintage & collectibles || Furniture || Chair'
    },
    {
        name: 'Vintage & collectibles || Furniture || Bookcase'
    },
    {
        name: 'Vintage & collectibles || Collectible Coins || Other Collectible Coins'
    },
    {
        name: 'Vintage & collectibles || Collectible Paper Money || Other Collectible Paper Money'
    },
    {
        name: 'Sports & outdoors || Team sports || Lacrosse'
    },
    {
        name: 'Sports & outdoors || Exercise || Boxing & mma'
    },
    {
        name: 'Sports & outdoors || Exercise || Fitness technology'
    },
    {
        name: 'Sports & outdoors || Footwear || Women'
    },
    {
        name: 'Sports & outdoors || Apparel || Men'
    },
    {
        name: 'Sports & outdoors || Fan shop || MLB'
    },
    {
        name: 'Sports & outdoors || Fan shop || Other'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Hooks'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Pitching Machines'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Other Baseball Equipment'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Helmets'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Mountain Bike Frames'
    },
    {
        name: 'Handmade || Housewares || Rugs'
    },
    {
        name: 'Handmade || Ceramics and pottery || Kitchen'
    },
    {
        name: 'Handmade || Glass || All Glass'
    },
    {
        name: 'Kids || Pregnancy & maternity || Maternity pillows'
    },
    {
        name: 'Kids || Pregnancy & maternity || Other'
    },
    {
        name: 'Kids || Safety || Cabinet locks & straps'
    },
    {
        name: 'Kids || Safety || Edge & corner guards'
    },
    {
        name: 'Kids || Safety || All Safety'
    },
    {
        name: 'Vintage & collectibles || Clothing || Tshirt'
    },
    {
        name: 'Vintage & collectibles || Clothing || Shorts'
    },
    {
        name: 'Vintage & collectibles || Clothing || Swimwear'
    },
    {
        name: 'Vintage & collectibles || Home decor || Candle holder'
    },
    {
        name: 'Vintage & collectibles || Supplies || All Supplies'
    },
    {
        name: 'Vintage & collectibles || Antique || 100 years or older'
    },
    {
        name: 'Vintage & collectibles || Antique || Furniture'
    },
    {
        name: 'Vintage & collectibles || Serving || Flatware'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Handbag'
    },
    {
        name: 'Vintage & collectibles || Electronics || Television'
    },
    {
        name: 'Sports & outdoors || Team sports || Hockey'
    },
    {
        name: 'Sports & outdoors || Team sports || Softball Equipment'
    },
    {
        name: 'Sports & outdoors || Exercise || Pilates Equipment'
    },
    {
        name: 'Sports & outdoors || Exercise || Ballet Shoes'
    },
    {
        name: 'Sports & outdoors || Apparel || All Apparel'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Rod & Reel Combos'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Tackle Bags'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || All Fishing Gear'
    },
    {
        name: 'Sports & outdoors || Snowboarding Gear || Snowboard Accessories'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Skateboard Decks'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Skateboard Trucks'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Electric Skateboards'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Equipment Bags'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || Yoga Blocks'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Complete Triathlon Bikes'
    },
    {
        name: 'Handmade || Housewares || Lighting'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Log Splitters'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || Other Outdoor Power Equipment'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Garden Sprayers'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Annual Plants'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Garden Bushes'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Vegetable Plants'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Spigots'
    },
    {
        name: 'Office || Paper || Cash Register Rolls'
    },
    {
        name: 'Office || Paper || Copy & Multipurpose Paper'
    },
    {
        name: 'Office || Writing Supplies || Erasers'
    },
    {
        name: 'Office || Desk Organization || Other Desk Organization'
    },
    {
        name: 'Office || Shipping Supplies || Double Sided Tape'
    },
    {
        name: 'Office || Shipping Supplies || Letter Openers'
    },
    {
        name: 'Office || Shipping Supplies || Mini Envelopes'
    },
    {
        name: 'Office || Notebooks & Writing Pads || Address Books'
    },
    {
        name: 'Office || Markers || Permanent Markers'
    },
    {
        name: 'Office || Pens || All Pens'
    },
    {
        name: 'Tools || Electrical Tools || Fusion Splicers & Cleavers'
    },
    {
        name: 'Tools || Hand Tools || Punches'
    },
    {
        name: 'Tools || Power Tool Accessories || All Power Tool Accessories'
    },
    {
        name: 'Tools || Safety Gear || Safety Goggles'
    },
    {
        name: 'Tools || Saw Accessories || Jigsaw Blades'
    },
    {
        name: 'Tools || Screwdrivers || Slotted Screwdrivers'
    },
    {
        name: 'Tools || Tie Downs || Ratchet Straps'
    },
    {
        name: 'Tools || Tie Downs || All Tie Downs'
    },
    {
        name: 'Tools || Welding Equipment || Welding Fuel Cylinders'
    },
    {
        name: 'Tools || Welding Equipment || Other Welding Equipment'
    },
    {
        name: 'Tools || Welding Equipment || All Welding Equipment'
    },
    {
        name: 'Books || Magazines || Other Magazines'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Other Structures & Shades'
    },
    {
        name: 'Garden & Outdoor || Outdoor Heating & Cooking || Firewood'
    },
    {
        name: 'Garden & Outdoor || Outdoor Power Equipment || String Trimmers'
    },
    {
        name: 'Garden & Outdoor || Outdoor Waste & Composting || All Outdoor Waste & Composting'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Window Planting Boxes'
    },
    {
        name: 'Garden & Outdoor || Live Plants || Seeds'
    },
    {
        name: 'Garden & Outdoor || Pool Equipment || Pool Fences'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || Model Vehicles'
    },
    {
        name: 'Toys & Collectibles || Trading Cards || Other Trading Cards'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Kids Costumes'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Play Cooking & Baking'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Learning & Development Toys'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || Paste'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Kids Skateboards'
    },
    {
        name: 'Toys & Collectibles || Remote Control Toys & Vehicles || Robotics'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || All Arts & Crafts'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Baby Learning Toys'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Baby & Toddler Books'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Bath Toys'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || Juggling Sets'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || All Novelty & Gag Toys'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Children'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Puzzles'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Pretend'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Scale dollhouse miniatures'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Dolls'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || All Handmade Toys'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Amigurumi'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Puppets'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || Soccer Trading Cards'
    },
    {
        name: 'Home || Kitchen Cookware || Skillets'
    },
    {
        name: 'Home || Kitchen Cookware || Other Cookware'
    },
    {
        name: 'Home || Kitchen Dinnerware || Appetizer Plates'
    },
    {
        name: 'Home || Kitchen Serveware || Gravy Boats'
    },
    {
        name: 'Home || Kitchen Serveware || All Kitchen Serveware'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Graters'
    },
    {
        name: 'Home || Kitchen Serveware || Serving Bowls'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Utensil Sets'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Whisks'
    },
    {
        name: 'Home || Kitchen Utensils || Potato Mashers'
    },
    {
        name: 'Home || Kitchen Small Appliances || Air Fryers'
    },
    {
        name: 'Home || Kitchen Small Appliances || Pasta Makers'
    },
    {
        name: 'Home || Kitchen Storage || Other Kitchen Storage'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Coasters'
    },
    {
        name: 'Home || Bedroom Furniture || Bedroom Sets'
    },
    {
        name: 'Home || Bedroom Furniture || Dressers'
    },
    {
        name: 'Electronics || Computer Components & Parts || All Computer Components & Parts'
    },
    {
        name: 'Electronics || Video Game Merchandise || All Video Game Merchandise'
    },
    {
        name: 'Electronics || Home Audio || Compact Stereos'
    },
    {
        name: 'Electronics || Tablets & E-readers || Tablet Cases'
    },
    {
        name: 'Electronics || Drones || Drone Accessories'
    },
    {
        name: 'Electronics || Virtual Reality || VR Headsets'
    },
    {
        name: 'Toys & Collectibles || Action Figures & Accessories || All Action Figures & Accessories'
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || Doll Accessories'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Rocks, Fossils & Minerals'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Toy Alarm Clocks'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || All Games & Puzzles'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Bubble Toys'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Scooters'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Science Toys'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Play Tents'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Other'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Games'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Food'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Plush'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Fashion Doll Apparel'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Other'
    },
    {
        name: "Home || Kids' home store || Kids' bath"
    },
    {
        name: 'Home || Kitchen Bakeware || Pie Tins'
    },
    {
        name: 'Home || Kitchen Serveware || Serving Trays'
    },
    {
        name: 'Home || Kitchen & Table Linens || Kitchen Towels'
    },
    {
        name: 'Home || Kitchen Utensils || Lemon Squeezers'
    },
    {
        name: 'Home || Kitchen Utensils || Measuring Cups'
    },
    {
        name: 'Home || Kitchen Small Appliances || Chocolate Fountains'
    },
    {
        name: 'Home || Kitchen Small Appliances || Electric Griddles'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Bottle Openers'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Flasks'
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || All Dolls & Accessories'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Dolls'
    },
    {
        name: 'Toys & Collectibles || Games & Puzzles || Game Accessories'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || NERF & Blaster Guns'
    },
    {
        name: 'Electronics || Home Audio || Other Home Audio'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || Kids Scissors'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || Aprons & Smocks'
    },
    {
        name: 'Toys & Collectibles || Dolls & Accessories || Dollhouse Furniture & Accessories'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Baby Music & Sound Toys'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Alphabet Toys'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Souvenirs & Memorabilia'
    },
    {
        name: 'Toys & Collectibles || Collectibles & Hobbies || Paper Collectibles'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Animals'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Collectibles || Arcade'
    },
    {
        name: 'Toys & Collectibles || Building Toys || Toy Building Blocks'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Electronic Games'
    },
    {
        name: 'Toys & Collectibles || Handmade Dolls & Miniatures || Primitive'
    },
    {
        name: 'Toys & Collectibles || Electronics for Kids || Kids Computers'
    },
    {
        name: 'Home || Kitchen Cookware || Saut Pans'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Toy Boomerangs'
    },
    {
        name: 'Home || Kitchen Utensils || Kitchen Slicers & Mandolines'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Kids Skates'
    },
    {
        name: 'Home || Kitchen Small Appliances || Stand Mixers'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || Jewelry & Bead Kits'
    },
    {
        name: 'Home || Kitchen Storage || Kitchen Tote Bags'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Other Bar & Wine Accessories'
    },
    {
        name: 'Toys & Collectibles || Baby & Toddler Toys || Baby & Toddler Blocks'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Play Tool Sets'
    },
    {
        name: 'Home || Bedroom Furniture || Wardrobes & Armoires'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Playhouses'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Spy Gear'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Play Medical Toys'
    },
    {
        name: 'Toys & Collectibles || Trading Cards || Single Cards'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Toy Frisbees'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Kids Wagons'
    },
    {
        name: 'Toys & Collectibles || Sports & Outdoor Play || Kids Helmets'
    },
    {
        name: 'Toys & Collectibles || Stuffed Animals & Plush || Plush Purses & Accessories'
    },
    {
        name: 'Toys & Collectibles || Arts & Crafts || Craft Kits'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Counting Toys'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || STEM Toys'
    },
    {
        name: 'Toys & Collectibles || Learning & Education Toys || Electronic Learning Toys'
    },
    {
        name: 'Toys & Collectibles || Dress Up & Pretend Play || Toddler & Baby Costumes'
    },
    {
        name: 'Toys & Collectibles || Novelty & Gag Toys || Fidget Toys'
    },
    {
        name: 'Toys & Collectibles || Vintage & Antique Toys || Sports'
    },
    {
        name: 'Toys & Collectibles || Handmade Toys || Amigurumi'
    },
    {
        name: 'Toys & Collectibles || Sports Trading Cards || Basketball Trading Cards'
    },
    {
        name: 'Toys & Collectibles || Other || All Other'
    },
    {
        name: 'Home || Kitchen Utensils || Cooking Food Turners'
    },
    {
        name: 'Home || Kitchen Utensils || Slotted Spoons'
    },
    {
        name: 'Home || Kitchen Utensils || Other Kitchen Utensils'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Bar Tool Sets'
    },
    {
        name: 'Home || Kitchen Bar & Wine Accessories || Wine Bottle Stoppers'
    },
    {
        name: 'Electronics || Smart Home & Security || Smart Thermostats'
    },
    {
        name: 'Electronics || Smart Home & Security || Smart Lighting'
    },
    {
        name: 'Electronics || Smart Home & Security || Other'
    },
    {
        name: 'Electronics || Home Audio || Home Audio Cables'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Face Guards'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || Basketball Headbands'
    },
    {
        name: 'Sports & outdoors || Exercise || Dance/ballet'
    },
    {
        name: 'Vintage & collectibles || Furniture || Storage'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || All Bags and purses'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Tote'
    },
    {
        name: 'Vintage & collectibles || Serving || All Serving'
    },
    {
        name: 'Vintage & collectibles || Serving || Plate'
    },
    {
        name: 'Vintage & collectibles || Home decor || Linens'
    },
    {
        name: 'Vintage & collectibles || Clothing || All Clothing'
    },
    {
        name: 'Kids || Potty training || Training pants'
    },
    {
        name: 'Handmade || Weddings || Favors'
    },
    {
        name: 'Handmade || Woodworking || Other'
    },
    {
        name: 'Handmade || Woodworking || Jewelry'
    },
    {
        name: 'Handmade || Woodworking || Accessories'
    },
    {
        name: 'Handmade || Woodworking || Seasonal'
    },
    {
        name: 'Handmade || Housewares || Entertaining/serving'
    },
    {
        name: 'Handmade || Housewares || Wall decor'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Tuning Tools'
    },
    {
        name: 'Sports & outdoors || Ski Gear || Ski Face Masks'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Camping Canopies'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || Yoga Mat Bags'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Bat Racks'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Skateboard Helmets'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fly Fishing Flies'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || Basketball Sleeves'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || Basketball Accessories'
    },
    {
        name: 'Sports & outdoors || Fan shop || NBA'
    },
    {
        name: 'Sports & outdoors || Golf || Golf apparel'
    },
    {
        name: 'Sports & outdoors || Apparel || Accessories'
    },
    {
        name: 'Sports & outdoors || Apparel || Women'
    },
    {
        name: 'Sports & outdoors || Exercise || Strength training'
    },
    {
        name: 'Vintage & collectibles || Furniture || All Furniture'
    },
    {
        name: 'Vintage & collectibles || Electronics || Radio'
    },
    {
        name: 'Vintage & collectibles || Bags and purses || Formal'
    },
    {
        name: 'Vintage & collectibles || Serving || Dinnerware set'
    },
    {
        name: 'Vintage & collectibles || Paper ephemera || Stamps'
    },
    {
        name: 'Vintage & collectibles || Antique || Supplies'
    },
    {
        name: 'Vintage & collectibles || Home decor || Other'
    },
    {
        name: 'Vintage & collectibles || Clothing || Baby'
    },
    {
        name: 'Kids || Potty training || Other'
    },
    {
        name: 'Kids || Potty training || Step stools'
    },
    {
        name: 'Kids || Safety || Rails & rail guards'
    },
    {
        name: 'Handmade || Ceramics and pottery || Teapots'
    },
    {
        name: 'Handmade || Ceramics and pottery || Home decor'
    },
    {
        name: 'Handmade || Woodworking || Carving'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Triathlon Bike Frames'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Gravel Bike Frames'
    },
    {
        name: 'Sports & outdoors || Cycling Equipment || Cyclocross Bike Frames'
    },
    {
        name: 'Sports & outdoors || Camping Equipment || Insect Repellant Candles'
    },
    {
        name: 'Sports & outdoors || Yoga Equipment || Yoga Mat Cleaners'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Bats'
    },
    {
        name: 'Sports & outdoors || Baseball Equipment || Baseball Accessories'
    },
    {
        name: 'Sports & outdoors || Skateboard Gear || Skateboard Wheels'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Sinkers'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Bait Buckets'
    },
    {
        name: 'Sports & outdoors || Fishing Gear || Fishing Apparel'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || Other Basketball Equipment'
    },
    {
        name: 'Sports & outdoors || Basketball Equipment || Basketball Protective Gear'
    },
    {
        name: 'Sports & outdoors || Outdoors || Skating Equipment'
    },
    {
        name: 'Sports & outdoors || Outdoors || Boating'
    },
    {
        name: 'Sports & outdoors || Team sports || Volleyball'
    },
    {
        name: 'Vintage & collectibles || Collectible Postage || Other Collectible Stamps'
    },
    {
        name: 'Vintage & collectibles || Collectible Paper Money || Collectible US Paper Money'
    },
    {
        name: 'Vintage & collectibles || Collectible Coins || Collectible Exonumia'
    },
    {
        name: 'Vintage & collectibles || Furniture || Desk'
    },
    {
        name: 'Vintage & collectibles || Furniture || Bench'
    },
    {
        name: 'Kids || Strollers || Tandem'
    },
    {
        name: 'Kids || Safety || Kids Safety Harnesses'
    },
    {
        name: 'Kids || Pregnancy & maternity || Family planning tests'
    },
    {
        name: 'Handmade || Ceramics and pottery || Sculptures'
    },
    {
        name: 'Handmade || Glass || Supplies'
    },
    {
        name: 'Handmade || Woodworking || Clocks'
    },
    {
        name: 'Tools || Air Tools || Inflators'
    },
    {
        name: 'Handmade || Weddings || Decorations'
    },
    {
        name: 'Kids || Safety || Gates & doorways'
    },
    {
        name: 'Office || Folders & Filing || Pocket Folders'
    },
    {
        name: 'Office || Desk Organization || All Desk Organization'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || Plant Ties & Supports'
    },
    {
        name: 'Garden & Outdoor || Garden Structures & Shades || Canopies'
    },
    {
        name: 'Books || Fiction Books || Action & Adventure Books'
    },
    {
        name: 'Tools || Tools Storage || All Tools Storage'
    },
    {
        name: 'Tools || Saws || Reciprocating Saws'
    },
    {
        name: 'Tools || Hand Tools || Hex Keys'
    },
    {
        name: 'Tools || Cutting Tools || Planes'
    },
    {
        name: 'Tools || Air Tools || Air Ratchet Wrenches'
    },
    {
        name: 'Office || Tapes & Adhesives || All Tapes & Adhesives'
    },
    {
        name: 'Office || Notebooks & Writing Pads || Notebooks'
    },
    {
        name: 'Office || Shipping Supplies || Shipping Tags'
    },
    {
        name: 'Office || Shipping Supplies || Interdepartmental Envelopes'
    },
    {
        name: 'Office || Desk Organization || Wall Files'
    },
    {
        name: 'Office || Desk Organization || Bookends'
    },
    {
        name: 'Office || Writing Supplies || Pencils'
    },
    {
        name: 'Office || Paper || Graph Paper'
    },
    {
        name: 'Office || Paper || Certificate Paper'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Hose Nozzles'
    },
    {
        name: 'Garden & Outdoor || Sauna & Hot Tub Equipment || Hot Tubs'
    },
    {
        name: 'Garden & Outdoor || Planting Accessories || All Planting Accessories'
    },
    {
        name: 'Books || Fiction Books || Sci-fi & Fantasy Books'
    },
    {
        name: 'Tools || Tools Storage || Tool Belts'
    },
    {
        name: 'Tools || Tie Downs || Bungee Cords'
    },
    {
        name: 'Tools || Screwdrivers || Phillips Screwdrivers'
    },
    {
        name: 'Tools || Safety Gear || Other Safety Gear'
    },
    {
        name: 'Tools || Safety Gear || Safety Glasses'
    },
    {
        name: 'Tools || Power Tools || All Power Tools'
    },
    {
        name: 'Tools || Power Tools || Screw Guns'
    },
    {
        name: 'Tools || Power Tools || Cordless Ratchets'
    },
    {
        name: 'Tools || Measuring & Layout || Measuring Wheels'
    },
    {
        name: 'Tools || Chains & Ropes || All Chains & Ropes'
    },
    {
        name: 'Tools || Chains & Ropes || Carabiners'
    },
    {
        name: 'Office || Tapes & Adhesives || Masking Tape'
    },
    {
        name: 'Office || Tapes & Adhesives || Electrical Tape'
    },
    {
        name: 'Office || Notebooks & Writing Pads || Note Pads'
    },
    {
        name: 'Office || Shipping Supplies || Business Envelopes'
    },
    {
        name: 'Office || Desk Organization || Magazine Holders'
    },
    {
        name: 'Office || Office Electronics || Other Office Electronics'
    },
    {
        name: 'Office || School Supplies || Protractors'
    },
    {
        name: 'Garden & Outdoor || Watering Equipment || Water Pumps'
    }
];

result.map((x) => x.name).join('\n');