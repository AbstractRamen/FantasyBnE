# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

a = User.create(email: 'adventurer@dream.brave', name: 'Brave adventurer', password: 123456)
b = User.create(email: 'wukong@best.mountain', name: 'Sun Wukong', password: 123456)
c = User.create(email: 'admin@hogwartz.edu', name: 'Albus Dumbledore ', password: 123456)
d = User.create(email: 'tim@icloud.com', name: 'Tim Cook', password: 123456)
e = User.create(email: 'hiro@sanfransokyo.com', name: 'Hiro Hamada', password: 123456)
f = User.create(email: 'xuangdi@first.emperorer', name: 'Shi Huangdi', password: 123456)
g = User.create(email: 'brycehoward@famous.actress', name: 'Bryce Dallas Howard', password: 123456)

Listing.destroy_all

a1 = Listing.create(user_id: a.id, name: 'Isekai', address: 'Bermuda Triangle', description: 'Another world')
b1 = Listing.create(user_id: b.id, name: 'Mount Huaguo', address: 'Yuntai, Jiangsu, China', description: 'Just... befriend the monkies')
c1 = Listing.create(user_id: c.id, name: 'Hogwartz', address: 'Christ Church, St. Aldates, Oxford OX11DP', description: 'No muggles!')
d1 = Listing.create(user_id: d.id, name: 'Apple HQ', address: '1 Infinite Loop; Cupertino, CA 95014', description: 'Just wait 6 months for the S')
e1 = Listing.create(user_id: e.id, name: 'San Fransokyo', address: 'Pier 15 The Embarcadero, San Francisco, CA 94111', description: 'Learn, play, discover!')
f1 = Listing.create(user_id: f.id, name: 'Mausoleum of the First Qin Emperor', address: 'Lintong District, Xi\'an, Shaanxi, China', description: 'Careful of the mercury')
g1 = Listing.create(user_id: g.id, name: 'Jurassic World', address: 'Kualoa Ranch, Oahu Hawaii', description: '...don\'t let them hear you')
