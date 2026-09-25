export const categories=[
{id:'electronics',name:'Smart Gadgets & Electronics',description:'Tech essentials for a smarter everyday life'},
{id:'fashion',name:'Family Fashion & Clothing',description:'Modern looks for women, men, kids and every occasion'},
{id:'shoes',name:'Shoes & Footwear Collection',description:'Sneakers, heels, sandals, boots and everyday footwear'},
{id:'jewelry',name:'Jewelry & Fashion Accessories',description:'Elegant details that complete every outfit'},
{id:'beauty',name:'Beauty & Cosmetics',description:'Makeup, skincare, tools and self-care essentials'},
{id:'perfumes',name:'Perfumes & Scents',description:'Fresh, floral, sweet, woody and statement fragrances'}
];
const names={
 electronics:['Portable Power Station','Universal Smartphone Mount','Premium Air Fryer','Noise-Cancelling Headphones','Power Bank','Fast Charger & Charging Hub','3-Axis Smartphone Gimbal','Waterproof Bluetooth Speaker','Smartwatch','Content Creator Tech Kit'],
 fashion:['Burgundy Chiffon Evening Suit','Blush Embellished Evening Gown','White Double-Breasted Dress','Mauve Embroidered 3-Piece Suit','Taupe Trench & Wide-Leg Look','Full-Length Chelsea Trench Coat','White Blazer & Black Jumpsuit Set','Brown Power Suit','Neutral Wide-Leg Outfit','Elegant Satin Evening Dress'],
 shoes:["Men's Tan Sports Sneakers",'Brown Block Heel Pumps','Neutral Bow Sandals','Black Buckle Heels','Cream Bow Slides','White Minimal Sneakers','Black Ankle Boots','Rhinestone Block Heel Shoes','Brown Horsebit Loafers','Black & Gold Pointed Heels'],
 jewelry:['Crystal Heart Necklace','Opal Floral Earrings','Ruby Statement Ring','Kundan Jhumka Bangles','Gold Hoop Earrings','Crystal Bangle Bracelet','Butterfly Crystal Ring Set','Purple Crystal Statement Earrings','Minimal Ring Set','Purple Crystal Statement Earrings'],
 beauty:['Professional Makeup Brush Set','Rose Blush Collection','Minimalist Beauty Organizer','Rose Gold Strobe Cream','Matte Liquid Lipstick','Premium Hair Styling Tool Set','Natural Mist Foundation','Professional Beauty Tool Set','Soft Makeup Sponges','Luxury Pink Makeup Collection'],
 perfumes:['Pure XS Style Fragrance','Miss Velvet Eau de Parfum','Teriaq Style Eau de Parfum','Valentino Born in Roma Style','YSL Libre Style Fragrance','Gucci Bloom Style Mist','Laverne Rose Scent','Pink Addiction Fragrance','Coco Noir Style Fragrance','Gucci Bamboo Style Fragrance']
};
const prices={electronics:[4999,12999,119999,12999,5999,2499,14999,6999,8999,14999],fashion:[6999,8499,5999,8999,12999,7499,9999,7999,8999,6499],shoes:[4999,6999,3999,7499,3499,5499,6999,4299,8999,6499],jewelry:[6999,12999,24999,8999,16999,79999,18999,49999,9999,200000],beauty:[5499,1999,4499,2499,1799,3499,2499,6499,1599,5499],perfumes:[15999,17999,19999,34999,100000,22999,49999,39999,15999,24999]};
const oldPrices={};
const real={
 electronics:new Set([1,2,3,7,8,9]), fashion:new Set([1,2,3,4]), jewelry:new Set([1,3,4,6,7,10]), beauty:new Set([1,2,3,4,6,10]), perfumes:new Set([1,2]),
};
const ext={electronics:'webp',fashion:'webp',shoes:'webp',jewelry:'webp',beauty:'webp',perfumes:'webp'};
export const products=Object.entries(names).flatMap(([category,list])=>list.map((name,i)=>{
 const n=i+1; const price=prices[category][i];
 const image=real[category]?.has(n)?`/assets/products_real/${category}-${n}.${ext[category]}`:`/assets/products/${category}-${n}.${ext[category]}`;
 return {id:`${category}-${n}`,category,name,description:`${name} — a curated Cartify pick selected for a premium, practical shopping experience.`,price,oldPrice:Math.round(price*1.18/100)*100,rating:4.5+(i%5)*.1,reviews:120+i*47,image,badge:['Trending','Editor’s Pick','New Find','Popular'][i%4]};
}));
