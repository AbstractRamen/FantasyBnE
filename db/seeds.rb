require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create(email: 'adventurer@dream.brave', name: 'Brave adventurer', password: 123456)
wukong = User.create(email: 'wukong@best.mountain', name: 'Sun Wukong', password: 123456, image: (File.open('app/assets/images/wukong.jpg')))
albus = User.create(email: 'admin@hogwartz.edu', name: 'Albus Dumbledore ', password: 123456, image: (File.open('app/assets/images/albus.jpeg')))
tim = User.create(email: 'tim@icloud.com', name: 'Tim Cook', password: 123456, image: (File.open('app/assets/images/cook.jpeg')))
big = User.create(email: 'hiro@sanfransokyo.com', name: 'Hiro Hamada', password: 123456, image: (File.open('app/assets/images/hiro.jpeg')))
huang = User.create(email: 'xuangdi@first.emperorer', name: 'Shi Huangdi', password: 123456, image: (File.open('app/assets/images/jasp.jpeg')))
dallas = User.create(email: 'brycehoward@famous.actress', name: 'Bryce Dallas Howard', password: 123456, image: (File.open('app/assets/images/bryce.jpeg')))
sauron = User.create(email: 'sauron@famous.actress', name: 'Lord Sauron', password: 123456, image: (File.open('app/assets/images/sauron.jpeg')))
sam = User.create(email: 'sam@nomore.rings', name: 'Samwise Gamgee', password: 123456, image: (File.open('app/assets/images/sam.jpeg')))
stinson = User.create(email: 'stinson@be.awesome', name: 'Barney Stinson', password: 123456, image: (File.open('app/assets/images/stinson.png')))

Listing.destroy_all

isekai = Listing.create(user_id: demo.id, name: 'Isekai', address: 'Bermuda Triangle', description: 'The Bermuda Triangle, also known as the Devil\'s Triangle, is a loosely-defined region in the western part of the North Atlantic Ocean, where a number of aircraft and ships are said to have disappeared under mysterious circumstances. Most reputable sources dismiss the idea that there is any mystery. The vicinity of the Bermuda Triangle is amongst the most heavily traveled shipping lanes in the world, with ships frequently crossing through it for ports in the Americas, Europe and the Caribbean islands. Cruise ships and pleasure craft regularly sail through the region, and commercial and private aircraft routinely fly over it.', image: (File.open('app/assets/images/bermuda-triangle.jpg')))
mt = Listing.create(user_id: wukong.id, name: 'Mount Huaguo', address: 'Yuntai, Jiangsu, China', description: 'Mount Huaguo is a popular tourist attraction, with over 100 scenic spots and thousands of visitors every year, especially because of its role in the novel Journey to the West. Since the novel is very influential and popular in China, the mountain has many statues based on its heroes, such as a sculpture of the head of Sun Wukong (the Monkey King), a protagonist of the novel, who was also said to be born on the mountain. Near the entrance stand sculptures of the four main characters, along with 109 stone monkeys welcoming visitors as they enter and six stone lions guarding the place. Other attractions related to Sun Wukong include Monkey Stone, Water Curtain Cave, Sanyuan Palace, Yuvu Peak and the South Gate of Heaven, etc.', image: (File.open('app/assets/images/huaguo.jpg')))
hogwartz = Listing.create(user_id: albus.id, name: 'Hogwartz', address: 'Christ Church, St. Aldates, Oxford OX11DP', description: 'Hogwarts is a coeducational, secondary boarding school, taking children from ages eleven to eighteen. Education at Hogwarts is not compulsory, with some students being home schooled as stated in the seventh book. Rowling initially said there are about one thousand students at Hogwarts. She later suggested around six hundred, while acknowledging that this number was still inconsistent with the small number of people in Harry\'s year. She further explained that this had resulted from her creating only 40 characters for Harry\'s year.', image: (File.open('app/assets/images/hogwarts.jpg')))
apple = Listing.create(user_id: tim.id, name: 'Apple HQ', address: '1 Infinite Loop; Cupertino, CA 950114', description: 'Its circular design and extreme scale have earned a media nickname of \'the spaceship\'. Located on a suburban site totaling 175 acres (71 hectares), it houses more than 12,000 employees in one central four-storied circular building of approximately 2,800,000 square feet (260,000 square meters). Steve Jobs wanted the whole campus to look less like an office park and more like a nature refuge. Eighty percent of the site consists of green space planted with drought-resistant trees and plants indigenous to the Cupertino area, and the center courtyard of the main building features an artificial pond.', image: (File.open('app/assets/images/aapl.jpeg')))
sankyo = Listing.create(user_id: big.id, name: 'San Fransokyo', address: 'Pier 15 The Embarcadero, San Francisco, CA 914111', description: 'Big Hero 6 is a 2014 American 3D computer-animated superhero film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. Loosely based on the superhero team of the same name by Marvel Comics, the film is the 54th Disney animated feature film. Directed by Don Hall and Chris Williams, the film tells the story of Hiro Hamada, a young robotics prodigy who forms a superhero team to combat a masked villain.', image: (File.open('app/assets/images/big6.jpg')))
maso = Listing.create(user_id: huang.id, name: 'Mausoleum of the First Qin Emperor', address: 'Lintong District, Xi\'an, Shaanxi, China', description: 'The Mausoleum of the First Qin Emperor (Qin Shi Huang) (Chinese: 秦始皇陵; pinyin: Qínshǐhuáng Líng) is located in Lintong District, Xi\'an, Shaanxi province of China. This mausoleum was constructed over 38 years, from 246 to 208 BC, and is situated underneath a 76-meter-tall tomb mound shaped like a truncated pyramid. The layout of the mausoleum is modeled on the Qin capital Xianyang, divided into inner and outer cities. The circumference of the inner city is 2.5 km (1.55 miles) and the outer is 6.3 km (3.9 miles). The tomb is located in the southwest of the inner city and faces east. The main tomb chamber housing the coffin and burial artifacts is the core of the architectural complex of the mausoleum.', image: (File.open('app/assets/images/qin.jpeg')))
dino = Listing.create(user_id: dallas.id, name: 'Jurassic World', address: 'Kualoa Ranch, Oahu Hawaii', description: 'Upon arrival, the preserve is revealed to be Jurassic Park, a theme park showcasing cloned dinosaurs. The animals have been recreated using damaged dinosaur DNA found in blood inside of gnats and ticks fossilized and preserved in amber. Gaps in the genetic code have been filled in with "compatible" reptilian, avian or amphibian DNA. To control the population, all specimens on the island are lysine-deficient and X-Ray sterilized females. Hammond proudly touts InGen\'s advances in genetic engineering and shows his guests through the island\'s vast array of automated systems.', image: (File.open('app/assets/images/dino.jpg')))
doom = Listing.create(user_id: sauron.id, name: 'Mt Doom', address: 'Mountain Doom, LOTR', description: 'According to Tolkien, Mount Doom corresponds to the volcano of Stromboli in Sicily. However, some writers have compared various 21st century eruptions of Mount Etna to Mount Doom.
The phrase \'crack of doom\' is the modern English for the Old English term for Ragnarök, the great catastrophe of Norse mythology. The term became used for the Christian Day of Judgement, as by William Shakespeare in Macbeth (Act 4, scene 1, line 117). This appealed to Tolkien, who was a Professor of Old English. Another possible source of the name is a long story by Algernon Blackwood.', image: (File.open('app/assets/images/doom.jpg')))

# testing2 = Listing.create(user_id: demo.id, name: 'KA', address: 'M', description: 'D', image: (File.open('app/assets/images/bermuda-triangle.jpg')))

Review.destroy_all

aa = Review.create(author_id: wukong.id, listing_id: apple.id, body: 'The place is utterly misleading. I came here hearing great reviews about the place-- how it had everything you could think of and how it was the setting of the future. But there are no fruits here. None. The king gives this place a big fat 0')
ab = Review.create(author_id: wukong.id, listing_id: apple.id, body: 'All right. Fine. So I came back a second time because someone corrected me about my earlier review. Apparently this place isn\t known for actual apples. They just call themselves that for some sadistic reason. The phones ARE nice though.')
ac = Review.create(author_id: albus.id, listing_id: apple.id, body: 'Had the see what all the hubub in the muggle world was about. They really came up with some great stuff-- might throw the owl carrier business into chaos but change IS always needed. Revolution and progress should be encouraged, not feared.')
ae = Review.create(author_id: tim.id, listing_id: isekai.id, body: 'Place was a bit too watery. Host was nice, but made no mention of the need for a boat. Not to mention the humidity. Though the amenities were nice, it would have been so much better if they justed invested in an iBoat.')
ad = Review.create(author_id: tim.id, listing_id: isekai.id, body: 'Went back for a second time. They actually followed my advice from before and got the iBoat. It really did make the experience so much better... except... it would really take this amazing experience to the next level if they get the new iPhone X to flesh out the apple ecosystem')
af = Review.create(author_id: demo.id, listing_id: apple.id, body: Faker::Lorem.paragraph)
ag = Review.create(author_id: sauron.id, listing_id: doom.id, body: 'Great authentic sulfur and molten rock smell. Feels just like home')
ah = Review.create(author_id: sam.id, listing_id: doom.id, body: 'Went there. Dropped the ring. EXTREMELY rude hosts. Never coming back. Don\'t go!')
ai = Review.create(author_id: stinson.id, listing_id: doom.id, body: Faker::HowIMetYourMother.quote)
aj = Review.create(author_id: stinson.id, listing_id: dino.id, body: Faker::HowIMetYourMother.quote)
ak = Review.create(author_id: stinson.id, listing_id: sankyo.id, body: Faker::HowIMetYourMother.quote)
al = Review.create(author_id: stinson.id, listing_id: mt.id, body: Faker::HowIMetYourMother.quote)
am = Review.create(author_id: stinson.id, listing_id: maso.id, body: Faker::HowIMetYourMother.quote)
an = Review.create(author_id: stinson.id, listing_id: maso.id, body: Faker::HowIMetYourMother.quote)
ao = Review.create(author_id: stinson.id, listing_id: mt.id, body: Faker::HowIMetYourMother.quote)
ap = Review.create(author_id: stinson.id, listing_id: hogwartz.id, body: Faker::HowIMetYourMother.quote)
